import AuditableEntity from "../common/AuditableEntity";
import { MedicalGenders } from "../common/enums";

export default class Patient extends AuditableEntity {
    public name: string;
    public dateOfBirth: Date;
    public gender: MedicalGenders;
    constructor({
        id,
        name,
        dateOfBirth,
        gender,
        createdAt = new Date(),
        updatedAt = new Date(),
        createdBy = null,
        updatedBy = null,
    }:
        {
            id: string,
            name: string,
            dateOfBirth: Date,
            gender: MedicalGenders,
            createdAt?: Date,
            updatedAt?: Date,
            createdBy?: string | null,
            updatedBy?: string | null
        }
    ) {
        super(id, createdAt, updatedAt, createdBy, updatedBy);
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
    }
}