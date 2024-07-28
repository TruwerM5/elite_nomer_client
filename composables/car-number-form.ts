export const useCarNumberStore = defineStore('car-number', {
    state: () => {
        return {
            id_value: '',
            region_value: '',
            numbers: '',
            characters: '',
            allowed_characters: 'АВЕКМНОРСТУХ1234567890'
        }
    },
    actions: {
        clearInputs() {
            this.id_value = '';
            this.region_value = '';
        }
    }
})