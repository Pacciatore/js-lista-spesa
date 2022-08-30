console.log('JS OK!');

let i = 0;
const elencoSpesa = document.getElementById('elenco-spesa');
console.log(elencoSpesa);

const listaSpesa = ['pane', 'acqua', 'latte', 'uova', 'cereali', 'pasta'];
console.log(listaSpesa);

while (i < listaSpesa.length) {

    elencoSpesa.innerHTML += `<p style="text-align: center"> ${listaSpesa[i]} </p>`
    console.log(listaSpesa[i]);

    i++;
}