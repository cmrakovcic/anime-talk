class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:user][:username])
        if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id
            render json: @user, status: 200 
      else
        render json: 'user login failed'
      end
    end
  
    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end