var express = require("express")
var router = express.Router();

//------------------- Task Routes --------------------------//
var taskControllers = require("../controllers/taskcontroller");

router.post("/api/tasks/create", function(req, res) {
    taskControllers.create(req, res);
})

router.get("/api/tasks/completed", function(req, res) {
    taskControllers.viewComplete(req, res);
})

router.get("/api/tasks/open", function(req, res) {
    taskControllers.viewOpen(req, res);
})

router.get("/api/tasks/delete/:id", function(req, res) {
    taskControllers.deleteTask(req, res);
})

//------------------- Event Routes --------------------------//
var eventControllers = require("../controllers/eventscontroller");

router.post("/api/event/new", function(req, res) {
    eventControllers.create(req, res);
})

router.get("/api/dashboard", function(req, res) {
    eventControllers.viewCurrentEvent(req, res);
})

router.get("/api/event/past", function(req, res) {
    eventControllers.viewPastEvents(req, res);
})

router.get("/api/events/delete/:id", function(req, res) {
    taskControllers.deleteEvent(req, res);
})

module.exports = router