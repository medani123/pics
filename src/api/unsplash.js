import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 0b3eccecfc6a7af1541947c3956986f360d8905f828ab29da04a5cfa41927a11'
  }
});
