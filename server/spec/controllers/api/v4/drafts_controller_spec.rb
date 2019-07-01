require 'rails_helper'

RSpec.describe Api::V4::DraftsController, type: :controller do
  let(:user) { FactoryGirl.create(:user_with_drafts) }
  let(:draft) { user.drafts.first }
  describe '#index' do
    before do
      get "index", :params => { :id => user.id }
    end
    it 'should return expected number of drafts' do
      expect((JSON.parse response.body)["drafts"].count).to eq user.drafts.count
    end
  end

  describe '#show' do
    context  'when params are valid' do
      before do
        get "show", :params => { :id => draft.name }
      end
      it 'should return expected record' do
        expect((JSON.parse response.body)["draft"]["name"]).to eq draft.attributes["name"]
      end

      it 'should not have any errors' do
        expect((JSON.parse response.body)["errors"].any?).to eq false
      end
    end

    context  'when params are invalid' do
      before do
        get "show", :params => { :id => 'invalid name' }
      end
      it 'should return false' do
        expect((JSON.parse response.body)["draft"]).to eq false
      end

      it 'should have errors' do
        expect((JSON.parse response.body)["errors"].any?).to eq true
      end
    end
  end

end
