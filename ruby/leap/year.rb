class Year
  def self.leap?(input)
    year = LeapYear.new(input)
    year.valid? || (input.even? && !(input % 100 == 0))
  end
end

class LeapYear
  attr_reader :year

  def initialize(year)
    @year = year
  end

  def valid?
    four_hundred?
  end

  def four_hundred?
    year % 400 == 0
  end
end
