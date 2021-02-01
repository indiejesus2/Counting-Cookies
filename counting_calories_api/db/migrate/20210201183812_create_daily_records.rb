class CreateDailyRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :daily_records do |t|
      t.integer :user_id
      t.datetime :date
      t.integer :daily_total
      t.integer :daily_allowance

      t.timestamps
    end
  end
end
