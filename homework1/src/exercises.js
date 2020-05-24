export function change(amount) {
    if(amount < 0){
        throw new RangeError ('Non-negative amounts required')

    }
 let counts = [];
 [25, 10, 5, 1].forEach(coin => {
    counts.push( Math.floor(amount / coin));
    amount %= coin;
 });
 return counts;
}

////////////////////////////////////////////////////

export function stretched(s){
    let string= "";
    let newString = s.replace(/\s+/g, '');
    console.log(newString)
    //var array = Rs.split('');  
             // Convert String to array
             //let indx = Rs.indexOf();
             //let ch = Rs.charAt();

    for ( let i=0; i<newString.length; i++) { 
       let indx = newString[i]
       
        let ch = indx.charAt(0);
       
        let count = 1;
        ch.repeat(count);
        string += ch.repeat(i+1)
    } 


    return (string);
}

/////////////////////////////////////////////
export function powers (base,limit) {
    let result=[];

    function innerPowers(){
        for(let p= 1; p<=limit;p++){
    p *= base;
    console.log(result[p]);
        }
            
        }
        return innerPowers;
        }

    //let result = p;
    //let myPowers= powers();
    //myPowers();


    ///////////////////////////////////



    function getRandomInt(n) {
        return Math.floor(Math.random() * n);
      }
      export function scramble(s){
        var arr = s.split('');           // Convert String to array
        var n = arr.length;              // Length of the array
        
        for(var i=0 ; i<n-1 ; ++i) {
          var j = getRandomInt(n);       // Get random of [0, n-1]
          
          var temp = arr[i];             // Swap arr[i] and arr[j]
          arr[i] = arr[j];
          arr[j] = temp;
        }
        
        s = arr.join('');                // Convert Array to string
        return s;                        // Return shuffled string
      }
      
//////////////////////////////////////////////////////////
      export function* powersGenerator(base, limit) {
        let value = 1;
        while (value <= limit) {
          yield value;
          value *= base;
        }
      }

///////////////////////////////////////////////////////////
export class say {
    constructor() {
       this.say1 = '';
       this.say2 = '';
       this.say3 = '';
       this.say4 = '';
       this.say5 = '';
    }
    setSay1(s1) {
       this.say1 = s1;
    }
    setSay2(s2) {
        this.say2 = s2;
    }
    setSay3(s3) {
       this.say3 = s3;
    }
    setSay4(s4) {
       this.say4 = s4;
    }

    setSay5(s5) {
        this.say4 = s5;
     }
    displayWholeSay() {
       console.log(`${this.say1} \
       ${this.say2}\ ${this.say3}\ ${this.say4}\${this.say5}`)
    }
 }
            
//////////////////////////////////////////////////////////////

            export function interleave(a, n) {
                let i, d = (a.length + 1) / n, r = [a[0]];
              
                for (i = 1; i < a.length; i++) {
                  r.push(a[Math.floor(i * d) % a.length]);
                }
              
                return r;
              }


/////////////////////////////////////////////////////////////

export function makeCryptoFunctions(cryptoKey,cryptoAlgorithm,iv) {
    const crypto = require('crypto');
     cryptoAlgorithm = 'aes-256-cbc';
     cryptoKey = crypto.randomBytes(32);
     iv = crypto.randomBytes(16); 

    function encrypt() {
        const cipher = crypto.createCipheriv(cryptoAlgorithm,cryptoKey,iv);
        let encrypted = cipher.update('', cryptoKey, "hex");
        encrypted += cipher.final("hex");
        return encrypted;
    }


    

    // Node.js program to demonstrate the      
 //crypto.createDecipheriv() 
  
// Includes crypto module 

 function decrypt(){
//const cryptoKey = require('crypto'); 
  
// Defining algorithm 
//const cryptoAlgorithm = 'aes-192-cbc'; 
  
// Defining password 
const password = 'bncaskdbvasbvlaslslasfhj'; 
  
// Defining key 
//const key = crypto.scryptSync(password, 'GfG', 24); 
  
// Defininf iv 
//const iv = Buffer.alloc(16, 0);  
  
// Creating decipher 
const decipher = crypto.createDecipheriv(cryptoAlgorithm,password); 
  
// Declaring decrypted 
//let decrypted = ''; 
  
 //Reading data 
decipher.on('readable', () => { 
  let chunk; 
  while (null !== (chunk = decipher.read())) { 
    decrypted += chunk.toString('utf8'); 
  } 
}); 
  
// Handling end event 
//decipher.on('end', () => { 
//console.log(decrypted); 
return decrypted;
//}); 
//}
// Encrypted data which is to be decrypted 
//const encrypted = 
  //'MfHwhG/WPv+TIbG/qM78qA=='; 
  
//decipher.write(encrypted, 'base64'); 
//decipher.end(); 

//console.log("done"); 
}

return [encrypt()|decrypt()];

}


//////////////////////////////////////////////////////