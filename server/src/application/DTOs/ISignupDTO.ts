import { UserRoles } from "../../domain/common/enums";

export default interface ISignupDTO {
    role: UserRoles;
    name: string;
    institution: string;
    additionalInfo?: string;
}