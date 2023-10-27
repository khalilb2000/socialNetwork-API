const {THoughts, User} = require('../models');

const ThoughtController = {
    getAllThoughts(req, res){
        ThoughtController.find({})
        .populate({
            path: "reactions",
            select:"-__v"
        })
        .select("-__v")
        .sort({ _id: -1 })
        .then((dbThoughtData) = res.json(dbThoughtData))
        .catch((err)=> {
            console.log(err);
            res.sendStatus(400)
        });
      
    }
},

//getting thoughts by id

getThoughtById({ params }, res) {
    ThoughtController.findone({_id: params.id })
    .populate({
        path: "reactions",
        select: "-__v"
    })
    .select("-__v")
    .then((dbThoughtData) => {
        if(!dbThoughtData) {
            return res.status(404).json({message: "No thought with this id." });
        }
        res.json(dbThoughtData);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
},

//creating Though
//push created though id to appropriate array field
createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "Thought created but no user with this id!" });
        }

        res.json({ message: "Thought successfully created!" });
      })
      .catch((err) => res.json(err));
  },

  //update thought by id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({_id: params.id}, body, {
        new:true,
        runValidation: true,
    })
    .then((dbThoughtData) => {
        if (!dbThoughtData) {
            res.status(404).json({message: "No thought found with this id!"});
            return;
        }
        res.json(dbThoughtData);
    })
    .catch((err) => res.json(err));
},

//delete Thought
 