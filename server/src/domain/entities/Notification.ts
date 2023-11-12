import AuditableEntity from "../common/AuditableEntity";
import { DomainActions, NotificationStatus } from "../common/enums";

export default class Notification extends AuditableEntity {
    public resourceId: string;
    public action: DomainActions;
    public href?: string;
    public message?: string;
    public status: NotificationStatus;
    constructor({
        id,
        resourceId,
        action,
        status = NotificationStatus.New,
        href,
        message,
        createdAt = new Date(),
        createdBy = null,
        updatedAt = new Date(),
        updatedBy = null,
    }: {
        id: string,
        resourceId: string,
        action: DomainActions,
        status: NotificationStatus,
        href?: string,
        message?: string,
        createdAt?: Date,
        updatedAt?: Date,
        createdBy?: string | null,
        updatedBy?: string | null
    }
    ) {
        super(id, createdAt, updatedAt, createdBy, updatedBy);
        this.resourceId = resourceId;
        this.action = action;
        this.href = href;
        this.message = message;
        this.status = status;
    }
}