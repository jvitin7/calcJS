// Trocar o tema
export default function (event) {
    const main = document.querySelector("main");
    const root = document.querySelector(":root");

    if(main.dataset.theme === 'light') {
        root.style.setProperty('--bg-color', '#F2F2F0');
        root.style.setProperty('--primary-color', '#382F59');
        root.style.setProperty('--secundary-color', '#201B40');
        root.style.setProperty('--switch-color', '#382F59');
        
        main.dataset.theme = 'dark';
    } else {
        root.style.setProperty('--bg-color', '#181426');
        root.style.setProperty('--primary-color', '#F2F2F0');
        root.style.setProperty('--secundary-color', '#F2F2F0');
        root.style.setProperty('--switch-color', '#F2F2F0');
        
        main.dataset.theme = 'light';
    }
}