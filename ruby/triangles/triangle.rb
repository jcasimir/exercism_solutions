class Triangle
  attr_reader :sides

  def initialize(a, b, c)
    @sides = [a, b, c]
    validate
  end

  def validate
    #validate_positive_lengths
    validate_inequality
  end

  def validate_inequality
    by_length = sides.sort
    unless (by_length[0] + by_length[1]) > by_length[2]
      raise TriangleError
    end
  end

  def validate_positive_lengths
    raise TriangleError if sides.any?{|side| side <= 0}
  end

  def kind
    send("kind_with_#{sides.uniq.count}_unique_sides")
  end

  def kind_with_1_unique_sides
    :equilateral
  end

  def kind_with_2_unique_sides
    :isosceles
  end

  def kind_with_3_unique_sides
    :scalene
  end  
end

class TriangleError < ArgumentError; end
