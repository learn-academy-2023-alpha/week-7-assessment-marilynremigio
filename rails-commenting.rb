# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) class BlogPostsController inherits from class ApplicationController and coordinates the interactions between the user, views, and the model. Here we can create instance variables stored in controller action methods
class BlogPostsController < ApplicationController
  def index
    # ---2) creates an instance variable @posts to hold active record query BlogPost.all, which is all the instances in the database
    @posts = BlogPost.all
  end

  # ---3) defines a show method to display/get an instance 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) defines a new method which displays/gets a form
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) adds new content to database with strong params for extra layer of protection on user's inputs to only allow specfic model and columns into database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) displays/gets an instance to edit in a form
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) updates selected instance with strong params required
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) redirects user to page with assigned alias: blog_posts after deleting instance
      redirect_to blog_posts_path
    end
  end

  # ---9) keyword 'private' has strong params located beneath it. Everything under keyword is protected from being called outside the file
  def blog_post_params
    # ---10) the required params for blog_post permitted are title and content attributes 
    params.require(:blog_post).permit(:title, :content)
  end
end
