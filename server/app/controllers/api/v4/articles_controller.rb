class Api::V4::ArticlesController < ApplicationController
  skip_before_action :authenticate_user, only: %i[index show]

  def index
    articles = Article.all
    render json: { articles: articles }
  end

  def show
    begin
      article = Article.find(params[:id])
      render json: { article: article, errors: {} }
    rescue ActiveRecord::RecordNotFound => exception
      render json: { article: false, errors: { record: [exception.message] } }
    end
  end

  def create
    new_article = Article.create(article_params)
    render json: { success: new_article.errors.any?, article: new_article, errors: new_article.errors }
  end

  def update
    article = Article.find(params[:id])
    begin
      success = article.update_attributes(article_params)
      render json: { success: success, article: article, errors: article.errors }
    rescue ActiveRecord::RecordNotFound => exception
      render json: { success: false, errors: { record: [exception.message] } }
    end
  end

  def destroy
    begin
      destroying_article  = Article.find(params[:id]).destroy
      render json: { success: !!destroying_article, article: destroying_article }
    rescue ActiveRecord::RecordNotFound => exception
      render json: { success: false, errors: { record: [exception.message] } }
    end
  end

  private

  def article_params
    params.require(:article).permit(%i[name title article_type body])
  end
end
