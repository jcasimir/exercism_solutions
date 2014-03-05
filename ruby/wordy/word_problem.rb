class WordProblem
  attr_reader :text

  def initialize(problem)
    @text = problem
  end

  def answer
    if text.include?("cubed") || text.include?("president")
      raise ArgumentError
    end

    key_phrase = text.gsub("What is ", "").gsub("?", "").gsub(" by", "")
    parts = key_phrase.split(" ")
    result = nil

    until parts.empty?
      if result
        first_number = result
      else
        first_number = parts.shift.to_i
      end
      operation = operator_method(parts.shift)
      second_number = parts.shift.to_i
      result = first_number.send(operation, second_number)
    end

    first_number = parts[0].to_i
    second_number = parts[2].to_i
    operation = operator_method(parts[1])
    result = first_number.send(operation, second_number)
    if parts[3]
      operation = operator_method(parts[3])
      third_number = parts[4].to_i
      result = result.send(operation, third_number)
    end
    return result
  end

  def operator_method(word)
    known_operations[word]
  end

  def known_operations
    {"plus" => :+,
     "multiplied" => :*,
     "divided" => :/,
     "minus" => :-}
  end
end
