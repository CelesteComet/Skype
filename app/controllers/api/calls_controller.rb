class Api::CallsController < ApplicationController
  def send_ring
    WebNotificationsJob.perform([params[:userId]], 'receiveCall', {
      data: [params[:token]]
    })
  end

  def send_message
    print params
    WebNotificationsJob.perform(params[:userIds], 'sendMessage', {
      data: params[:payload]
    })
  end

end
