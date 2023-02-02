const fs = require('fs');
const crearArchivo = async (base = 4, listar = false, hasta = 10) => {
    const colors = require('colors');

    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base}  ${'x'.red} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar){
            console.log('============================='.rainbow.inverse);
            console.log(`  tabla del : ${base}`.red.bgCyan.underline);
            console.log('============================='.rainbow.inverse);

            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`.brightBlue.underline;
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}