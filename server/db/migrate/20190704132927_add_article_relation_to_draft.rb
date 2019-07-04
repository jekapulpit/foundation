class AddArticleRelationToDraft < ActiveRecord::Migration[5.2]
  def change
    add_reference :drafts, :article, index: true
  end
end
