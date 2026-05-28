const profileCard = document.getElementById('profileCard');
const btnGantiWarna = document.getElementById('btnGantiWarna');

const btnTampilBio = document.getElementById('btnTampilBio');
const bioKonten = document.getElementById('bioKonten');

const inputTarget = document.getElementById('inputTarget');
const btnTambahTarget = document.getElementById('btnTambahTarget');
const daftarTarget = document.getElementById('daftarTarget');


btnTampilBio.addEventListener('click', function() {
    bioKonten.classList.toggle('hidden');
    
    if (bioKonten.classList.contains('hidden')) {
        btnTampilBio.innerText = "Tampilkan Biodata Saya";
    } else {
        btnTampilBio.innerText = "Sembunyikan Biodata";
    }
});


btnGantiWarna.addEventListener('click', function() {
    const daftarWarna = ['#ffebee', '#e8f5e9', '#e3f2fd', '#fff3e0', '#f3e5f5', '#e0f7fa'];
    const indeksAcak = Math.floor(Math.random() * daftarWarna.length);
    profileCard.style.backgroundColor = daftarWarna[indeksAcak];
});


function tambahItemBaru() {
    const teksInput = inputTarget.value.trim(); 
   
    if (teksInput === "") {
        alert("Kolom input tidak boleh kosong ya!");
        return;
    }
    
    const liBaru = document.createElement('li');
    liBaru.innerText = teksInput;
    
    daftarTarget.appendChild(liBaru);
    
    inputTarget.value = "";
}

btnTambahTarget.addEventListener('click', tambahItemBaru);

inputTarget.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        tambahItemBaru();
    }
});