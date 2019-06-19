class Api::V4::ScpObjectsController < ApplicationController

  def index
    objects = ScpObject.all
    render json: { objects: objects }
  end

  def show; end

  def create; end

  def update
    object = ScpObject.find(params[:id])
    begin
      success = object.update_attributes(scp_object_params)
      render json: { success: success, object: object }
    rescue ArgumentError => exception
      render json: { success: false, error: 'Error! Put in a valid attributes'  }
    end
  end

  def destroy
    begin
      success = ScpObject.find(params[:id]).destroy
      render json: { success: !!success, object: success }
    rescue Exception => exception
      render json: { success: false, error: exception.message }
    end
  end

  private

  def scp_object_params
    params.require(:scp_object).permit(%i[name object_class containment_procedures description])
  end
end
