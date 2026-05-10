/**
 * tipos-css-modules.d.ts
 *
 * Declaración global de tipos para CSS Modules.
 * Sin esto, TypeScript no reconoce los archivos *.module.css
 * y lanza el error TS2307 "Cannot find module".
 *
 * Al importar un .module.css, TypeScript tratará el objeto
 * como Record<string, string> permitiendo acceder a las clases
 * con notación de punto (estilos.contenedor, estilos.zonaIzquierda, etc).
 */
declare module '*.module.css' {
    const clases: Record<string, string>;
    export default clases;
}
