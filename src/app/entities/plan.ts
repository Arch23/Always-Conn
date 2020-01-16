export class Plan {
    id: number
    name: string
    description: string
    value: number
    dataLimit: number
    benefits: string[]

    constructor(
        id: number,
        name: string,
        description: string,
        value: number,
        dataLimit: number,
        benefits: string[]
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.value = value;
        this.dataLimit = dataLimit;
        this.benefits = benefits;
    }
}