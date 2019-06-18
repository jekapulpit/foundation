class ScpObject < ApplicationRecord
  self.primary_key = :number
  enum object_class: [:Safe, :Euclid, :Keter, :Thaumiel, :Other]
  validates :object_class,
           inclusion: { in: object_classes.keys}
end
