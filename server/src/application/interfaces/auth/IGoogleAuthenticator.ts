export default interface IGoogleAuthenticator{
    authenticate: (email: string, googleId: string) => Promise<boolean>;
}