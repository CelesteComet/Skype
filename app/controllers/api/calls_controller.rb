class Api::CallsController < ApplicationController
  def send_ring
    WebNotificationsJob.perform([2], 'receiveCall', {
      data: call_params
    })
  end

  def call_params
    params.require(:token)
  end
end
