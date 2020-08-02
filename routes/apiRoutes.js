const Workout = require("../models/workout.js");

module.exports = function(app) {

    app.get("/api/workouts", ( {body, params}, res) => {
        Workout.find({})
            .then(data => {res.json(data);})
            .catch(err => {res.json(err);});
    });
   
    app.get("/api/workouts/range", ( {body, params}, res) => {
        Workout.find({})
            .then(data => {res.json(data);})
            .catch(err => {res.json(err);});
    });
    
    app.post("/api/workouts", (req, res) => {
        const workout = new Workout(req.body);
        Workout.create(workout)
            .then(data => {res.json(data);})
            .catch(err => {res.json(err);});
    })

    app.put("/api/workouts/:id", ({body, params}, res) => {
        Workout.findByIdAndUpdate( params.id,
            { $push: { exercises: body}}, 
            { new: true, runValidators: true }
        )
            .then(data => {res.json(data);})
            .catch(err => {res.json(err);});
    });
};
