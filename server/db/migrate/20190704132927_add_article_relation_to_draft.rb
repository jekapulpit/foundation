class AddArticleRelationToDraft < ActiveRecord::Migration[5.2]
  def change
    add_reference :drafts, :article, type: :string, index: true
    add_foreign_key :drafts, :articles, column: :article_id, primary_key: "name"
  end
end
