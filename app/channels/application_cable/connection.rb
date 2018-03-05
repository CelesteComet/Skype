require 'byebug'

module ApplicationCable
  class Connection < ActionCable::Connection::Base

    identified_by :current_user

    def connect 
      self.current_user = find_verified_user
    end

    def session
      cookies.encrypted[Rails.application.config.session_options[:key]]
    end

    protected

    def find_verified_user
      User.find_by(session_token: session["session_token"])
    end

  end
end
