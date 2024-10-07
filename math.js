function tambah(a, b) {
    validateNumbers(a, b);
    return a + b;
}

function kali(a, b) {
    validateNumbers(a, b);
    return a * b;
}

function bagi(a, b) {
    validateNumbers(a, b);
    if (b === 0) {
        throw new Error("Pembagian dengan nol tidak diizinkan.");
    }
    return a / b;    
}

function kurang(a, b) {
    validateNumbers(a, b);
    return a - b;
}

function validateNumbers(...args) {
    args.forEach(arg => {
        if (typeof arg !== 'number') {
            throw new Error("Semua argumen harus berupa angka.");
        }
    });
}

module.exports = { tambah, kali, bagi, kurang };