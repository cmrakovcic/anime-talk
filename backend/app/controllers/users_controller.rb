class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: @user
    end
  end

  private

    def user_params
      params.requre(:user).permit(:username, :email, :password)
    end
end