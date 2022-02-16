import { v4 as uuid} from 'uuid';


class Offer {
    id?: string;
    offerID: string;
    sellerID: string; 
    skuID: string;
    salesChannel: string;
    created_at: Date;
    updated_at: Date;

    constructor() {
        if(!this.id) {this.id = uuid()}
    }
}

export { Offer }