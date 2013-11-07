require 'json'
require "sinatra/json"

get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  #Create and return a JSON object with the random cell and color given below.

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)

  json({:cell => cell, :color => color}, :encoder => :to_json, :content_type => :js)

end
