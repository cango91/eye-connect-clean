import { DomainActions, NotificationStatus } from "../common/enums";

export default class Notification {
    constructor(
        public id: string,
        public resourceId: string,
        public action: DomainActions,
        public href?: string,
        public message?: string,
        public status: NotificationStatus = NotificationStatus.New,
    ) { }
}