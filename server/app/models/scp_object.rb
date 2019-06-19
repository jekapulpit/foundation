class ScpObject < ApplicationRecord
  self.primary_key = :number
  enum object_class: [:Safe, :Euclid, :Keter, :Thaumiel, :Other]
  validates :object_class,
           inclusion: { in: object_classes.keys, message: 'invalid object class' }
  validates :number,
            uniqueness: { case_sensitive: false, message: 'this number is already taken' }
end
