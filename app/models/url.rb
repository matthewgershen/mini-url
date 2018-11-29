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


  after_create :generate_mini_url

  def generate_mini_url
    self.mini_url = "www.miniurl.com/" + self.id.to_s(36)
    self.save
  end

end
