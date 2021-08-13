class Api::V1::UsersController < ApplicationController

    wrap_parameters :user, include: [:username, :password, :name, :target]


    def index
        @users = User.all
        @records = Record.all
        render json: UserSerializer.new(@users)
    end

    def create
        @user = User.new(user_params)
        if @user.valid?
            @user.save
            @token = encode_token(@user)
            render json: UserSerializer.new( user: @user, jwt: @token)
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :target, :username, :password)
    end

end
