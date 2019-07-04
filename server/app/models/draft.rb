class Draft < ApplicationRecord
  self.primary_key = :name
  belongs_to :article, foreign_key: :article_id
  belongs_to :user
end
