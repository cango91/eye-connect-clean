import AuditableEntity from "../common/AuditableEntity";
import { UserRoles, ValidationStatus } from "../common/enums";
import Notification from "./Notification";

export default class User extends AuditableEntity {
    public displayName: string;
    public email: string;
    public name: string;
    public institution: string;
    public additionalInfo: string;
    public role: UserRoles;
    public validationStatus: ValidationStatus;
    public notifications: Notification[];
    constructor({
        id,
        displayName,
        email,
        name,
        institution,
        additionalInfo,
        role,
        validationStatus = ValidationStatus.Incomplete,
        notifications = [],
        createdAt = new Date(),
        updatedAt = new Date(),
        createdBy = null,
        updatedBy = null
    }: {
        id: string,
        displayName: string,
        email: string,
        name: string,
        institution: string,
        additionalInfo: string,
        role: UserRoles,
        validationStatus: ValidationStatus,
        notifications: Notification[],
        createdAt?: Date,
        updatedAt?: Date,
        createdBy?: string | null,
        updatedBy?: string | null
    }
    ) {
        super(id, createdAt, updatedAt, createdBy, updatedBy);
        this.displayName = displayName;
        this.email = email;
        this.name = name;
        this.institution = institution;
        this.additionalInfo = additionalInfo;
        this.role = role;
        this.notifications = notifications;
        this.validationStatus = validationStatus;
    }

}