import estilos from './EncabezadoSeccion.module.css';

interface Props {
    titulo: string;
    subtitulo?: string;
    alineacion?: 'left' | 'center';
}

export default function EncabezadoSeccion({ titulo, subtitulo, alineacion = 'left' }: Props) {
    return (
        <header className={`${estilos.contenedor} ${estilos[alineacion]}`}>
            {subtitulo && <span className={estilos.subtitulo}>{subtitulo}</span>}
            <h2 className={estilos.titulo}>{titulo}</h2>
            <div className={estilos.decoracion}></div>
        </header>
    );
}
