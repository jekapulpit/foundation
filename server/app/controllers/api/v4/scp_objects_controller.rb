class Api::V4::ScpObjectsController < ApplicationController

  def index
    objects = ScpObject.all
    render json: { objects: objects }
  end

  def show; end

  def create; end

  def update; end

  def destroy; end

end
