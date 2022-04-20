class CategoriesController < ApplicationController
    def create
        Category.create!(category_params)
    end
    def index
        render json: Category.all, status: :ok
    end
    def show
        category = finder
        render json: category,status: :ok, serializer: CategoryWithPostsSerializer
    end
    def destroy
        category = finder
        category.destroy
        head :no_content
    end
    def update
    end
    private
    def category_params
        params.permit(:user_id, :title)
    end
    def finder
        category = Category.find(params[:id])
end
