class User < ApplicationRecord
    has_many :daily_records
    validates :name, presence: :true
    validates_numericality_of :target, :greater_than_or_equal_to => 1200
end
