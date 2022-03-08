const usersModel = require("../../model/usersModel");

const userApiController = {
    listUsers: async (req, res) => {
        try {
            let allUser = await usersModel.getUsers()
            let protocolo = req.protocol
            let hostname = req.hostname
            let users = allUser.map((user) => {
                return usersProp = {
                    idusers: user.idusers,
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    image: protocolo + "://" + hostname  + "/img/users/" + user.image,
                    details: "api/users/${ id }",

                }


            })
            res.json([{
                count: allUser.length,
            },
                 users

            ])

        } catch (error) {
            res.render("error")
        }
    },
    getOneUser: async (req, res) => {
        try {
            let oneUser = await usersModel.oneUser(req.params.id)
            let protocolo = req.protocol
            let hostname = req.hostname
            users = {
                idusers: oneUser.idusers,
                name: oneUser.name,
                lastname: oneUser.lastname,
                email: oneUser.email,
                image: protocolo + "://" + hostname  + "/img/users/" + oneUser.image,

            }

            res.json(users)

        } catch (error) {
            res.render("error")
        }

    },
   
    getUserLast: async (req, res) => {
        try {
            let allUser = await usersModel.getUsers()
            let lastUser = allUser[allUser.length-1]
            let protocolo = req.protocol
            let hostname = req.hostname
            usersLast = {
                idusers: lastUser.idusers,
                name: lastUser.name,
                lastname: lastUser.lastname,
                email: lastUser.email,
                image: protocolo + "://" + hostname + "/img/users/" + lastUser.image,
            }
            res.json(usersLast)
        } catch (error) {
            res.render("error")
        }
               
    },
    
}

module.exports = userApiController