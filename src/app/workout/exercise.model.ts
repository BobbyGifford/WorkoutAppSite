export class Exercise {
    public name: string;
    public description: string;
    public isCustom: boolean;

    constructor(name: string, description: string, isCustom: boolean){
        this.name = name;
        this.description = description;
        this.isCustom = isCustom;
    }

    getName(){
        return this.name
    }

    getDesc(){
    return this.description
    }

}