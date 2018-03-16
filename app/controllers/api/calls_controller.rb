class Api::CallsController < ApplicationController
  def send_ring
    WebNotificationsJob.perform([params[:userId]], 'receiveCall', {
      data: [params[:token]]
    })
  end

end
