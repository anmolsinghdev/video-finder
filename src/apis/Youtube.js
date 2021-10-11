import axios from 'axios';

const KEY = 'AIzaSyB-J_i3QBLdTkan-fMCC4TrKBcydEtNtpw';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',

  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
