class CreateTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :tracks do |t|
      t.references :user, foreign_key: true
      t.string :object_id
      t.string :name
      t.text :introduction
      t.string :difficulty
      t.text :completion_time
      t.string :img_url
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6
      t.timestamps
    end
  end
end
