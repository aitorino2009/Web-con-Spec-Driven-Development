'use client';

import { useState } from 'react';
import Image from 'next/image';
import estilos from './GaleriaImagenes.module.css';

interface Props {
    imagenes: string[];
}

export default function GaleriaImagenes({ imagenes }: Props) {
    const [imgActiva, setImgActiva] = useState(0);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [zoomInterno, setZoomInterno] = useState(false);

    return (
        <div className={estilos.contenedor}>
            {/* IMAGEN PRINCIPAL */}
            <div 
                className={estilos.imagenPrincipal} 
                onClick={() => { setModalAbierto(true); setZoomInterno(false); }}
                title="Hacer clic para ampliar"
            >
                <Image 
                    src={imagenes[imgActiva]} 
                    alt="Vista principal del producto"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            {/* MINIATURAS */}
            {/* ... (sin cambios) ... */}
            <div className={estilos.miniaturas}>
                {imagenes.map((img, index) => (
                    <button 
                        key={index} 
                        className={`${estilos.miniatura} ${imgActiva === index ? estilos.activa : ''}`}
                        onClick={() => setImgActiva(index)}
                    >
                        <Image src={img} alt={`Vista ${index + 1}`} fill style={{ objectFit: 'cover' }} />
                    </button>
                ))}
            </div>

            {/* MODAL / LIGHTBOX */}
            {modalAbierto && (
                <div className={estilos.modalOverlay} onClick={() => setModalAbierto(false)}>
                    <button className={estilos.botonCerrar}>CERRAR [X]</button>
                    <div 
                        className={`${estilos.modalContent} ${zoomInterno ? estilos.zoomActivo : ''}`} 
                        onClick={(e) => { e.stopPropagation(); setZoomInterno(!zoomInterno); }}
                    >
                        <Image 
                            src={imagenes[imgActiva]} 
                            alt="Imagen maximizada"
                            fill
                            style={{ 
                                objectFit: zoomInterno ? 'none' : 'contain',
                                transform: zoomInterno ? 'scale(1.5)' : 'scale(1)',
                                transition: 'transform 0.3s ease'
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
