export class UserData {
    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public img?: string,
        public role: string = 'USER_ROLE',
        public GOOGLE: boolean = false
    ) {

    }
}
