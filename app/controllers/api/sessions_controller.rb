class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            redirect_to api_user_url(@user)
        else
            render json: ["The username or password is not correct."], status: 401
        end
    end


    def destroy
        if current_user
            logout!
        else
            render json: ["You must be logged in"], status: 404
        end
    end
end