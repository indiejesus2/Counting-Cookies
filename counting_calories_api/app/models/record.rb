class Record < ApplicationRecord
    belongs_to :user
    has_many :daily_records
    validates :date, uniqueness: true

end