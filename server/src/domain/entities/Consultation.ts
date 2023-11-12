import AuditableEntity from "../common/AuditableEntity";
import { RetinopathyGrades } from "../common/enums";
import Examination from "./Examination";
import Funduscopy from "./Funduscopy";
import Patient from "./Patient";
import User from "./User";

export default class Consultation extends AuditableEntity {
    public consultant: User;
    public diagnosis: RetinopathyGrades;
    public notes?: string;
    public examination?: Examination;
    public examiner?: User;
    public patient: Patient;
    public images?: Funduscopy[];
    constructor({
        id,
        patient,
        consultant,
        diagnosis,
        notes,
        examination,
        examiner,
        images = [],
        createdAt = new Date(),
        updatedAt = new Date(),
        createdBy = null,
        updatedBy = null,

    }: {
        id: string,
        patient: Patient,
        consultant: User,
        diagnosis: RetinopathyGrades,
        notes?: string,
        examination?: Examination,
        examiner?: User,
        images?: Funduscopy[],
        createdAt?: Date,
        updatedAt?: Date,
        createdBy?: string | null,
        updatedBy?: string | null
    }) {
        super(id, createdAt, updatedAt, createdBy, updatedBy);
        this.consultant = consultant;
        this.patient = patient;
        this.diagnosis = diagnosis;
        this.notes = notes;
        this.examination = examination;
        this.examiner = examiner;
        this.images = images;
    }
}