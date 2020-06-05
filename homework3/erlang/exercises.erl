-module (main).
%-export([change/1]).
change(amount) ->

    quarters =(amount/25),
	amount = amount rem 25,
	  
    dimes = (amount/10), 
	amount = amount rem 10,
	  
	nickels = (amount/5),
	  
    pennies = amount rem 5, 
	
    [quarters, dimes, nickels, pennies].
		
	end.
	
    main(_) ->
		io:format ("~s~n", change(5))
	end.




    
 


