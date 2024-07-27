export const useSearchStore = () => useState('search', () => false);


export function toggleSearch() {
    useSearchStore().value = !useSearchStore().value;
}