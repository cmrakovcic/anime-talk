class AnimesController < ApplicationController

    def index
        @animes = Anime.all.includes(:comments)
    end

    def show
        @anime = Anime.find_by_id(params[:id])
    end

    def new
    end
end
