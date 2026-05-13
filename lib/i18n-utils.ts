/**
 * lib/i18n-utils.ts
 * Utilidades para la internacionalización de datos técnicos.
 */

interface LocalizedString {
    es: string;
    en: string;
}

interface ProductBase {
    id: string;
    nombre: LocalizedString;
    categoria: string;
    precio: string;
    descripcion: LocalizedString;
    detalles: LocalizedString;
    envio: LocalizedString;
    tag?: LocalizedString;
}

export function getLocalizedProduct(producto: ProductBase, lang: string) {
    const l = lang as keyof LocalizedString;
    return {
        id: producto.id,
        nombre: producto.nombre[l] || producto.nombre.es,
        categoria: producto.categoria, // La categoría se traduce vía diccionario
        precio: producto.precio,
        descripcion: producto.descripcion[l] || producto.descripcion.es,
        detalles: producto.detalles[l] || producto.detalles.es,
        envio: producto.envio[l] || producto.envio.es,
        tag: producto.tag ? (producto.tag[l] || producto.tag.es) : undefined
    };
}
