export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;

    constructor(id: number=0, userName:string='', password:string='', firstName:string='', lastName:string='',
                 phoneNumber: string='', email: string='', isReviewer: boolean=false, isAdmin:boolean=false) {

    }

    about(): string {
        return "User: id: "+this.id+ ", User Name: "+this.userName+ ", Password: "+this.password+
        "First Name: "+this.firstName+", Last Name: "+this.lastName+", Phone: "+this.phoneNumber+
        ", Email: "+this.email+", Reviewer? "+this.isReviewer+", Admin? "+this.isAdmin;
    }
}
