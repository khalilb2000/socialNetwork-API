const router = require("express").Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,

} = require("../../controllers/thought-controller");

//api-thoughts
router.route("./:id")
.get(getThoughtById)
.put(updateThought)
delete(deleteThought);

//api/thought/thoughtId reactions
router.route("/:thoughtId/reactions").post(addReaction);

// api/thoughts/:thoughtsId/reactions
router.route("/:thoughtId/reactions/:reactionsId").delete(removeReaction);

module.exports = router;
