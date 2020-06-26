//#[cfg(test)]
//mod tests {
    //#[test]
    //fn it_works() {
        //assert_eq!(2 + 2, 4);
    //}
//}


// If you do a little research on how to use crates, there is a a nice one
// called num_integer, which has a cool div_rem function in it, that makes
// the change function awesome. If you use it, your first line in the file
// will be:
//
// use num_integer::div_rem;

pub fn change(amount: i64) -> Result<[i64;4], &'static str> {
    let quarters = amount / 25;
    let after_quarters = amount % 25;
    let dimes = after_quarters / 10;
    let after_dimes = after_quarters % 10;
    let nickels = after_dimes / 5;
    let pennies = after_dimes % 5;
    let result= [quarters, dimes, nickels, pennies];
      
      if amount < 0 {
         return Err("amount cannot be negative");
      }
      
     return Ok(result);
}

pub fn powers(base: u64, limit: u64) -> Vec<u64> {
let mut result = Vec::new();
let mut power=1;
while power <= limit{
    result.push(power);
    power *= base;
  }
  result
}


// Implement your cylinder type here (struct and impl)
const PI: f64 = 3.14159265358979323846264338327950288f64;
pub struct Cylinder {
    radius: f64,
    height: f64,
    
}

 impl Cylinder {
      
    pub fn surface_area(&self) -> f64 {

        (2.0 * PI * self.radius) * (self.radius + self.height)
    }

    pub fn volume(&self) -> f64 {
        
        (PI * self.radius * self.radius) * self.height 
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn change_works_for_negative() {
        assert_eq!(change(-2), Err("amount cannot be negative"));
        assert_eq!(change(-200000), Err("amount cannot be negative"));
    }

    #[test]
    fn change_works_for_zero() {
        assert_eq!(change(0), Ok([0, 0, 0, 0]));
    }

    #[test]
    fn change_works_for_positive_amounts() {
         assert_eq!(change(5), Ok([0, 0, 1, 0]));
         assert_eq!(change(25), Ok([1, 0, 0, 0]));
         assert_eq!(change(97), Ok([3, 2, 0, 2]));
         assert_eq!(change(1000000000), Ok([40000000, 0, 0, 0]));
    }

    #[test]
    fn powers_works() {
        assert_eq!(powers(2, 0), []);
        assert_eq!(powers(3, 1), [1]);
        assert_eq!(powers(2, 63), [1, 2, 4, 8, 16, 32]);
        assert_eq!(powers(2, 64), [1, 2, 4, 8, 16, 32, 64]);
    }

    #[test]
    fn cylinder_is_implemented_okay() {
        let c = Cylinder { radius: 3.0, height: 5.0 };
        assert_eq!(format!("{:.5}", c.surface_area()), "150.79645");
        assert_eq!(format!("{:.5}", c.volume()), "141.37167");
    }
}
