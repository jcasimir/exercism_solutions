class Meetup
  attr_reader :month, :year

  def initialize(month, year)
    @month = month
    @year = year
  end

  def self.days
    [:sunday, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday]
  end

  def self.occurances
    [:first, :second, :third, :fourth]
  end

  def self.teenths
    [:sunteenth, :monteenth, :tuesteenth, :wednesteenth, :thursteenth, :friteenth, :saturteenth]
  end

  DAYS_PER_WEEK = 7
  TEENS_START = 13

  teenths.each_with_index do |teenth, index|
    define_method(teenth) do
      find_weekday(index, TEENS_START)
    end
  end

  days.each_with_index do |day, day_index|
    occurances.each_with_index do |occurance, offset_index|
      method_name = [occurance, day].join("_")
      define_method(method_name) do
        start_date = offset_index * DAYS_PER_WEEK + 1
        find_weekday(day_index, start_date)
      end
    end

    define_method( "last_#{day}" ) do
      begin
        result = find_weekday(day_index, 4 * DAYS_PER_WEEK + 1)
      rescue ArgumentError
        result = send "fourth_#{day}"
      end

      if result.month != month
        result = send "fourth_#{day}"
      end

      return result
    end
  end

  def find_weekday(weekday_code, starting_from)
    date = Date.parse([starting_from, month, year].join("-"))
    until date.wday == weekday_code
      date = date + 1
    end
    return date
  end
end