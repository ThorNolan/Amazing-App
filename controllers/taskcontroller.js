var db = require("../models");

module.exports = {

    create: function(req, res){
        if (req.isAuthenticated()){
            var id = req.session.passport.user;

            var newTask = {
                taskName: req.body.taskName,
                taskType: req.body.taskType,
                importance: req.body.importance,
                taskStatus: req.body.taskStatus,
                UserId: id
            }
            console.log("Denis is the best TA", newTask)
        db.Tasks
        .create(newTask)
        .then(function(result){
            res.json(result)
        })
        .catch(function(err) {
            console.log(err)
        })
        } else {
            res.redirect("/");
        }

    create: function (req, res) {
        console.log("Denis is the best TA", req.body)
        db.Tasks
            .create(req.body)
            .then(function (result) {
                res.json(result)
            })
            .catch(function (err) {
                console.log(err)
            })

    },
    viewAll: function (req, res) {
        db.Tasks

        .findAll()
        .then(function(result){
            // console.log(taskobj.tasks)
            // console.log("*********")
            
            // console.log(taskobj.tasks[0].taskName)
            // console.log(taskobj.tasks[0].importance)
            console.log(result);
            res.json(result);
            // res.json(result)
        })
        .catch(function(err) {
            console.log(err)
        })
            .findAll()
            .then(function (result) {
                var taskobj = {
                    tasks: result
                }
                console.log("Task Obj", taskobj);
                console.log(taskobj.tasks)
                console.log("*********")

                console.log(taskobj.tasks[0].taskName)
                console.log(taskobj.tasks[0].importance)
                return res.render("dashboard", taskobj);
                // res.json(result)
            })
            .catch(function (err) {
                console.log(err)
            })
    },
    deleteTask: function (req, res) {
        db.Task
            .destroy({
                where: {
                    id: req.params.id
                }
            }).then(function (dbTask) {
                res.json(dbTask);
            });
    },

    // Mel stub don't delete without permission//

    modifyTask: function (req, res) {
        db.Task
            .update({
                taskStatus: false
            },
                {
                    where: {
                        id: req.params.id
                    }
                }).then(function (dbTask) {
                    res.json(dbTask);
                });
    },

    // Mel stub don't delete without permission//

}


