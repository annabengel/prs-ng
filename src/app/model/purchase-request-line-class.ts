import { PurchaseRequest } from './purchase-request.class';
import { Product } from './product.class';

export class PurchaseRequestLine {
    id: number;
    purchaseRequest: PurchaseRequest;
    product: Product;
    quantity: number;

    constructor(id: number=0, purchaseRequest: PurchaseRequest=null, product: Product=null, quantity: number=0){
    }

    about(): string {
        return "Purchase Request Line: id: "+this.id+ ", Purchase Request: "+this.purchaseRequest+ 
                ", Product: "+this.product+ ", Quantity: "+this.quantity;
    }
}