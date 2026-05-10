import { redirect } from 'next/navigation';

/**
 * app/page.tsx
 * Redireccionador de raíz.
 * 
 * Como usamos rutas por idioma en /[lang], este archivo se encarga de 
 * capturar las visitas a la raíz (/) y mandarlas a la versión por 
 * defecto (español).
 */
export default function RootPage() {
    redirect('/es');
}
