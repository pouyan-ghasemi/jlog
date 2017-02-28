JLog
============

JLog is a very minimal logging utility for easy debugging in tiny JavaScript Applications.

This library almost offers no extra value but after reading "Coders at Work" I found out that even most great programmers
rely on "Console.log" in the initial state of their development. So why not remove some hassles out of (If( DEBUGG === true))!


JLog syntax is simple! 

jl.lock() : Enables your master lock so just use that at the beginning once you are done with logging! 

jl.stop() : Use that if you want to block any loggings before that point in the code. 

jl.start() : Start logging from that point on in your code! 

jl.log(data): this is just a smaller place holder for "console.log()"! 


I am thinking of adding more feature! 

