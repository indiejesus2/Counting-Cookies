class Api::V1::DaysController < ApplicationController

    before_action :set_item, :set_date

    # def index
    #     byebug
    #     @days = @user.records.days.all
    #     render json: @days
    # end

    # def show
    #     @day =  Day.find(params[:id])
    #     render json: @record
    # end

    # def new
    #     byebug
    # end

    # def create
    #     @record = @user.records.new(record_params)
    #     if @record.save
    #         @record.daily_allowance = @user.target
    #     else 
    #         @old_record = @user.daily_records.find_by(date: @record.date)
    #         redirect_to edit_api_v1_user_record_daily_path(@old_record.id)
    #     end
    # end

    # def edit
    #     byebug
    # end

    def destroy
        @item.destroy
        render json: RecordSerializer.new(@record)
    end


    private

    def set_user
        @user = User.find(params[:user_id])
    end

    def set_date
        @record =  Record.find(params[:record_id])
    end

    def set_item
        @item = Day.find(params[:id])
    end

    def record_params
        params.require(:day).permit(:user_id, :date)
    end



end