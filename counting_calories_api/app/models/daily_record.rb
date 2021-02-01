class DailyRecord < ApplicationRecord
    belongs_to :user
    validates :user_id, :date, presence: :true
end
