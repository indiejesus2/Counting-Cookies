class Api::V1::RecordsController < ApplicationController

    before_action :set_user
    before_action :set_record, only: [:show, :edit, :update]
    wrap_parameters :record, include: [:user_id, :date, :item_name, :item_calories]

    def index
        @records = Record.all
        render json: RecordSerializer.new(@records) 
    end

    def show
        render json: RecordSerializer.new(@record)
    end

    def create
        @record = @user.records.new(record_params)
        if @record.save
            @record.allowance(day_params)
            @record.days.create(day_params)
            @record.save
            render json: RecordSerializer.new(@record)
        else 
            @old_record = @user.records.find_by(date: @record.date)
            redirect_to update
        end
    end
    
    def update
        @old_record.days.create(day_params)
        @old_record.allowance(day_params)
        @old_record.save
        redirect_to api_v1_user_record_path(@user, @old_record)
        return
    end

    private

    def set_user
        @user = User.find(params[:user_id])
    end

    def set_record
        @record = Record.find(params[:id])
    end

    def record_params
        params.require(:record).permit(:date, :user_id)
    end

    def day_params
        params.require(:record).permit(:item_name, :item_calories)
    end

end
