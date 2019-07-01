require 'rails_helper'

RSpec.describe Api::V4::ArticlesController, type: :controller do
  let(:article) { FactoryGirl.create(:article) }
  describe '#index' do

  end

  describe '#show' do
    context  'when params are valid' do
      before do
        get "show", :params => { :id => article.name }
      end
      it 'should return expected record' do
        expect((JSON.parse response.body)["article"]["name"]).to eq article.attributes["name"]
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
        expect((JSON.parse response.body)["article"]).to eq false
      end

      it 'should have errors' do
        expect((JSON.parse response.body)["errors"].any?).to eq true
      end
    end
  end

end
