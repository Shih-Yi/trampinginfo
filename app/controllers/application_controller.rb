class ApplicationController < ActionController::Base
  rescue_from StandardError, with: :send_errors_to_slack # if production?

  protected

  def send_errors_to_slack(error)
    send_exception_to_slack('tracksinfo-exception', error)

    # rails default handler
    raise
  end

  def send_exception_to_slack(channel, exception)
    message = error_message(exception)
    # send message to slack
    attachment = {
      title: exception.inspect,
      text: message + exception.backtrace.join("\n").tr('`', "\'"),
      color: 'danger'
    }
    RobotWorker::SlackBot.chat('', channel, attachments: [attachment])
  end

  def error_message(exception)
    error_message = "[Exception: #{exception.inspect}]\n" \
      "[request.uuid: #{request.uuid}]\n" \
      "[request.params: #{filter_params(request.params)}]\n"

    current_user && error_message += "[user: {id: #{current_user.id}, email: #{current_user.email}}]\n"
    error_message + "[ip: #{request.remote_ip}]\n"
  end

  def filter_params(request_params)
    # filter security params
    filter = ActiveSupport::ParameterFilter.new(Rails.application.config.filter_parameters)
    filter.filter(request_params)
  end
end
