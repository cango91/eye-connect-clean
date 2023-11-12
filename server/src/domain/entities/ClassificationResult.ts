import AuditableEntity from "../common/AuditableEntity";

export default class ClassificationResult extends AuditableEntity {
    public value: number;
    public result: string;
    constructor({
        id,
        value,
        result = "Must be verified by a specialist",
        createdAt = new Date(),
        updatedAt = new Date(),
        createdBy = null,
        updatedBy = null
    }: {
        id: string,
        value: number,
        result?: string,
        createdAt?: Date;
        updatedAt?: Date;
        createdBy?: string | null;
        updatedBy?: string | null;
    }) {
        super(id, createdAt, updatedAt, createdBy, updatedBy);
        this.value = value;
        this.result = result;
    }
}