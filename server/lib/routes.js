const apiRouteHelper = require( '../controllers').apiRouteHelper;
module.exports = function (app) {
  var APISitepath='/api/v0';

  app.get(APISitepath, (req, res) => res.status(200).send({
    message: 'Welcome to the yourSite API!',
  }));

  app.get(APISitepath+'/login',apiRouteHelper.login);

  
  app.use('*',function(req,res){
    res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
};
