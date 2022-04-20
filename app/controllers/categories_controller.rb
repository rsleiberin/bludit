class CategoriesController < ApplicationController
    def create
        category = Category.create!(category_params)
        render json: category, status: :created
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
        category = finder
        category.update(category_params)
        render json: category, status: :ok
    end
    private
    def category_params
        params.permit(:user_id, :title)
    end
    def finder
        category = Category.find(params[:id])
    end
end
