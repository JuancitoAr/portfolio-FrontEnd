export class ExperienciaLaboral {
    experiencia_laborarl_id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    
    constructor(
        experiencia_laborarl_id: number,
        titulo: string,
        descripcion: string,
        imagen: string
    ) {
        this.experiencia_laborarl_id = experiencia_laborarl_id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
