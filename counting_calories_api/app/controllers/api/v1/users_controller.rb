class Api::V1::UsersController < ApplicationController

    def index
        @users = User.all
        @records = Record.all
        render json: UserSerializer.new(@users)
        # , {include: [:records]}).serialized_json
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: UserSerializer.new(@user)
        end
    end

    # def show
    #     @user = User.find(params[:id])
    #     render json: @user
    # end

    private

    def user_params
        params.require(:user).permit(:name, :target)
    end

end
