class GetTitleJob < ApplicationJob
  queue_as :default

  def perform(new_url)
    new_url.title = Nokogiri::HTML::Document.parse(HTTParty.get(new_url.url).body).title
    new_url.save
  end
end
