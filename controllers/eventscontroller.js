var db = require("../models");

module.exports = {
    create: function (req, res) {
        if (req.isAuthenticated()) {
            var id = req.session.passport.user
            // user maybe ebtire user obj in that case 
            // req.session.passport.user.id
            db.Events
                .create(req.body)
                .then(function (result) {
                    console.log(result)
                    db.Events
                        .update({ UserId: id }, { where: { id: result.dataValues.id } })
                        .then(function (updatedEvent) {
                            res.json(updatedEvent)
                        })
                })
                .catch(function (err) {
                    console.log(err)
                })
        } else {
            res.redirect("/");
        }

    },
    viewCurrentEvent: function (req, res) {
        console.log(req.body)
        db.Events
            .findAll({
                where: {
                    eventStatus: 1
                }
            })
            .then(function (result) {
                res.json(result)
            })
            .catch(function (err) {
                console.log(err)
            })
    },
    viewPastEvents: function (req, res) {
        db.Events
            .findAll({
                where: {
                    eventStatus: 0
                }
            })
            .then(function (result) {
                res.json(result)
            })
            .catch(function (req, res) {
                console.log(err)
            })
    },
    makeEventPast: function (req, res) {
        db.Events
            .update({
                eventStatus: 0
            }, {
                    where: {
                        id: req.body.id
                    }
                }
            )
    console.log("blahhhhhh" + req.body.id)
        .then(function (result) {
            res.json(result)
        })
        .catch(function (req, res) {
            console.log(err)
        })
},
    deleteEvent: function(req, res) {
        db.Events.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbEvents) {
            res.json(dbEvents);
        });
    }
}