class Garden
  CHILDREN = %w{alice bob charlie david eve fred ginny harriet ileana joseph kincaid larry}
  CHAR_TO_PLANT_NAME = {
    'V' => :violets,
    'G' => :grass,
    'C' => :clover,
    'R' => :radishes
  }


  def initialize(diagram, students=nil)
    @diagram = diagram
    @students = students ? students.sort.map(&:downcase) : CHILDREN
    @plant_assignment = Hash.new { |h, k| h[k] = String.new }

    define_accessors
    assign_plants
  end

  private

  def define_accessors
    @students.each do |student|
      instance_eval <<-RUBY
        def #{student}
          result = @plant_assignment['#{student}'].scan(/./)
          result.map { |char| char_to_plant_name(char) }
        end
      RUBY
    end
  end

  def assign_plants
    @diagram.each_line do |line|
      @students.each do |student|
        @plant_assignment[student] += line.slice!(0...2)
      end
    end
  end

  def char_to_plant_name(char)
    CHAR_TO_PLANT_NAME[char]
  end
end