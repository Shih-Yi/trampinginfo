class HomeController < ApplicationController
  def index
    @tracks = Track.first(3).to_json
  end

  def search
  end

  def privacy
  end
end
