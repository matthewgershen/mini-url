@urls.each do |url|
  json.set! url.id do
    json.extract! url, :id, :url, :mini_url, :title, :count
  end
end
