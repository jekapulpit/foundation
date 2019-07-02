class Api::V4::UsersController < ApplicationController
  skip_before_action :authenticate_user, only: %i[show]

  def show
    begin
      user = User.includes(:drafts).find(params[:id])
      render json: {
          user: {
              info: user,
              drafts: user.drafts
          },
          errors: {}
      }
    rescue ActiveRecord::RecordNotFound => exception
      render json: { user: false, errors: { record: [exception.message] } }
    end
  end
end
