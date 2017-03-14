class Shorten < ApplicationRecord
  validates :url, presence: true

  def short_id
    id.to_s(36)
  end

  def self.find_by_short_id(id)
    int_id = id.to_i(36)
    self.find(int_id)
  end
end
