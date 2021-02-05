class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :name, :target
    attribute :records do |user|
        data = Record.where(user_id: user.id)
        records = {}
        data.each do |record|
            records[:id] = record.id
            records[:item_name] = record.daily_allowance
            records[:item_calories] = record.daily_allowance
        end
    end
end