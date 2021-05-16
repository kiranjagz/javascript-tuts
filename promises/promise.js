let myPromise = new Promise(function geValue(myResolve, myReject) {
    setTimeout(function() {
        myResolve("Yow Dawg");
    }, 1000);
});

myPromise.then(function(value) {
    console.log(value);
});