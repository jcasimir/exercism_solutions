class Queens
  attr_reader :white, :black

  def initialize(white: [0, 3], black: [7, 3])
    @white = white
    @black = black
    validate!
    construct_board
  end

  def to_s
    @board.map { |row| row.join(' ') }.join("\n")
  end

  def attack?
    same_row? || same_column? || same_diagonal?
  end

  private

  def validate
    [same_space?, no_board?].any?
  end

  def no_board?
    !!@board
  end

  def same_space?
    @white == @black
  end

  def validate!
    raise ArgumentError unless validate
  end

  def construct_board
    @board = []
    8.times { @board << %w{O O O O O O O O} }
    @board[@white[0]][@white[1]] = 'W'
    @board[@black[0]][@black[1]] = 'B'
  end

  def same_row?
    @white[0] == @black[0]
  end

  def same_column?
    @white[1] == @black[1]
  end

  def same_diagonal?
    result = false
    directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]]
    directions.each do |direction|
      7.times do |i|
        i += 1
        if @white == [(@black[0] + (direction[0] * i)), (@black[1] + (direction[1] * i))]
          result = true
        end
      end
    end
    return result
  end
end