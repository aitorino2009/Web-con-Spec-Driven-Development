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
        imagen: '/productos/sudadera-bechamel-oversize/1.webp'
    },
    {
        id: 2,
        nombre: 'Camiseta Panko Tech',
        precio: '35.00€',
        tag: 'Novedad',
        imagen: '/productos/camiseta-panko-tech/1.webp'
    },
    {
        id: 3,
        nombre: 'Pantalones Rebozados',
        precio: '85.00€',
        tag: 'Novedad',
        imagen: '/productos/pantalones-rebozados/1.webp'
    },
    {
        id: 4,
        nombre: 'Gorra Crujiente',
        precio: '25.00€',
        tag: 'Novedad',
        imagen: '/productos/gorra-crujiente/1.webp'
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
                            <Image 
                                src={producto.imagen}
                                alt={producto.nombre}
                                fill
                                className={estilos.imagen}
                            />
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
