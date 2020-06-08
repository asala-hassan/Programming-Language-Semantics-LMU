
-module (exercises).
-export([change/1]).
-export([sumOfCubesOfOdds/1]).
-export([powers/3]).

change(Amount) ->
    if Amount < 0 ->
       {false, "amount cannot be negative"};
    true ->
       Quarters = Amount div 25,
       AfterQuarters = Amount rem 25,
       Dimes = AfterQuarters div 10,
       AfterDimes = AfterQuarters rem 10,
       Nickels = AfterDimes div 5,
       Pennies = AfterDimes rem 5,
       {true, [Quarters, Dimes, Nickels, Pennies]}
    end.
  
sumOfCubesOfOdds(List)-> 
  lists:sum([X*X*X || X <- List, X rem 2 =/= 0]).
 
% My colleague Mansi helped me in writing this function(powers).
powers(Base, Limit, Pid)->
  nextPower(Base, Limit, Pid, 1).

nextPower(Base, Limit, Pid, Power) when Power =< Limit ->
  Pid ! Power,
  nextPower(Base, Limit, Pid, Power * Base);
nextPower(_, _,  _, _) ->
  ok.



