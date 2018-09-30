const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080',
      secute: false,
      pathRewrite: {'^/api' : ''}
      //loglevel : 'debug'
      //changeOrigin: true
    }
  ]
  
  module.exports = proxy;


  