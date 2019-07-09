import { User } from './user.class';

export class PurchaseRequest {
    id: number;
    user: User;
    description: string;
    justification: string;
    dateNeeded: Date;
    deliveryMode: string;
    status: string;
    total: number;
    submittedDate: Date;
    reasonForRejection: string;

    constructor(id: number=0, user: User=null, description:string='', justification:string='', dateNeeded: Date=null,
                deliveryMode:string='', status: string='', total:number=0, submittedDate:Date=null, 
                reasonForRejection:string='') {

    }

    about(): string {
        return "Purchase Request: id: "+this.id+ ", User: "+this.user+ ", Description: "+this.description+
        "Justification: "+this.justification+", Date Needed: "+this.dateNeeded+", Delivery Mode: "+this.deliveryMode+
        ", Status: "+this.status+", Total: "+this.total+", Submitted Date: "+this.submittedDate+
        ", Reason For Rejection: "+this.reasonForRejection;
    }
}