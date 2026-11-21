
// MARSHa BEAUTY - JAVASCRIPT

// Menampilkan tahun secara otomatis
const marshaYear = document.getElementById("marsha_year");

if (marshaYear) {
    marshaYear.textContent = new Date().getFullYear();
}


// INTERAKSI FORMULIR KONTAK MARSHa BEAUTY

const marshaContactForm = document.getElementById("marsha_contact_form");

if (marshaContactForm) {
    marshaContactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("marsha_nama").value;
        const hasil = document.getElementById("marsha_form_result");

        if (hasil) {
            hasil.textContent =
                "Terima kasih, " + nama +
                "! Pesan kamu berhasil diproses dalam simulasi website ini.";
        }

        marshaContactForm.reset();
    });
}
