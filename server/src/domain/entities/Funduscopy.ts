import AuditableEntity from "../common/AuditableEntity";
import ClassificationResult from "./ClassificationResult";
import Consultation from "./Consultation";
import Examination from "./Examination";
import Patient from "./Patient";
import User from "./User";

export default class Funduscopy extends AuditableEntity {
    public image: any;
    public classificationResult: ClassificationResult;
    public verified: boolean;
    public verifiedBy?: User | undefined | null;
    public patient: Patient;
    public examination: Examination | undefined | null;
    public consultation: Consultation | undefined | null;
    constructor({
        id,
        image,
        patient,
        examination,
        consultation = null,
        verified = false,
        verifiedBy = null,
        classificationResult,
        createdAt = new Date(),
        updatedAt = new Date(),
        createdBy = null,
        updatedBy = null
    }: {
        id: string,
        image: any,
        patient: Patient,
        examination: Examination,
        consultation: Consultation | undefined | null,
        verified: boolean,
        verifiedBy: User | undefined | null,
        classificationResult: ClassificationResult,
        createdAt?: Date;
        updatedAt?: Date;
        createdBy?: string | null;
        updatedBy?: string | null;
    }) {
        super(id, createdAt, updatedAt, createdBy, updatedBy);
        this.image = image;
        this.patient = patient;
        this.examination = examination;
        this.consultation = consultation;
        this.verified = verified;
        this.verifiedBy = verifiedBy;
        this.classificationResult = classificationResult;
    }
}