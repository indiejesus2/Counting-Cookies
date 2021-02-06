class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :name, :target
    attribute :records do |user|
        data = Record.where(user_id: user.id)
        records = {}
        data.each do |record|
            records[:id] = record.id
            records[:date] = record.date
            records[:daily_allowance] = record.daily_allowance
            records[:daily_total] = record.daily_total
        end
    end
    attribute :days do |record|
        days = Day.where(record_id: record.id)
        recs = {}
        days.each do |day|
            recs[:id] = day.id
            recs[:item_name] = day.item_name
            recs[:item_calories] = day.item_calories
        end
    end
end