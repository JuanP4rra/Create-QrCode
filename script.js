/* DECLARACION CONSTANTES */
const BtnGenerate = document.getElementById("btn-generate");
const BtnClear = document.getElementById("btn-clear");
const InputText = document.getElementById("input-text");
const QrCodeDiv = document.getElementById("qrcode");

/* FUNCION EN "Generar QR" */
BtnGenerate.addEventListener("click", () => {
    const inputValue = InputText.value; // obtiene el valor del input
    if (inputValue) {
        QrCodeDiv.innerHTML = ""; // limpia el contenido del elemento
        const qrcode = new QRCode(QrCodeDiv, {
            text: inputValue,
            width: 300,
            height: 300,

        }) 
    }
});

/* FUNCION EN "Limpiar" */
BtnClear.addEventListener("click", () => {
    InputText.value = "";
    QrCodeDiv.innerHTML = "";
});