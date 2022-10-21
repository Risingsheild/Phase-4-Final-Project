class CreatePlatforms < ActiveRecord::Migration[7.0]
  def change
    create_table :platforms do |t|
      t.string :title 
      t.string :image_url

      t.timestamps
    end
  end
end
