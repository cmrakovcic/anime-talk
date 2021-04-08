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

    def create
        @comment = current_user.comments.build(comment_params)
        if @comment.save
            redirect_to comments_path
        else
            render :json
        end
    end

    def show
    end

    def edit
    end

    def update
        if @comment.update(comment_params)
            redirect_to comment_path(@comment)
        else
            render :json
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        redirect_to comments_path
    end

    private

    def comment_params
        params.require(:comment).permit(:content, :anime_id)
    end

    def set_comment
        @comment = Comment.find_by(id: params[:id])
        if !@comment
            flash[:message] = "Comment was not found"
            redirect_to comments_path
        end
    end

    def redirect_if_not_comment_author
        redirect_to comments_path if @comment.user != current_user
    end
end