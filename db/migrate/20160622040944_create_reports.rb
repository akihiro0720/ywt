class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.integer :user_id
      t.string :date
      t.string :y
      t.string :w
      t.string :t
      t.boolean :draft

      t.timestamps null: false
    end
  end
end
