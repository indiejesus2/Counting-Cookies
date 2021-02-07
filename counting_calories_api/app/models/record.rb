class Record < ApplicationRecord
    belongs_to :user
    has_many :days
    validates :date, uniqueness: true
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
    
end