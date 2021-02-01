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


end
