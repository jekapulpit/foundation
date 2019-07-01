FactoryGirl.define do
  factory :draft do
    sequence(:name) { |n| "#{n}" }
    sequence(:title) { |n| "SCP-#{n}" }
    body 'test containment procedures'
    user nil
    article_type 1
  end
end
