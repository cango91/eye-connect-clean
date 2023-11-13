import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import ILocalAuthenticator from "../interfaces/auth/ILocalAuthenticator";
import IGoogleAuthenticator from "../interfaces/auth/IGoogleAuthenticator";
import User from "../../domain/entities/User";
import IUserRepository from "../interfaces/repos/IUserRepository";

@injectable()
export default class AuthService {
    constructor(
        @inject(TYPES.ILocalAuthenticator) private localAuth: ILocalAuthenticator,
        @inject(TYPES.IGoogleAuthenticator) private googleAuth: IGoogleAuthenticator,
        @inject(TYPES.IUserRepository) private userRepo: IUserRepository
    ) { }

    async authenticate(email: string, password?: string, googleId?: string) {
        let user: User | null = null;
        if (password) {
            if (await this.localAuth.authenticate(email, password)) {
                user = await this.userRepo.getUserByEmail(email);
            }
        } else if (googleId) {
            if (await this.googleAuth.authenticate(email, googleId)) {
                user = await this.userRepo.getUserByEmail(email);
            }
        }
        return user;
    }
}