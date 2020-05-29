

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
    result = ''
    def stretched (s)
    withoutSpaces = s.tr(" \t\r\n", '')
    i=0
        while i < withoutSpaces[i].length do 
         result = withoutSpaces[i].times(i + 1)
            i += 1
   end
end 
    result
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


 def say(word)
  word = []
 l = -> (word) {if word == undefined;('');end}
 l2 = -> (nextWord) {if nextWord == undefined; word.join('');end }
    end 
     l.call(word+ '' +nextWord)
end
   


def interleave(a,*b) 
     firstLength = a.length
     secondLength = b.length
     max = (firstLength, secondLength).max
    result = []
    i=0
    while i < max do
      if (i < firstLength) 
        result.push(a[i])
      if (i < secondLength) 
        result.push(b[i])
        i++
    end 
   result
end



require 'net/http'
    require 'json'

def pokemon_sprites(name) 
   
 url = 'https://pokeapi.co/api/v2/pokemon/${encodeURI(name)}/'
 uri = URI(url)
 response = Net::HTTP.get(uri)
 JSON.parse(response)
 response.body
end