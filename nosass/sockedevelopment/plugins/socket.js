import config from '../constants/config';

import io from 'socket.io-client';
let url = config.SOCKETURL;
console.log("socketURL  ",url);
const socket = io(url);;
export default socket;

