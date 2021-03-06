

test( "Version", function() {
    equal( jl.VERSION , '1.0.0' , 'This is the correct version');
});

test("MasterLock",  function(){
    equal( jl.masterLock , false, 'The value of the master lock is false');
});

test("LockEnabled" , function(){

    jl.masterLock = true;
    equal( jl.log("the result of the application"), undefined , "no data is returned");
    
    jl.masterLock = false;
    equal( jl.log("Logging"), "Logging" , "Logging is returned");
});


test("stop Start" , function(){

    equal( jl.log("Logging"), "Logging" , "Logging is returned");
    jl.stop(); 
    equal( jl.log("Logging"), undefined , "no data is returned");
    
    jl.start();
    equal( jl.log("Logging"), "Logging", "Undefined is returned");    
});

test("masterLock Enbl" , function(){

    equal( jl.log("Logging"), "Logging" , "Logging is returned");
    jl.stop(); 
    equal( jl.log("Logging"), undefined , "Undefined is returned");
    
    jl.start();
    jl.lock();
    jl.start();
    equal( jl.log("Logging"), undefined, "Undefined is returned- Master Lock");    
});
