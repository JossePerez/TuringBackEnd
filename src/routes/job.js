const express = require("express");
const jobSchema = require("../models/job");

const router = express.Router();

// Crear Trabajo  #End Point
router.post("/jobs", (req, res) => {
    const job = jobSchema(req.body);  
    console.log(req.body);
    job
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// Obtener todos los trabajos  #End Point
router.get("/jobs", (req, res) => {
    jobSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// Obtener un trabajo  #End Point
router.get("/jobs/:id", (req, res) => {
    const {id}= req.params;
    jobSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// Actualizar un trabajo  #End Point
router.put("/jobs/:id", (req, res) => {
    const {id}= req.params;
    const {company, job, payment} = req.body;
    jobSchema
        .updateOne({_id:id},{$set:{company, job, payment}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// Eliminar un trabajo  #End Point
router.delete("/jobs/:id", (req, res) => {
    const {id}= req.params;
    jobSchema
        .deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;
