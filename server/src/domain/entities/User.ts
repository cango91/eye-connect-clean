import { UserRoles, ValidationStatus } from "../common/enums";
import Notification from "./Notification";

export default class User {
    constructor(
        public id: string,
        public displayName: string,
        public email: string,
        public name: string,
        public institution: string,
        public additionalInfo: string,
        public role: UserRoles,
        public validationStatus: ValidationStatus = ValidationStatus.Incomplete,
        public notifications: Notification[] = [],
    ) { }
}