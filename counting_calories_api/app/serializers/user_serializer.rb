class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :name, :target
    attribute :daily_records do |user|
        data = DailyRecord.where(user_id: user.id)
        records = {}
        data.each do |record|
            records[:id] = record.id
            records[:item_name] = record.item_name
            records[:item_calories] = record.item_calories
        end
    end
end