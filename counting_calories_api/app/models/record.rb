class Record < ApplicationRecord
    belongs_to :user
    has_many :days
    validates :date, uniqueness: true
    accepts_nested_attributes_for :days

    def items(id)
        self.days
    end

    def add_items(item_name, item_calories)
        items = {}
        items[item_name] = item_calories
        byebug
        return items
    end
end