const sharp = require('sharp');
const path = require('path');

const inputPath = 'c:/Users/PC/Documents/Programación/Aprendizaje con IA/public/favicon.png';
const outputPath = 'c:/Users/PC/Documents/Programación/Aprendizaje con IA/public/favicon_trans.png';


async function removeBackground() {
    try {
        console.log('Iniciando eliminación de fondo...');
        
        // Cargamos la imagen
        const image = sharp(inputPath);
        
        // 1. Convertimos a espacio de color con canal alfa
        // 2. Usamos el operador 'threshold' o simplemente reemplazamos colores claros
        // Para una croqueta con fondo blanco, podemos usar un filtro de transparencia por luminancia
        await image
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true })
            .then(({ data, info }) => {
                const { width, height, channels } = info;
                for (let i = 0; i < data.length; i += channels) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    
                    // Si el pixel es muy cercano al blanco (ajustamos el umbral a 240)
                    if (r > 240 && g > 240 && b > 240) {
                        data[i + 3] = 0; // Transparencia total
                    }
                }
                return sharp(data, { raw: { width, height, channels } })
                    .png()
                    .toFile(outputPath);
            });

        console.log('Fondo eliminado con éxito. Guardado en: ' + outputPath);
    } catch (err) {
        console.error('Error procesando la imagen:', err);
    }
}

removeBackground();
