require 'slack-ruby-client'

Slack.configure do |config|
  config.token = Settings.slack_app.client_secret
end
