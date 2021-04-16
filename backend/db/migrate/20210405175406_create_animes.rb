class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :creator
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
