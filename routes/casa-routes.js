const express = require('express')
const mongoose = require('mongoose')
const Casa = require('../models/Casa')

const router = express.Router()

//GET Route -> Todas las casas
router.get('/casas', (req, res, next) => {
    Casa.find()
        .then(allCasas => {
            res.json(allCasas)
        })
        .catch(err => {
            res.json(err)
        })
})

//POST route -> Crear una nueva Casa
router.post('/casas', (req, res, next) => {

    Casa.create({
            dirEstado: req.body.dirEstado,
            dirCiudad: req.body.dirCiudad,
            dirMunicipio: req.body.dirMunicipio,
            dirColonia: req.body.dirColonia,
            dirCalle: req.body.dirCalle,
            dirExterior: req.body.dirExterior,
            dirInterior: req.body.dirInterior,
            propNombre: req.body.propNombre,
            propApellido: req.body.propApellido,
            propTelefono: req.body.propTelefono,
            propCorreo: req.body.propCorreo,
            precio: req.body.precio
        })
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            res.json(err)
        })
})

//GET route -> Casa Especifica ID/Detalle
router.get('/casas/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({
            message: 'El Id especificado no es valido'
        })
        return;
    }

    Casa.findById(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.json(err)
        })
})

//PUT route => Actualizar casa especifica
router.put('/casas/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({
            messgae: 'El Id especificado no es valido'
        })
        return;
    }

    Casa.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.json({
                message: `La casa con ${req.params.id} se actuaizo satisfactoriamente`
            })
        })
        .catch(err => {
            res.json(err)
        })
})

//DELETE route -> Borrar casa especifica
router.delete('/casas/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({
            message: 'El Id especificado no es valido'
        });
        return;
    }

    Casa.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json({
                message: `La casa con ${req.params.id} se borro satisfactoriamente`
            })
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router