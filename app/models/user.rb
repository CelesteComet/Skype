class User < ApplicationRecord
  validates :username, :password_digest, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token

  # MODEL ASSOCIATIONS
  has_many :room_memberships
  has_many :friendships
  has_many :rooms, through: :room_memberships

  has_many :messages

  has_many :friends, 
  through: :friendships,
  source: :friend

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password 
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    return self.session_token
  end

  def self.find_by_credentials(username, password) 
    @user = User.find_by(username: username)

    if @user && @user.is_password?(password) 
      @user
    else 
      nil
    end
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token = self.session_token || User.generate_session_token
  end

end
