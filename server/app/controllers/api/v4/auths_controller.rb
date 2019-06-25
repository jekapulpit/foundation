class Api::V4::AuthsController < ApplicationController
  def create
    token_command = Users::AuthenticateUserCommand.call(*params.slice(:user, :password).values)

    if token_command.success?
      render json: { token: token_command.result }
    else
      render json: { error: token_command.errors }, status: :unauthorized
    end
  end
end
