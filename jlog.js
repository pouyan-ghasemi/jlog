(function () {


    var root = this,
        previousJL = root.jl,
        jl = {};

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = jl;
        }
        exports.jl = jl;
    } else {
        // for the browser
        root.jl = jl;
    }

    jl.VERSION = '1.0.0';

    jl.noConflict = function () {
        root.jl = previousJL;
        return this;
    };

    // this is the master lock used at to disable all logs
    jl.nolog = false;

    // this is a simple locking between the applicaiton
    jl.masterLock = false;


    // TODO add arguments to the logging section this model mightb be more convinient
    // jl.log(a,b,c,'sdf') => console.log(a + ' ' + b + ' ' + c + ' ' + 'sdf');
    // by using arguments! 
    jl.log = function (data) {
        if (jl.nolog === false &&  jl.masterLock === false) {
            console.log(data);
            return data;
        }
    }
    
    // TODO add a timing log
    // jl.logt(a); => console.log( Date().Time() + ' ' + a );
    //
    
    jl.lock = function () {
        jl.masterLock = true;
    }


    jl.start = function () {
        if( jl.masterLock === false)
            jl.nolog = false;
    }

    jl.stop = function () {
        jl.nolog = true;
    }


}).call(this);
