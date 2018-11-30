class Api::UrlsController < ApplicationController

  def create

    @url = Url.find_by(url: url_params[:url])
    if @url
      @url.count += 1
      @url.save
      render json: @url
    else

      @url = Url.new(url_params)
      @url.count = 1
      if @url.save
        render json: @url
      else
        render json: @url.errors.full_messages, status: 422
      end
    end
  end

  def show
    @url = Url.find(params[:id])
    redirect_to(@url.url)
  end

  def index
    @urls = Url.limit(100).order('count desc')
    render :index
  end

  private

  def url_params
    params.require(:url).permit(
      :url
    )
  end

end
