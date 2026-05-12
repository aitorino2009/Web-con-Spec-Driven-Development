'use client';

import Image from 'next/image';
import Link from 'next/link';
import estilos from './ProductGrid.module.css';

interface Producto {
    id: string;
    nombre: string;
    precio: string;
    tag?: string;
    imagen: string;
}

interface Props {
    lang: string;
    productos: Producto[];
}

export default function ProductGrid({ lang, productos }: Props) {
    return (
        <section className={estilos.seccion}>
            <div className={estilos.grid}>
                {productos.map((producto) => (
                    <Link 
                        key={producto.id} 
                        href={`/${lang}/producto/${producto.id}`}
                        className={estilos.tarjeta}
                    >
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
                    </Link>
                ))}
            </div>
        </section>
    );
}
