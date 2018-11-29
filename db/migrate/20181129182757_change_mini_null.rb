class ChangeMiniNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :urls, :mini_url, true
  end
end
