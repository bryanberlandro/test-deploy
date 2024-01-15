import { Home } from "./pages/home/Home.js";
import { Buy } from "./pages/buy/Buy.js";

// Fungsi untuk menavigasi ke halaman
function navigateTo(page){
    const content = getContentForPage(page);
    document.getElementById('app').innerHTML = content;
}

// Fungsi untuk mendapatkan konten halaman berdasarkan nama halaman
function getContentForPage(page){
    switch(page){
        case 'home' : 
            return Home();
        case 'buy' :
            return Buy();
        case 'review' : 
            return '<div class="pt-44 pl-44">reviews</div>';
        case 'howItWork': 
            return '<div class="pt-44 pl-44">how it works</div>';
        case 'service':
            return '<div class="pt-44 pl-44">services</div>'
        default : 
            return 'Not Found'
    }
}

// Fungsi untuk menangani perubahan fragmen URL
function handleHashChange(){
    const page = window.location.hash.slice(1); // Mengambil fragmen URL tanpa karakter "#" di depan
    navigateTo(page || 'home') // Jika tidak ada fragmen, kembalikan ke halaman default ('home')
}

window.onload = function () {
    // Set halaman default ke "home" saat aplikasi dimuat pertama kali
    handleHashChange()

    // Tambahkan event listener untuk menangani perubahan fragmen URL
    window.addEventListener('hashchange', handleHashChange)
}
