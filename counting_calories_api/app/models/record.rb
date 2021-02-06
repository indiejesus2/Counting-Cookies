class Record < ApplicationRecord
    belongs_to :user
    has_many :days
    validates :date, uniqueness: true

end