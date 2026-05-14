'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import estilos from './EnlacesNav.module.css';

interface Props {
  dicc: {
    novedades: string;
    hombre: string;
    mujer: string;
    basicos: string;
    archivo: string;
  };
  lang: string;
}

/**
 * EnlacesNav: Componente de navegación central.
 * Renderiza los enlaces principales de la marca con un diseño sobrio y funcional.
 * Ahora detecta la ruta activa para resaltar la sección actual.
 */
export default function EnlacesNav({ dicc, lang }: Props) {
  const pathname = usePathname();

  const links = [
    { key: 'novedades', path: '/novedades' },
    { key: 'hombre', path: '/hombre' },
    { key: 'mujer', path: '/mujer' },
    { key: 'basicos', path: '/basicos' },
    { key: 'archivo', path: '/archivo' },
  ];

  return (
    <ul className={estilos.lista}>
      {links.map((link) => {
        const href = `/${lang}${link.path}`;
        const esActivo = pathname === href;

        return (
          <li key={link.key}>
            <Link 
              href={href} 
              className={`${estilos.enlace} ${esActivo ? estilos.activo : ''}`}
            >
              {dicc[link.key as keyof typeof dicc]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

