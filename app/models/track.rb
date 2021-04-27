class Track < ApplicationRecord
  has_many :reports

  accepts_nested_attributes_for :reports
end
