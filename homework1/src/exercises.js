import crypto from 'crypto';
import fetch from 'node-fetch';



export function change(amount) {
  if (amount < 0) {
    throw new RangeError('Non-negative amounts required');
  }
  let counts = [];
  [25, 10, 5, 1].forEach(coin => {
    counts.push(Math.floor(amount / coin));
    amount %= coin;
  });
  return counts;
}



export function stretched(s) {
  let result = '';
  let withoutSpaces = s.replace(/\s+/g, '');
  for (let i = 0; i < withoutSpaces.length; i++) {
    result += withoutSpaces[i].repeat(i + 1);
  }
  return result;
}



export function scramble(s) {
  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  let arr = s.split(''); // Convert String to array
  let n = arr.length; // Length of the array
  for (let i = 0; i < n - 1; ++i) {
    let j = getRandomInt(n); // Get random of [0, n-1]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  s = arr.join(''); // Convert Array to string
  return s; // Return shuffled string
}



export function powers(base, limit, callback) {
  for (let power = 1; power <= limit; power *= base) {
    callback(power);
  }
}



export function* powersGenerator(base, limit) {
  let power = 1;
  while (power <= limit) {
    yield power;
    power *= base;
  }
}



export function say(word) {
    if (word === undefined) {
      return '';
    }
    return nextWord => {
      if (nextWord === undefined) {
        return word;
      }
      return say(word + ' ' + nextWord);
    };
  }



 export function interleave(a, ...b){ // idea came from https://stackoverflow.com/questions/13253856/merge-two-arrays-so-that-the-values-alternate
    let result = [];
    let i = 0;
    let j = 0;
    for(i = 0;i < a.length && i< b.length;i++){
        result[j++] = a[i];
        result[j++] = b[i];
    }
    if(a.length == i){
        while(i < b.length){
            result[j++] = b[i];
            i++;
        }
    }
    else{
        while(i < a.length){
            result[j++] = a[i];
            i++;
        }
    }
    return result;
}



export function makeCryptoFunctions(cryptoKey, cryptoAlgorithm, iv) {
  function encrypt(s) {
    const cipher = crypto.createCipheriv(cryptoAlgorithm, cryptoKey, iv);
    let encrypted = cipher.update(s, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  function decrypt(s) {
    const decipher = crypto.createDecipheriv(cryptoAlgorithm, cryptoKey, iv);
    let decrypted = decipher.update(s, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
  }
  return [encrypt, decrypt];
}



export function pokemonSprites(name) {
  let promise = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return promise
    .then(r => r.json())
    .then(p => p.sprites);
}