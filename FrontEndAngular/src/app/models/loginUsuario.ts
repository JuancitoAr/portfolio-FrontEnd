export class LoginUsuario {
    login_usuario_id: number;
    email: string;
    password: string;

    constructor(
        login_usuario_id: number,
        email: string,
        password: string,
    ) {
        this.login_usuario_id = login_usuario_id;
        this.email = email;
        this.password = password;
    }
}
