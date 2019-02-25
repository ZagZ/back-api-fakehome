const mongoose = require('mongoose')
const Schema = mongoose.Schema

const casaSchema = new Schema({
    dirEstado: String,
    dirCiudad: String,
    dirMunicipio: String,
    dirColonia: String,
    dirCalle: String,
    dirExterior: String,
    dirInterior: String,
    propNombre: String,
    propApellido: String,
    propTelefono: Number,
    propCorreo: String,
    precio: String,
    photo:{
        type: String,
        default:'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/pyr/5a66edd75cafe85e6838072a/domatofobia_0.jpg'
    },
})

const Casa = mongoose.model('Casa', casaSchema)
module.exports = Casa