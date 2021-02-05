class Api::V1::DailyRecordsController < ApplicationController

    before_action :set_user

    def index
        @records = DailyRecord.all
        render json: @records
    end

    def show
        @record = DailyRecord.find(params[:id])
        render json: @record
    end

    def create
        @record = @user.daily_records.new(record_params)
        byebug
        @record.daily_allowance = @user.target
        @record.save
    end

    private

    def set_user
        @user = User.find(params[:user_id])
    end

    def set_date
        @record = DailyRecord.find(params[:id])
    end

    def record_params
        params.require(:record).permit(:user_id, :item_name, :item_calories, date: )
    end



end
