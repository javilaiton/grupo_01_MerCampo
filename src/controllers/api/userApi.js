const usersModel = require("../../model/usersModel");

const userApiController = {
    listUsers: async (req, res) => {
        try {
            let allUser = await usersModel.getUsers()
            let users = allUser.map((user) => {
                return usersProp = {
                    idusers: user.idusers,
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    image: "",
                    details:""
                    
                }
                  
                
            })
            res.json({
                count: allUser.length,
                users:users,
                
            })

        }  catch (error) {
            res.render("error")
        }   
    },
    getOneUser:async (req,res) =>{
        try {
            let oneUser = await usersModel.oneUser(req.params.id)
            users = {
                    idusers: oneUser.idusers,
                    name: oneUser.name,
                    lastname: oneUser.lastname,
                    email: oneUser.email,
                    image: "",
                    details:""
                    
                }
            
            res.json(users)

        }  catch (error) {
            res.render("error")
        }  

    }
}

module.exports = userApiController