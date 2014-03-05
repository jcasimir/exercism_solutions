class Bob
  attr_reader :responder

  def initialize(grumpiness = NormalBobDay)
    @responder = grumpiness
  end

  def hey(words)
    responder.new(words).respond
  end
end

class NormalBobDay
  attr_reader :words

  def initialize(words)
    @words = words
  end

  def respond
    shouting || question || default
  end

  def shouting
    "Woah, chill out!" if shouting?
  end

  def shouting?
    words.upcase == words
  end

  def question
    "Sure." if question?
  end

  def question?
    words.end_with?("?")
  end

  def default
    "Whatever."
  end
end
