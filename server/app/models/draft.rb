class Draft < ApplicationRecord
  self.primary_key = :name
  belongs_to :user
end
