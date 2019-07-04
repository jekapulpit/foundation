class AddDraft < ActiveRecord::Migration[5.2]
  def change
    create_table :drafts, id: false do |t|
      t.string :name, primary_key: true
      t.string :title
      t.string :body
      t.integer :article_type
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
