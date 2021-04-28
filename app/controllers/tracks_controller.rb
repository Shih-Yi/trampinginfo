class TracksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_track, only: [:show]

  def show
    @report = Report.new
    @reports = @track.reports.to_json
  end

  private

  def set_track
    @track = Track.find(params[:id])
  end
end
