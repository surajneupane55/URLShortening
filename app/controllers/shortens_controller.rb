class ShortensController < ApplicationController
  def index
    @url = Shorten.last
  end
  def new
    @url = Shorten.new
  end

  def create
    @url = Shorten.new(url_params)
      if @url.save
      render json: @url, methods: :short_id
    else
       render json: @user.errors, status: 500
    end
  end

  def show
    @out_url = Shorten.find_by_short_id(params[:id])
    redirect_to @out_url.url
  end

  private
  def url_params
    params.require(:shorten).permit(:url)
  end
end
