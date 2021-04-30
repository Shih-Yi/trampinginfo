class ReportsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_track, only: [:create]

  def create
    @report = @track.reports.build(report_params)
    @report.user = current_user
    @report.save!
    flash[:success] = "Create success"
    redirect_to track_path(@track)
  end

  private

  def set_track
    @track = Track.find(params[:track_id])
  end

  def report_params
    params.require(:report).permit(:report_type, :location, :avatar, :description)
  end
end
