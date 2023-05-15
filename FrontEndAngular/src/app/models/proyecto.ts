export class Proyecto {
    proyecto_id: number;
    titulo: string;
    fecha_inicio: number;
    link: string;
    descripcion: string;
    mascara: string;

    constructor(
        proyecto_id: number,
        titulo: string,
        fecha_inicio: number,
        link: string,
        descripcion: string,
        mascara: string
    ) {
        this.proyecto_id = proyecto_id;
        this.titulo = titulo;
        this.fecha_inicio = fecha_inicio;
        this.link = link;
        this.descripcion = descripcion;
        this.mascara = mascara;
    }
}
