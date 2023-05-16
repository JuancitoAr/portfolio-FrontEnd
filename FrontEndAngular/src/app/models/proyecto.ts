export class Proyecto {
    proyecto_id: number;
    titulo: string;
    fecha_inicio: string;
    descripcion: string;
    link: string;
    mascara: string;

    constructor(
        proyecto_id: number,
        titulo: string,
        fecha_inicio: string,
        descripcion: string,
        link: string,
        mascara: string
    ) {
        this.proyecto_id = proyecto_id;
        this.titulo = titulo;
        this.fecha_inicio = fecha_inicio;
        this.descripcion = descripcion;
        this.link = link;
        this.mascara = mascara;
    }
}
