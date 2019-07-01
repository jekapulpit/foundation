class AddArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles, id: false do |t|
      t.string :name, primary_key: true
      t.string :title
      t.string :body
      t.integer :article_type
      t.timestamps
    end
  end
end
