class Year
  def self.leap?(input)
    year = LeapYear.new(input)
    year.valid? || (year.even? && !year.hundred?)
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

  def even?
    year.even?
  end

  def hundred?
    year % 100 == 0
  end

  def four_hundred?
    year % 400 == 0
  end
end
