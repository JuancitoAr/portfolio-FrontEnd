export class Skill {
    skill_id: number;
    tipo_habilidad: string;
    habilidad: string;
    nivel: number;

    constructor(
        skill_id: number,
        tipo_habilidad: string,
        habilidad: string,
        nivel: number
    ) {
        this.skill_id = skill_id;
        this.tipo_habilidad = tipo_habilidad;
        this.habilidad = habilidad;
        this.nivel = nivel;
    }
}
