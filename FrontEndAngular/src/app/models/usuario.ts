export class Usuario {
    usuario_id: number;
    apellido: string;
    nombre: string;
    titulo: string;
    foto: string;
    descripcion: string;


    constructor(
        usuario_id: number,
        apellido: string,
        nombre: string,
        titulo: string,
        foto: string,
        descripcion: string
    ) {
        this.usuario_id = usuario_id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.titulo = titulo;
        this.foto = foto;
        this.descripcion = descripcion;
    }
}
