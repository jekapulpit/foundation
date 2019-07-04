FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "#{n}a@mail.ru" }
    password '123456'

    factory :user_with_drafts do
      transient do
        drafts_count 5
      end

      after(:create) do |user, evaluator|
        create_list(:draft, evaluator.drafts_count, user: user)
      end
    end
  end
end
