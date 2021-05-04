class TracksController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_track, only: [:show]

  def show
    @se = Settings.open_weather.appid
    @report = Report.new
    @reports = @track.reports.includes(:user).to_json({ include: { user: { only: [], methods: :user_name } } })
  end

  private

  def set_track
    @track = Track.find(params[:id])
  end
end
