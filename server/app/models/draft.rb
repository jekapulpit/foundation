class Draft < ApplicationRecord
  self.primary_key = :name
  belongs_to :article
  belongs_to :user
end
