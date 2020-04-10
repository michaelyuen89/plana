class User < ApplicationRecord
     #FIGVAAPER
    validates :email, :session_token, presence: true, uniqueness: true
    validates :name, :password_digest, presence: true
    validates :password, length: {minimum: 8}, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        return user
    end

    def is_password?(password)
        bcrypt_pass = BCrypt::Password.new(self.password_digest)
        bcrypt_pass.is_password?(password)
    end

    def self.generate_session_token
       SecureRandom::urlsafe_base64 
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end


end
