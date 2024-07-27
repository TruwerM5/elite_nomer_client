import type { Product } from "~/types/product";

export const usePurchaseStore = defineStore('purchase', {
    state: () => {
        return {
            isOpened: false,
            currentProduct: <Product>({}),
        }
    },
    actions: {
        toggleForm() {
            this.isOpened = !this.isOpened;
        },
        setCurrentProduct(product: Product) {
            this.currentProduct = product;
        }
    }
});