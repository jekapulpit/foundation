FactoryGirl.define do
  factory :scp_object do
    sequence(:number) { |n| "#{n}" }
    sequence(:name) { |n| "SCP-#{n}" }
    object_class 'Other'
    description 'test description'
    containment_procedures 'test containment procedures'
    trait :safe do
      object_class 'Safe'
    end
    trait :euclid do
      object_class 'Euclid'
    end
    trait :keter do
      object_class 'Keter'
    end
    trait :taumiel do
      object_class 'Taumiel'
    end
  end
end
