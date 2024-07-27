export const useNavbarStore = () => useState('navbar', () => false);


export function openNavbar() {
    useNavbarStore().value = true;
}

export function closeNavbar() {
    useNavbarStore().value = false;
}

export function toggleNavbar() {
    useNavbarStore().value = !useNavbarStore().value;
}