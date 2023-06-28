// return multiple promises
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

const handleProfileSignup = (firstName, lastName, fileName) => {
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(value => value.map(result => ( { status: result.status, 
                                            value: result.value })))
};

export default handleProfileSignup;
