class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :reports_id
      t.string :comment
      t.string :commented_user

      t.timestamps null: false
    end
  end
end
