import type { Product, RawProduct } from "~/types/product"

export const useCatalogStore = defineStore('products', {
    state: () => {
        return {
            products: <Product[]>[],
            nextId: 1,
        }
    },
    actions: {
        addProduct(product: Product) {
            this.products.push(product);
            this.nextId++;
        }
    }
})