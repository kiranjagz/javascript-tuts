var requestHelper = require('./request.promise');;

requestHelper.callAll().then((data) => {
    console.log(data);
});

requestHelper.callOne(34).then((data) => {
    console.log(data);
});