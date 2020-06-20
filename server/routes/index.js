const express = require('express');
const router = express.Router();

//Controladores
const nosotrosController = require('../controllers/nosotrosController');
const consultasHome = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesControl = require('../controllers/testimonialesController');

module.exports = function(){
    router.get('/', consultasHome.consultasHomePage);

    router.get('/nosotros', nosotrosController.infoNosotros);

    
    router.get('/viajes', viajesController.mostrarViajes);

    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales', testimonialesControl.infoTestimoniales);

    //Cuando se llena el formulario
    router.post('/testimoniales', testimonialesControl.infoTestimonial)


    return router;
}