class AddDefaultToMessageStatus < ActiveRecord::Migration[5.1]
  def change
    remove_column :messages, :status
    add_column :messages, :status, :integer, null: false, default: 0 
  end
end
