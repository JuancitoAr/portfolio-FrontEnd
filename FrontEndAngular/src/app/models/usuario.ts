export class Usuario {
    usuario_id: number;
    apellido: string;
    nombre: string;
    titulo: string;
    descripcion: string;
    foto: string;

    constructor(
        usuario_id: number,
        apellido: string,
        nombre: string,
        titulo: string,
        descripcion: string,
        foto: string
    ) {
        this.usuario_id = usuario_id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.foto = foto;
    }
}
