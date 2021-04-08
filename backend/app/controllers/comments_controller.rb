class CommentsController < ApplicationController

    def index
        if params[:anime_id] && @anime.find_by_id(params[:anime_id])
            @comments = @anime.comments
        else
            @error = "That anime doesn't exist" if params[:anime_id]
            @comments = Comment.all
        end
    end

    def new
        if params[:anime_id] && @anime = Anime.find_by_id(params[:anime_id])
            @comment = @anime.comments.build
        else
            @error = "That anime doesn't exist" if params[:anime_id]
            @comment = Comment.new
        end
    end
end