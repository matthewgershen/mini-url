# == Schema Information
#
# Table name: urls
#
#  id       :bigint(8)        not null, primary key
#  url      :string           not null
#  mini_url :string
#  title    :string
#  count    :integer          not null
#

class Url < ApplicationRecord

  validates :url, :count, presence: true
  validates :url, uniqueness: true
  validate :valid_url

  after_create :generate_mini_url, :get_title

  def generate_mini_url
    self.mini_url = "a-mini-url.herokuapp.com/api/urls/" + self.id.to_s(36)
    self.save
  end

  def get_title
    self.title = Nokogiri::HTML::Document.parse(HTTParty.get(self.url).body).title
    self.save
  end

  def valid_url

    url = URI.parse(self.url)
    if !(url.kind_of?(URI::HTTP) || url.kind_of?(URI::HTTPS))
      errors.add(:url, "must be valid.")
    end
  end
end
