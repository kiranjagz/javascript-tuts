var rp = require('request-promise');

async function getAll() {
    try {
        const data = await rp('https://swapi.dev/api/people/');
        return data;
    } catch (err) {
        return err;
    }
};

function getOne(id) {
    return rp('https://swapi.dev/api/people/' + id)
        .then(function(data) {
            return data;
        })
        .catch(function(err) {
            return err;
        });
}

module.exports = {
    callAll: getAll,
    callOne: getOne
}