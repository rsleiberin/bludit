class ApplicationController < ActionController::API
    include ActionController::Cookies

    def hello_world
        puts "first: ", session[:count]
        session[:count] = (session[:count] || 0) + 1
        puts "second:  ", session[:count]
        render json: {count: session[:count]}
    end
end
