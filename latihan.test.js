const { expect } = require('chai');
const { tambah, kali } = require('./math');

describe('Pengujian Kasus Negatif untuk Fungsi Matematika', function() {
    describe('Fungsi tambah', function() {
        it('seharusnya mengembalikan error saat mengirimkan string sebagai input', function() {
            expect(() => tambah('2', 3)).to.throw('Semua argumen harus berupa angka.');
            expect(() => tambah(2, '3')).to.throw('Semua argumen harus berupa angka.');
            expect(() => tambah('2', '3')).to.throw('Semua argumen harus berupa angka.');
        });

        it('seharusnya mengembalikan error saat mengirimkan null sebagai input', function() {
            expect(() => tambah(null, 3)).to.throw('Semua argumen harus berupa angka.');
            expect(() => tambah(2, null)).to.throw('Semua argumen harus berupa angka.');
            expect(() => tambah(null, null)).to.throw('Semua argumen harus berupa angka.');
        });
    });

    describe('Fungsi kali', function() {
        it('seharusnya mengembalikan error saat mengirimkan string sebagai input', function() {
            expect(() => kali('2', 3)).to.throw('Semua argumen harus berupa angka.');
            expect(() => kali(2, '3')).to.throw('Semua argumen harus berupa angka.');
            expect(() => kali('2', '3')).to.throw('Semua argumen harus berupa angka.');
        });

        it('seharusnya mengembalikan error saat mengirimkan null sebagai input', function() {
            expect(() => kali(null, 3)).to.throw('Semua argumen harus berupa angka.');
            expect(() => kali(2, null)).to.throw('Semua argumen harus berupa angka.');
            expect(() => kali(null, null)).to.throw('Semua argumen harus berupa angka.');
        });
    });
});
