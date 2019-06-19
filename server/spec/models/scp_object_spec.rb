require 'rails_helper'

RSpec.describe ScpObject, type: :model do
  describe '#object_class' do
    it "should have a valid object_class" do
      expect { FactoryGirl.create(:scp_object, :object_class => "invalid_class") }.to raise_error(ArgumentError)
      expect { FactoryGirl.create(:scp_object, :keter) }.not_to raise_error(ArgumentError)
    end
  end
end
