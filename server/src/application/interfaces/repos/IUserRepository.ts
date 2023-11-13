import User from "../../../domain/entities/User";

export default interface IUserRepository {
    getUserById: (id: string) => Promise<User | null>;
    getUserByEmail: (email: string) => Promise<User | null>;
}