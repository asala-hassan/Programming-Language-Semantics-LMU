require 'net/http'
require 'json'

def change(amount)
    raise RangeError if amount < 0
    coins = []
    [25, 10, 5, 1].each do |coin|
        coins << amount / coin
        amount %= coin
    end
    coins
end


class String
  def stretched
    result = ''
    withoutSpaces = self.tr(" \t\r\n", '')
    i = 0
    while i < withoutSpaces.length do
         result += withoutSpaces[i] * (i + 1)
         i += 1
    end
    result
  end
end


def scramble(s)
  arr = s.split("").shuffle.join
end


def powers(base, limit)
    power = 1
    while power <= limit
        yield power
        power = power * base
    end
    power
end


def powers_generator(base, limit)
  f = Fiber.new do
    power = 1
    while power <= limit
      Fiber.yield power
      power = power * base
    end
  end
end


def say
  ->(word = nil) do
    words = []
    sayMore = ->(next_word = nil) do
      return words.join(' ') if next_word.nil?
      words << next_word
      return sayMore
    end
    return sayMore[word]
  end
end


class Array
  def interleave(*b)
    firstLength = self.length
    secondLength = b.length
    longest = [firstLength, secondLength].max
    result = []
    i = 0
    while i < longest
      result << self[i] if i < firstLength
      result << b[i] if i < secondLength
      i += 1
    end
    result
  end
end

# I worked with my colleague Mansi to write this code
def pokemon_sprites(name)
  url = "https://pokeapi.co/api/v2/pokemon/#{name}/"
  uri = URI(url)
  response = Net::HTTP.get(uri)
  if response == "Not Found"
    raise "API responded with 404"
  else 
    JSON.parse(response)['sprites']
  end
end


