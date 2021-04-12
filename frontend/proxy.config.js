const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8080/photo-service',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
