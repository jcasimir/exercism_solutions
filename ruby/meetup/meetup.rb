class Meetup
  attr_reader :month, :year
  def initialize(month, year)
    @month = month
    @year = year
  end

  positions = [:first, :second, :third, :fourth, :last]

  DayOfWeek = Struct.new(:name, :abbr, :number)

  days_of_week = [
    DayOfWeek.new(:monday, :mon, 1),
    DayOfWeek.new(:tuesday, :tues, 2),
    DayOfWeek.new(:wednesday, :wednes, 3),
    DayOfWeek.new(:thursday, :thurs, 4),
    DayOfWeek.new(:friday, :fri, 5),
    DayOfWeek.new(:saturday, :satur, 6),
    DayOfWeek.new(:sunday, :sun, 7)
  ]

  days_of_week.each do |day_of_week|
    define_method "#{day_of_week.abbr}teenth" do
      teen_day(day_of_week.number)
    end
    positions.each do |position|
      define_method "#{position}_#{day_of_week.name}" do
        send "#{position}_of_month", day_of_week.number
      end
    end
  end

  private

  def teen_day(cwday)
    first_in_range(13..19, cwday)
  end

  def first_of_month(cwday)
    first_in_range(1..7, cwday)
  end

  def second_of_month(cwday)
    first_in_range(8..14, cwday)
  end

  def third_of_month(cwday)
    first_in_range(15..21, cwday)
  end

  def fourth_of_month(cwday)
    first_in_range(22..28, cwday)
  end

  def last_of_month(cwday)
    range = (days_in_month - 6)..days_in_month
    first_in_range(range, cwday)
  end

  def days_in_month
    Date.new(year, month, -1).day
  end

  def first_in_range(range, cwday)
    range(range).find { |day| day.cwday == cwday }
  end

  def range(range)
    range.to_a.map { |day|
      Date.new(year, month, day)
    }
  end
end