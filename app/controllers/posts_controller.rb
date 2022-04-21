class PostsController < ApplicationController
    def create
        post = post.create!(post_params)
        render json: post, status: :created
    end
    def index
        render json: Post.all, status: :ok
    end
    def destroy
        post = finder
        post.destroy
        head :no_content
    end
    def update
    end
    def show
        post = finder
        render json: post, status: :ok, serializer: PostWithCommentsSerializer
    end
    private
    def post_params
        params.permit(:user_id, :title, :content)
    end
    def finder
        post = post.find(params[:id])
    end
end
