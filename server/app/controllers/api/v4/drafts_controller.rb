class Api::V4::DraftsController < ApplicationController
  skip_before_action :authenticate_user, only: %i[index show]

  def index
    drafts = User.find(params[:id]).drafts
    render json: { drafts: drafts }
  end

  def show
    begin
      draft = Draft.find(params[:id])
      render json: { draft: draft, errors: {} }
    rescue ActiveRecord::RecordNotFound => exception
      render json: { draft: false, errors: { record: [exception.message] } }
    end
  end

  def create
    new_draft = Draft.new(draft_params)
    current_user.drafts << new_draft
    render json: { success: new_draft.errors.any?, draft: new_draft, errors: new_draft.errors }
  end

  def update
    draft = Draft.find(params[:id])
    begin
      success = draft.update_attributes(draft_params)
      render json: { success: success, draft: draft, errors: draft.errors }
    rescue ActiveRecord::RecordNotFound => exception
      render json: { success: false, errors: { record: [exception.message] } }
    end
  end

  def destroy
    begin
      destroying_draft = Draft.find(params[:id]).destroy
      render json: { success: !!destroying_draft, draft: destroying_draft }
    rescue ActiveRecord::RecordNotFound => exception
      render json: { success: false, errors: { record: [exception.message] } }
    end
  end

  private

  def draft_params
    params.require(:draft).permit(%i[name title article_type body])
  end
end
