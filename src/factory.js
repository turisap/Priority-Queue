const uuidv4 = require('uuid/v4');

const counry_codes = ['ru', 'us', 'au', 'nz', 'uk'];

const getUsers = length => {
    /* eslint-disable no-undef */
    return new Array(length).fill(0).map(() => {
        return {
            id : uuidv4(),
            salary : Math.floor(Math.random() * 100 + 1),
            country_code : counry_codes[Math.floor(Math.random() * counry_codes.length)],
        };
    });
    /* eslint-enable no-undef */
};

export default getUsers;



