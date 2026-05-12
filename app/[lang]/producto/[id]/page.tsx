'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import estilos from './producto.module.css';

// Mock de datos (esto vendría de una base de datos o CMS en producción)
const PRODUCTOS_DATA: Record<string, any> = {
    '1': {
        nombre: 'Sudadera Bechamel',
        categoria: 'Novedades / Hoodies',
        precio: '65.00€',
        descripcion: 'Sudadera con capucha de corte oversize. Fabricada en algodón orgánico de 400 GSM con acabado suave y textura premium.',
        detalles: '80% Algodón, 20% Poliéster. Lavado en frío. Hecho en España.',
        envio: 'Envío gratuito en pedidos superiores a 100€. Entrega en 2-4 días laborales.',
        imagenes: [
            '/productos/sudadera-bechamel-oversize/1.webp',
            '/productos/sudadera-bechamel-oversize/2.webp',
            '/productos/sudadera-bechamel-oversize/3.webp',
            '/productos/sudadera-bechamel-oversize/4.webp'
        ]
    },
    '2': {
        nombre: 'Camiseta Panko Tech',
        categoria: 'Novedades / Techwear',
        precio: '35.00€',
        descripcion: 'Camiseta técnica de alto rendimiento con microperforaciones para máxima transpirabilidad.',
        detalles: '100% Poliéster técnico. Secado rápido. Costuras reforzadas.',
        envio: 'Envío estándar 4.95€. Entrega en 48h.',
        imagenes: [
            '/productos/camiseta-panko-tech/1.webp',
            '/productos/camiseta-panko-tech/2.webp',
            '/productos/camiseta-panko-tech/3.webp',
            '/productos/camiseta-panko-tech/4.webp'
        ]
    }
};

export default function FichaProducto({ params }: { params: Promise<{ id: string, lang: string }> }) {
    const { id } = use(params);
    const producto = PRODUCTOS_DATA[id] || PRODUCTOS_DATA['1']; // Fallback al 1 para demo

    const [imgActiva, setImgActiva] = useState(0);
    const [tallaSel, setTallaSel] = useState('M');
    const [acordeonAbierto, setAcordeonAbierto] = useState<string | null>('tecnico');

    return (
        <article className={estilos.contenedor}>
            {/* COLUMNA IZQUIERDA: GALERÍA */}
            <div className={estilos.galeria}>
                <div className={estilos.imagenPrincipal}>
                    <Image 
                        src={producto.imagenes[imgActiva]} 
                        alt={producto.nombre}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
                <div className={estilos.miniaturas}>
                    {producto.imagenes.map((img: string, index: number) => (
                        <div 
                            key={index} 
                            className={`${estilos.miniatura} ${imgActiva === index ? estilos.miniaturaActiva : ''}`}
                            onClick={() => setImgActiva(index)}
                        >
                            <Image src={img} alt={`Vista ${index}`} fill style={{ objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* COLUMNA DERECHA: INFORMACIÓN */}
            <div className={estilos.info}>
                <header>
                    <span className={estilos.categoria}>{producto.categoria}</span>
                    <h1 className={estilos.nombre}>{producto.nombre}</h1>
                    <p className={estilos.precio}>{producto.precio}</p>
                </header>

                <div className={estilos.descripcion}>
                    <p>{producto.descripcion}</p>
                </div>

                <div className={estilos.seccionTallas}>
                    <span className={estilos.labelSeccion}>Seleccionar Talla</span>
                    <div className={estilos.tallas}>
                        {['S', 'M', 'L', 'XL'].map((talla) => (
                            <button 
                                key={talla}
                                className={`${estilos.tallaBtn} ${tallaSel === talla ? estilos.tallaActiva : ''}`}
                                onClick={() => setTallaSel(talla)}
                            >
                                {talla}
                            </button>
                        ))}
                    </div>
                </div>

                <button className={estilos.botonCompra}>
                    Añadir al Carrito — {producto.precio}
                </button>

                <div className={estilos.acordeones}>
                    <div className={estilos.acordeon}>
                        <button 
                            className={estilos.acordeonHeader}
                            onClick={() => setAcordeonAbierto(acordeonAbierto === 'tecnico' ? null : 'tecnico')}
                        >
                            <span>Detalles Técnicos</span>
                            <span>{acordeonAbierto === 'tecnico' ? '−' : '+'}</span>
                        </button>
                        {acordeonAbierto === 'tecnico' && (
                            <div className={estilos.acordeonContent}>
                                <p>{producto.detalles}</p>
                            </div>
                        )}
                    </div>

                    <div className={estilos.acordeon}>
                        <button 
                            className={estilos.acordeonHeader}
                            onClick={() => setAcordeonAbierto(acordeonAbierto === 'envio' ? null : 'envio')}
                        >
                            <span>Envíos y Devoluciones</span>
                            <span>{acordeonAbierto === 'envio' ? '−' : '+'}</span>
                        </button>
                        {acordeonAbierto === 'envio' && (
                            <div className={estilos.acordeonContent}>
                                <p>{producto.envio}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
