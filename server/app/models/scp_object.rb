class ScpObject < ApplicationRecord
  self.primary_key = :number
  enum object_class_value: [:Safe, :Euclid, :Keter, :Thaumiel, :Other]
  validates :object_class,
           inclusion: { in: object_class_values.keys, message: 'this number is already taken' }
  validates :number,
            uniqueness: { case_sensitive: false, message: 'invalid object class' }
end
