class Api::V1::RecordsController < ApplicationController

    before_action :set_user
    wrap_parameters :record, include: [:user_id, :date, :item_name, :item_calories]

    def index
        @records = Record.all
        render json: @records
    end

    def show
        @record =  Record.find(params[:id])
        render json: @record
    end

    def new
        byebug
    end

    def create
        @record = @user.records.new(record_params)
        if @record.save
            @record.daily_allowance = (@user.target - Integer(day_params[:item_calories]))
            @record.days.create(day_params)
            @record.save
            # @record.items(@record.id)
            # @record.add_items(day_params[:item_name], day_params[:item_calories])
        else 
            @old_record = @user.records.find_by(date: @record.date)
            @old_record.days.create(day_params)
            @old_record.daily_allowance = (@old_record.daily_allowance - Integer(day_params[:item_calories]))
            @old_record.save
            byebug
            # redirect_to edit_api_v1_user_record_day_path(@old_record.id)
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
        params.require(:record).permit(:date, :user_id)
    end

    def day_params
        params.require(:record).permit(:item_name, :item_calories)
    end

end
