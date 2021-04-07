class CreateAuthProviders < ActiveRecord::Migration[6.1]
  def change
    create_table :auth_providers do |t|
      t.integer :user_id
      t.string :provider
      t.string :uid
      t.string :token
      t.timestamps
    end

    add_index :auth_providers, [:user_id, :uid], unique: true
  end
end
