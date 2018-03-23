import axios from 'axios';

console.log(BASE_URL);
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.get(BASE_URL+'/v2/book/1220562')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
// axios.get(BASE_URL, function(data) {
//   console.log(data);
// });
