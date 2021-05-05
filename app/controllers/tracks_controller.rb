class TracksController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_track, only: [:show]
  Secret Place
  REPORT_TYPE = [
    %w[Secret\ Place Secret\ Place],
    %w[Best-loved Best-loved],
    %w[Must\ Go Must\ Go],
    %w[Accident Accident],
    %w[Weather Weather],
    %w[Road\ Blocked Road\ Blocked],
    %w[Others Others]
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
