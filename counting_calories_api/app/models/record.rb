class Record < ApplicationRecord
    belongs_to :user
    has_many :days
    # validates :date, uniqueness: true
    accepts_nested_attributes_for :days

    def allowance(params)
        item = Integer(params[:item_calories])
        if !self.daily_allowance
            self.daily_allowance = user.target - item
            self.daily_total = 0
        else
            self.daily_allowance = self.daily_allowance - item
        end
        self.daily_total = self.daily_total + item
    end

    def checkDate(params)
        user = User.find_by_id(params[:user_id])
        if user.records.find_by(date: params[:date])
            false
        else
            self.save
            true
        end
    end
    
end