/*Sync*/
function addSync(x,y){
    console.log('[Provider] processing ', x , ' and ', y);
    var result = x + y;
    console.log('[Provider] returning result');
    return result;
}

function addSyncClient(x,y){
    console.log('[Consumer] triggering addSync');
    var result = addSync(x,y);
    console.log('[Consumer] result = ', result);
}

/*Async using Callbacks*/
function addAsync(x,y, onResult){
    console.log('[Provider] processing ', x , ' and ', y);
    setTimeout(function(){
        var result = x + y;
        console.log('[Provider] returning result');
        if (typeof onResult === 'function')
            onResult(result);
    },3000);
}

function addAsyncClient(x,y){
    console.log('[Consumer] triggering addAsync');
    addAsync(x,y, function(result){
        console.log('[Consumer] result = ', result);
    });
}

/*Async using Events*/
var adder = (function(){
    var _callbacks = [];
    function add(x,y){
        console.log('[Provider] processing ', x , ' and ', y);
        setTimeout(function(){
            var result = x + y;
            console.log('[Provider] returning result');
            _callbacks.forEach(function(callbackFn){
                callbackFn(result);
            });
        },3000);
    }
    function subscribe(subscriptionFn){
        _callbacks.push(subscriptionFn);
    }
    return {
        add : add,
        subscribe : subscribe
    };
})();

/* Async using Promises */
function addAsyncPromises(x,y){
    console.log('[Provider] processing ', x , ' and ', y);
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log('[Provider] returning result');
            if (x === 0 || y === 0 ){
                reject('Invalid arguments');
            } else {
                resolve(result);
            }
        },3000);
    });
    return promise;
}













