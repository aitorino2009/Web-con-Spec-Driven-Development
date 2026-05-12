'use client';

import Image from 'next/image';
import estilos from './ProductGrid.module.css';

interface Producto {
    id: number;
    nombre: string;
    precio: string;
    tag: string;
    imagen: string;
}

const PRODUCTOS_MOCK: Producto[] = [
    {
        id: 1,
        nombre: 'Sudadera Bechamel Oversize',
        precio: '65.00€',
        tag: 'Novedad',
        imagen: '/productos/bechamel-oversize.png'
    },
    {
        id: 2,
        nombre: 'Camiseta Panko Tech',
        precio: '35.00€',
        tag: 'Novedad',
        imagen: '/productos/panko-tech.png'
    },
    {
        id: 3,
        nombre: 'Pantalones Rebozados',
        precio: '85.00€',
        tag: 'Novedad',
        imagen: '/productos/pantalones-rebozados.png'
    },
    {
        id: 4,
        nombre: 'Gorra Crujiente',
        precio: '25.00€',
        tag: 'Novedad',
        imagen: '/productos/gorra-crujiente.png'
    }
];

export default function ProductGrid() {
    return (
        <section className={estilos.seccion}>
            <div className={estilos.grid}>
                {PRODUCTOS_MOCK.map((producto) => (
                    <div key={producto.id} className={estilos.tarjeta}>
                        {producto.tag && (
                            <span className={estilos.badge}>
                                {producto.tag}
                            </span>
                        )}
                        
                        <div className={estilos.contenedorImagen}>
                            {/* 
                                NOTA: Las imágenes están en cola de generación. 
                                Se usa un fallback visual mientras tanto.
                            */}
                            <Image 
                                src={producto.imagen}
                                alt={producto.nombre}
                                fill
                                className={estilos.imagen}
                                onError={(e) => {
                                    // Fallback visual si la imagen no existe
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                }}
                            />
                            <div style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f0f0f0',
                                color: '#999',
                                fontFamily: 'Space Mono',
                                fontSize: '0.8rem',
                                textAlign: 'center',
                                padding: '20px'
                            }}>
                                [RENDER PENDING: {producto.nombre}]
                            </div>
                        </div>

                        <div className={estilos.info}>
                            <h3 className={estilos.nombre}>{producto.nombre}</h3>
                            <p className={estilos.precio}>{producto.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
