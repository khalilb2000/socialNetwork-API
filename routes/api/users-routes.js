const router = require("express").Router();
const{
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../controllers/users-constroller");

//api users
router.route("/").get(getAllUser).post(createUser);

//api/users/users/:Id
router.route("./:id").get(getUsersById).put(updateUser).delete(deleteUser);

//friend id api
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;