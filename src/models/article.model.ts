export class article {
    id:number;
    name:String;
    /* slug:String; */
    description:String;
/*     status:number;
    bar_code:String;
    sku:String;
    comments:String;
    size:String;
    weight:String;
    made_in:String;
    brand_id:number;
    category_id:number;
    unit_id:number; */

    constructor(
        id:number,
        name:String, 
        /* slug:String,  */
        description:String, 
        /* status:number, 
        bar_code:String, 
        sku:String, 
        comments:String, 
        size:String, 
        weight:String,
        made_in:String,
        brand_id:number,
        category_id:number,
        unit_id:number, */
        )
    {
        this.id=id;
        this.name=name;
        /* this.slug=slug; */
        this.description=description;
        /* this.status=status;
        this.bar_code=bar_code;
        this.sku=sku;
        this.comments=comments;
        this.size=size;
        this.weight=weight;
        this.made_in=made_in;
        this.brand_id=brand_id;
        this.category_id=category_id;
        this.unit_id=brand_id; */
    }
}