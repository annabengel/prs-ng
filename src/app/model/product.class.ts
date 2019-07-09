import { Vendor } from './vendor.class';

export class Product {
    id: number;
    vendor: Vendor;
    partNumber: string;
    name: string;
    price:number;
    unit: string;
    photoPath: string;

    constructor(id: number=0, vendor: Vendor=null, partNumber:string='', name:string='', price:number=0,
                 unit: string='', photoPath: string='') {

    }

    about(): string {
        return "Product: id: "+this.id+ ", Vendor: "+this.vendor+ ", Part Number: "+this.partNumber+
        "Name: "+this.name+", Price: "+this.price+", Unit: "+this.unit+", Photo Path: "+this.photoPath;
    }
}