require 'rails_helper'

RSpec.describe Api::V4::ScpObjectsController, type: :controller do
  let(:object) { FactoryGirl.create(:scp_object, :euclid) }
  describe '#index' do

  end

  describe '#show' do
    context  'when params are valid' do
      before do
        get "show", :params => { :id => object.number }
      end
      it 'should return expected record' do
        expect((JSON.parse response.body)["object"]["name"]).to eq object.attributes["name"]
      end

      it 'should not have any errors' do
        expect((JSON.parse response.body)["errors"].any?).to eq false
      end
    end

    context  'when params are invalid' do
      before do
        get "show", :params => { :id => 'invalid number' }
      end
      it 'should return false' do
        expect((JSON.parse response.body)["object"]).to eq false
      end

      it 'should have errors' do
        expect((JSON.parse response.body)["errors"].any?).to eq true
      end
    end
  end

end
