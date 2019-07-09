export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    email: string;
    isPreApproved: boolean;

    constructor(id: number=0, code:string='', name:string='', address:string='', city:string='',
                 state: string='', zip: string='', phoneNumber: string='', email: string='',
                 isPreApproved:boolean=false) {

    }

    about(): string {
        return "Vendor: id: "+this.id+ ", Code: "+this.code+ ", Name: "+this.name+
        "Address: "+this.address+", City: "+this.city+", State: "+this.state+", Zip: "+this.zip+
        ", Phone: "+this.phoneNumber+", Email: "+this.email+ ", Approved? "+this.isPreApproved;
    }
}