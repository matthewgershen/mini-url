class Api::UrlsController < ApplicationController

  def create

    @url = Url.find_by(url: params[:url])
    if @url
      @url.count += 1
      @url.save
      render json: @url
    else

      @url = Url.new(url: params[:url])
      @url.count = 1
      if @url.save
        render json: @url
      else
        render json: @url.errors.full_messages, status: 422
      end
    end
  end

  def show
    @url = Url.find_by(mini_key: params[:id])
    redirect_to(@url.url)
  end

  def index
    @urls = Url.limit(100)
    render :index
  end



end
