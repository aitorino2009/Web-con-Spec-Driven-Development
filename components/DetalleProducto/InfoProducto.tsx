'use client';

import { useState } from 'react';
import estilos from './InfoProducto.module.css';

interface ProductoInfo {
    nombre: string;
    precio: string;
    categoria: string;
    descripcion: string;
    detalles: string;
    envio: string;
    cta: string;
    tallas: string;
    secciones: {
        tecnico: string;
        envios: string;
    };
}

interface Props {
    producto: ProductoInfo;
}

export default function InfoProducto({ producto }: Props) {
    const [tallaSel, setTallaSel] = useState('M');
    const [acordeonAbierto, setAcordeonAbierto] = useState<string | null>('detalles');

    return (
        <div className={estilos.contenedor}>
            <header className={estilos.cabecera}>
                <span className={estilos.categoria}>{producto.categoria}</span>
                <h1 className={estilos.nombre}>{producto.nombre}</h1>
                <p className={estilos.precio}>{producto.precio}</p>
            </header>

            <div className={estilos.descripcion}>
                <p>{producto.descripcion}</p>
            </div>

            <section className={estilos.selectorTallas}>
                <span className={estilos.label}>{producto.tallas}</span>
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
            </section>

            <button className={estilos.botonCompra}>
                {producto.cta} — {producto.precio}
            </button>

            <div className={estilos.acordeones}>
                <details className={estilos.acordeon} open={acordeonAbierto === 'detalles'}>
                    <summary 
                        className={estilos.acordeonHeader}
                        onClick={(e) => { e.preventDefault(); setAcordeonAbierto(acordeonAbierto === 'detalles' ? null : 'detalles'); }}
                    >
                        {producto.secciones.tecnico}
                    </summary>
                    <div className={estilos.acordeonContent}>
                        <p>{producto.detalles}</p>
                    </div>
                </details>

                <details className={estilos.acordeon} open={acordeonAbierto === 'envio'}>
                    <summary 
                        className={estilos.acordeonHeader}
                        onClick={(e) => { e.preventDefault(); setAcordeonAbierto(acordeonAbierto === 'envio' ? null : 'envio'); }}
                    >
                        {producto.secciones.envios}
                    </summary>
                    <div className={estilos.acordeonContent}>
                        <p>{producto.envio}</p>
                    </div>
                </details>
            </div>
        </div>
    );
}
