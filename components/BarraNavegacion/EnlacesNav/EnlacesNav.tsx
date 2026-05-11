import Link from 'next/link';
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
 */
export default function EnlacesNav({ dicc, lang }: Props) {
  const links = [
    { key: 'novedades', path: '/novedades' },
    { key: 'hombre', path: '/hombre' },
    { key: 'mujer', path: '/mujer' },
    { key: 'basicos', path: '/basicos' },
    { key: 'archivo', path: '/archivo' },
  ];

  return (
    <ul className={estilos.lista}>
      {links.map((link) => (
        <li key={link.key}>
          <Link href={`/${lang}${link.path}`} className={estilos.enlace}>
            {dicc[link.key as keyof typeof dicc]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
