class Api::V1::RecordsController < ApplicationController

    before_action :set_user

    def index
        @records = Record.all
        render json: @records
    end

    def show
        @record =  Record.find(params[:id])
        render json: @record
    end

    def create
        @record = @user.records.new(record_params)
        if @record.save
            @record.daily_allowance = @user.target
        else 
            @old_record = @user.daily_records.find_by(date: @record.date)
            byebug
            redirect_to edit_api_v1_user_daily_record_path(@old_record.id)
        end
    end

    def edit
        byebug
    end

    private

    def set_user
        @user = User.find(params[:user_id])
    end

    def set_date
        @record =  Record.find(params[:id])
    end

    def record_params
        params.require(:daily_record).permit(:user_id, :date)
    end



end
