module.exports={
  login(req,res){
    res.status(200).send({
      message: 'Welcome to the yourSite login API!',
    });
  }
}
