class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :room_id, null: false
      t.text :body, null: false
      t.string :status, null: false

      t.timestamps
    end
    add_index :messages, :user_id
    add_index :messages, :room_id
  end
end
