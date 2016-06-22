class Report < ActiveRecord::Base
  belongs_to :users
  has_many :comments
end
