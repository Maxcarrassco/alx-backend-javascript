import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise = Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return promise.then((res) => ({ status: res.status, value: res }))
    .catch((err) => ({ status: err.status, value: err }));
}
