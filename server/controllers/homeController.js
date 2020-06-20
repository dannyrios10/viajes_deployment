const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');


exports.consultasHomePage = async (req, res) => {

    const promises= [];


    
    const viajes = await Viaje.findAll({ limit: 4 });

    
    const testimoniales = await Testimonial.findAll({ limit: 3 })
    
    res.render('index', {
        pagina: 'Próximos Viajes',
        clase: 'home',
        viajes,
        testimoniales
    })
}