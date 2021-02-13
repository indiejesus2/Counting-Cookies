class Record < ApplicationRecord
    belongs_to :user
    has_many :days
    # validates :date, uniqueness: true
    accepts_nested_attributes_for :days

    def allowance
        items = self.days.map{|day| day.item_calories}
        self.daily_allowance = user.target - items.sum
        self.daily_total = user.target - self.daily_allowance
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