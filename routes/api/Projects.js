const express = require('express');
const router = express.Router();
const fs = require('fs')

const Project = require('../../models/Projects');

var imgPath = (__dirname, '../../Screenshot (85).png')

router.get('/', (req, res) => {
    Project.find({}, function(err, projects) {
        console.log(err);
        console.log(projects);
        res.json(projects);
    });
});

router.get('/:name', (req, res) => {
    Project.findOne({"name": req.params.name}).then(project => {
        res.status(200).send(project);
    }).catch(err => {
        throw err;
    })
});

router.post('/', (req, res) => {
    const newProject = new Project({
        name: req.body.name,
        date: req.body.date,
        repository: req.body.repository,
        description: req.body.description
    });
    newProject.save().then(Project => res.json(Project));
});

router.put('/:name', (req, res) => {
    Project.findOneAndUpdate(
        {"name": req.params.name},
        {"pic": req.body.pic},
        {new: true}
        ).then(project => res.json(project))
})

// router.put('/:name', (req, res) => {
//     console.log(req.params.name)
//     Project.findOne({"name": req.params.name}, 
//     function(err, project) {
//         console.log(err)
//         console.log(project)
//         project.points.unshift({
//             point: req.body.point
//         })
//         project.save()
//     }).then(res => {
//         res.status(200).send(res);
//     }).catch(err => {
//         res.status(400).send(err);
//     });
// });

router.delete('/:name', (req, res) => {
    Project.findOneAndDelete({"name": req.params.name}).then(res => {
        res.status(200).send(res)
    }).catch(err => {
        res.status(500).send(err);
    });
});

module.exports = router;