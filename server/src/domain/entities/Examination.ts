import AuditableEntity from "../common/AuditableEntity";
import Consultation from "./Consultation";
import Funduscopy from "./Funduscopy";
import Patient from "./Patient";
import User from "./User";

export default class Examination extends AuditableEntity {
    public examiner: User;
    public patient: Patient;
    public images?: Funduscopy[];
    public consultation?: Consultation;
    public notes?: string;

    constructor({
        id,
        examiner,
        patient,
        notes,
        consultation,
        images = [],
        createdAt = new Date(),
        updatedAt = new Date(),
        createdBy = null,
        updatedBy = null
    }: {
        id: string,
        examiner: User,
        patient: Patient,
        notes: string,
        consultation?: Consultation,
        images?: Funduscopy[],
        createdAt?: Date;
        updatedAt?: Date;
        createdBy?: string | null;
        updatedBy?: string | null;
    }) {
        super(id, createdAt, updatedAt, createdBy, updatedBy);
        this.examiner = examiner;
        this.patient = patient;
        this.notes = notes;
        this.consultation = consultation;
        this.images = images;
    }
}