class Api::V4::ScpObjectsController < ApplicationController
  skip_before_action :authenticate_user

  def index
    objects = ScpObject.all
    render json: { objects: objects }
  end

  def show
    begin
      object = ScpObject.find(params[:id])
      render json: { object: object, errors: {} }
    rescue ActiveRecord::RecordNotFound => exception
      render json: { object: false, errors: { record: [exception.message] } }
    end
  end

  def create
    begin
      new_object = ScpObject.create(scp_object_params)
      render json: { success: new_object.errors.any?, object: new_object, errors: new_object.errors }
    rescue ArgumentError => exception
      render json: { success: false, errors: { object_class: [exception.message] } }
    end
  end

  def update
    object = ScpObject.find(params[:id])
    begin
      success = object.update_attributes(scp_object_params)
      render json: { success: success, object: object, errors: object.errors }
    rescue ActiveRecord::RecordNotFound => exception
      render json: { success: false, errors: { record: [exception.message] } }
    end
  end

  def destroy
    begin
      destroying_object  = ScpObject.find(params[:id]).destroy
      render json: { success: !!destroying_object, object: destroying_object }
    rescue ActiveRecord::RecordNotFound => exception
      render json: { success: false, errors: { record: [exception.message] } }
    end
  end

  private

  def scp_object_params
    params.require(:scp_object).permit(%i[number name object_class containment_procedures description])
  end
end
