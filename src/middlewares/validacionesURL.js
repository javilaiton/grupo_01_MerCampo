function validacion(req, res, next) {
	if(! req.session.userlogged){
        res.redirect("/login")
    } 
    next();
}

module.exports=validacion



