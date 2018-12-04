class AddMiniKeyIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :urls, :mini_key
  end
end
