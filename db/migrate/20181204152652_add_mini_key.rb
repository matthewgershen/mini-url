class AddMiniKey < ActiveRecord::Migration[5.2]
  def change
    add_column :urls, :mini_key, :string
  end
end
