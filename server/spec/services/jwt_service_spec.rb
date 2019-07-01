require 'rails_helper'

describe JwtService do
  subject { described_class }

  let(:payload) { { 'one' => 'two' } }
  let(:token) { 'eyJhbGciOiJIUzI1NiJ9.eyJvbmUiOiJ0d28ifQ.M2MXJLucV13EMbzal3Ojpf4bTAi4SY6Yyu28gvo-YT8' }

  describe '.encode' do
    it { expect(subject.encode(payload)).to eq(token) }
  end

  describe '.decode' do
    it { expect(subject.decode(token)).to eq(payload) }
  end
end
