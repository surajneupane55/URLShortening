class CreateShortens < ActiveRecord::Migration[5.0]
  def change
    create_table :shortens do |t|
      t.string :url
      t.timestamps
    end
    execute "SELECT setval('shortens_id_seq', 1000000);"
  end
end
