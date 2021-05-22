class Api::V1::UsersController < ApplicationController

    def index
        @users = User.all
        @records = Record.all
        render json: UserSerializer.new(@users)
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: UserSerializer.new(@user)
        end
    end

    def show
        @user = User.find(username: user_params[:username])
        if @user && @user.authenticate(user_params[:password])
            session[:user_id] = @user.id
            render json: UserSerializer.new(@user)
        else
            render json: "Incorrect Username/Password"
        end

    end

    private

    def user_params
        params.require(:user).permit(:name, :target, :username, :password)
    end

end
