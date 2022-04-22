class PostsController < ApplicationController
    skip_before_action :authorized, only: :index
    def create
        post = Post.create!(post_params)
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
        pp "test"
        post = finder
        post.update(post_params)
        render json: post, status: :ok
    end

    def show
        post = finder
        render json: post, status: :ok, serializer: PostWithCommentsSerializer
    end
    private
    def post_params
        params.permit(:user_id, :title, :content, :category_id)
    end
    def finder
        post = Post.find(params[:id])
    end
end