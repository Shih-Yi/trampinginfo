require 'socket'

module RobotWorker
  class SlackBot
    include Sidekiq::Worker

    sidekiq_options queue: 'robot', retry: 3
    DEFAULT_CHANNEL = if Rails.env.production?
                        'tracksinfo-log-pro'
                      elsif Rails.env.staging?
                        'tracksinfo-log-test'
                      else
                        'tracksinfo-log-dev'
                      end.freeze

    def perform(msg, channel = nil, options={})
      slack_bot = Slack::Web::Client.new
      hostname = Socket.gethostname
      ip_address = Socket.ip_address_list.find do |addrinfo|
        addrinfo.ipv4? && !addrinfo.ipv4_loopback?
      end.ip_address
      slack_bot.chat_postMessage({
        channel: channel.presence || DEFAULT_CHANNEL,
        text: "[#{hostname}][#{ip_address}]#{msg}",
        as_user: true
      }.merge(options.symbolize_keys))
    end

    def self.chat(message, channel = nil, options={})
      if Rails.env.test?
        Rails.logger.debug("[RobotWorker::SlackBot][#{channel}]#{message}")
        return
      end
      RobotWorker::SlackBot.perform_async message, channel, options
    end
  end
end
