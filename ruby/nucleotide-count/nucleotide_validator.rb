module NucleotideValidator
  def self.dna?(input)
    letters = input.split('')
    letters.all?{|letter| dna_nucleotides.include?(letter) }
  end

  def self.dna_or_rna?(input)
    letters = input.split('')
    letters.all?{|letter| all_nucleotides.include?(letter) }
  end

  def self.dna_nucleotides
    ['A', 'T', 'C', 'G']
  end

  def self.all_nucleotides
    dna_nucleotides + ['U']
  end
end
