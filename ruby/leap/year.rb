class Year
  def self.leap?(input)
    input.even? && !(input % 100 == 0)
  end
end
