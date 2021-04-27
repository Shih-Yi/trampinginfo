class TracksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_track, only: [:show]

  def show
    @report = Report.new
  end

  private

  def set_track
    @track = Track.find(params[:id])
  end
end
