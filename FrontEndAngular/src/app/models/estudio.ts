export class Estudio {
    estudio_id: number;
    nivel: string;
    institucion: string;
    titulo: string;
    estado: string;
    descripcion: string;

    constructor(
        estudio_id: number,
        nivel: string,
        institucion: string,
        titulo: string,
        estado: string,
        descripcion: string
    ) {
        this.estudio_id = estudio_id;
        this.nivel = nivel;
        this.institucion = institucion;
        this.titulo = titulo;
        this.estado = estado;
        this.descripcion = descripcion;
    }
}
