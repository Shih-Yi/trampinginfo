class TracksController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_track, only: [:show]

  REPORT_TYPE = [
    %w[Secret\ Place],
    %w[Best-loved],
    %w[Must\ Go],
    %w[Weather],
    %w[Accident],
    %w[Road\ Blocked],
    %w[Others]
  ].freeze

  def show
    @se = Settings.open_weather.appid
    @report = Report.new
    @report_types = REPORT_TYPE
    @reports = @track.reports.includes(:user).to_json({ include: { user: { only: [:avatar], methods: :user_name } } })
  end

  private

  def set_track
    @track = Track.find(params[:id])
  end
end
