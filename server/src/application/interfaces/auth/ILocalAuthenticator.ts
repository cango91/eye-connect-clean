export default interface ILocalAuthenticator{
    authenticate: (email: string, password: string) => Promise<boolean>;
}