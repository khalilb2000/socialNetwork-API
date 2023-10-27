const { User, Data } = require('../models')

const userController = {
    //get all uses 
    getAllUser(req, res) {
        userController.find({})
        .populate({
            path: "friends",
            select: "-__v",
        })
        .select("-__v")
        .sort({ _id: -1 })
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        })
    }  
}