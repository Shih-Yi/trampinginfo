class CreateReports < ActiveRecord::Migration[6.1]
  def change
    create_table :reports do |t|
      t.references :track, foreign_key: true
      t.references :user, foreign_key: true
      t.string :report_type
      t.text :location
      t.text :description
      t.datetime :report_at
      t.timestamps
    end
  end
end
