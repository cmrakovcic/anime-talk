class AnimesController < ApplicationController
  before_action :set_params, only: [:show, :update, :destroy]

  def index
    @animes = Anime.all
    render json: @animes, only: [:id, :title, :creator], status: 200
  end

  def create
    @anime = Anime.create(anime_params)
    render json: @anime, status: 200
  end

  def show
    render json: @anime, status: 200
  end

  def destroy
    @anime.destroy
  end

  private

  def anime_params
    params.require(:anime).permit(:title, :creator)
  end

  def set_params
    @anime = Anime.find(params[:id])
  end
end
