const Cookies = require('universal-cookie');

function auth(request, response, next) {
  const cookies = new Cookies(request.headers.cookie);
  const token = cookies.get('access_token');
  
  if (token) {
    console.log(token);
    next();
  } else {
    response.status(401).send('Unauthorized');
  }
}

module.exports = { auth };