export class article_category {
    id:number;
    name:String;
    description:String;
    status:number;
    parent_id:number | string;

    constructor(
        id:number,
        name:String, 
        description:String, 
        status:number,
        parent_id:number | string,
        )
    {
        this.id=id;
        this.name=name;
        this.description=description;
        this.status=status;
        this.parent_id=parent_id;
    }
}