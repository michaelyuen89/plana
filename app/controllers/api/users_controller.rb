class Api::UsersController < ApplicationController 
    skip_before_action :verify_authenticity_token
    
    def new
        @user = User.new
        render :new 
    end 

    def show
        @user = User.find(params[:id])
        render :show
    end
    
    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            login!(@user)
            render :show 
        else  
            render json: @user.errors.full_messages, status: 401
            
        end 
    end 


    private 
    def user_params
        params.require(:user).permit(:name, :email, :password)
    end 

end 
