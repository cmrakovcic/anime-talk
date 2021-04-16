class UsersController < ApplicationController

    def create
        user = User.find_by(email: user_params[:email])
        if user && user.authenticate(user_params[:password])
            render json: @user
        else
            render json: "User login failed, please try again"
        end
    end

    private

        def user_params
            params.require(:user).permit(:email, :password)
        end
end