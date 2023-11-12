import BaseEntity from "./BaseEntity";

export default class AuditableEntity extends BaseEntity{
    public createdAt: Date;
    public updatedAt: Date;
    public createdBy: string | null;
    public updatedBy: string | null;
    constructor (
        id: string,
        createdAt: Date = new Date(Date.now()),
        updatedAt: Date = new Date(Date.now()),
        createdBy: string | null = null,
        updatedBy: string | null = null,
    ){
        super(id);
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.createdBy = createdBy
        this.updatedBy = updatedBy;
    }
}