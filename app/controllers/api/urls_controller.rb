class Api::UrlsController < ApplicationController

  def create
    @url = Url.new(url_params)
    @url.count = 1
    if @url.save
      render :show
    else
      render json: @url.errors.full_messages, status: 422
    end
  end

  def show
    @url = Url.find(params[:id])
    render :show
  end

  private

  def url_params
    params.require(:url).permit(
      :url
    )
  end

end
