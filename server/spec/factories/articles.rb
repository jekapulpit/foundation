FactoryGirl.define do
  factory :article do
    sequence(:name) { |n| "#{n}" }
    sequence(:title) { |n| "SCP-#{n}" }
    body 'test containment procedures'
    article_type 1
  end
end
