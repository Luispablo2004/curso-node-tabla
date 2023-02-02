const { crearArchivo } = require('./helpers/multiplicar'); 
const colors = require('colors');
const argv = require('./config/yargs')

         
            
console.clear();


console.log('hasta: yargs', argv.h );

/* const [ , , arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('='); */


//const base = 2;                                                                                                                                                                                                                                 


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.bgRed))
    .catch(err => console.log(err))
   