export class Menu {
    public name: string;
    public imgPath: string;
    public price: number;

    constructor (name: string, imgPath: string, price: number) {
        this.name = name;
        this.imgPath = imgPath;
        this.price = price;
    }
}