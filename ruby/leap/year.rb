class Year
  def self.leap?(input)
    (input % 400 == 0) || (input.even? && !(input % 100 == 0))
  end
end
