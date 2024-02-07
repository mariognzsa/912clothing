export class ProductModel {
    id; // number
    title; // string
    description; // string
    price; // number
    discount; // number
    season_released; // number
    sizes; // array<string>
    images; // array<string>
    /**
     * 
     * @param {ProductModel} product 
     */
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.description = product.description;
        this.price = product.price;
        this.discount = product.discount;
        this.season_released = product.season_released;
        this.sizes = product.sizes;
        this.images = product.images;
    }

    /**
     * Calculates final price after discount
     * @returns number
     */
    getPriceAfterDiscount() {
        return this.price * (this.discount / 100);
    }
}