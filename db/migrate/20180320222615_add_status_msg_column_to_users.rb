class AddStatusMsgColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :statusMsg, :string
  end
end
