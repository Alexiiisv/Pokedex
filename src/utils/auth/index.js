import axios from 'axios';
import {storeData} from '../../components/storage';

export const sendGetRequest = async (UserName, PassWord) => {
  if (UserName.length <= 2 || PassWord.length <= 7) {
    return false;
  }
  try {
    const res = await axios.post('https://login.hikkary.com/users/login', {
      username: UserName,
      password: PassWord,
    });
    await storeData(
      'Token',
      JSON.stringify(res.request.responseHeaders['x-access-token']),
    );
    return true;
  } catch (err) {
    // Handle Error Here
    console.error(err);
    return false;
  }
};

// export const checkIdentifiant = async (UserName, PassWord) => {
// if (UserName.length <= 2 && PassWord.length <= 7) {
//   return;
// }
//   await axios
//     .post('https://login.hikkary.com/users/login', {
//       username: UserName,
//       password: PassWord,
//     })
//     .then(async function (response) {
//       // console.log(
//       //   JSON.stringify(response.request.responseHeaders['x-access-token']),
//       // );
//       await storeData(
//         'Token',
//         JSON.stringify(response.request.responseHeaders['x-access-token']),
//       );
//       // return true;
//     })
//     .catch(function (error) {
//       console.log(error);
//       return false;
//     });
//   //   return true;
// };
