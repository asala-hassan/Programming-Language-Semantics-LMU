-module (strangeserver).
-export([serve/0]). 


serve() ->

    receive 
      {multiply, A, B, Pid} -> 
      Pid ! A*B;
  
      {length, S, Pid} -> 
      Pid ! length(S);

      undefined ->
      io:format("I don't understand", [])
   after 3100 -> 
      io:format("I am bored", [])
 end,
serve().
%start() ->
    %Pid = spawn(fun() -> strangeserver() end),
    %Pid ! {multiply, 6, 10, Pid}.