function loggedMiddleware(req, res, next) {
	res.locals.logged=false
    if(req.session.userlogged){
        res.locals.logged=true
        res.locals.session=req.session.userlogged
    }
    next();

}

module.exports = loggedMiddleware;