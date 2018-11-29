class CreateUrls < ActiveRecord::Migration[5.2]
  def change
    create_table :urls do |t|
      t.string :url, null: false
      t.string :mini_url, null: false
      t.string :title
      t.integer :count, null: false
    end
    add_index :urls, :url, unique: true
  end
end
