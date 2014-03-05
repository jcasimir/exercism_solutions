class Phrase
  attr_reader :word_count

  def initialize(input)
    @word_count = count_words_in(input)
  end

  def count_words_in(input)
    words_from(input).each_with_object(Hash.new(0)) do |word, collection|
      collection[word] += 1
    end
  end

  def words_from(input)
    input.downcase.scan(/\w+/)
  end
end
