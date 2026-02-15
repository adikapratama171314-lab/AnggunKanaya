// Inisialisasi Animasi Scroll
AOS.init({ duration: 1500, once: true });

const song = document.getElementById('bgSong');
let playing = false;

// Fungsi untuk memulai musik dan efek
function startEverything() {
    if (!playing) {
        song.play();
        playing = true;
        document.getElementById('hint1').style.display = 'none';
        document.getElementById('musicBar').style.opacity = '1';
        
        // Mulai efek partikel melayang setiap 300ms
        setInterval(createParticle, 300);
    }
}

// Fungsi kontrol Play/Pause
function toggleMusic(e) {
    e.stopPropagation();
    if (song.paused) {
        song.play();
        document.getElementById('music-status').innerText = 'BERHENTI';
    } else {
        song.pause();
        document.getElementById('music-status').innerText = 'PUTAR';
    }
}

// Logika pembuatan partikel kunang-kunang
function createParticle() {
    const container = document.getElementById('particle-container');
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 1 + 'px';
    
    particle.classList.add('particle');
    particle.style.width = size;
    particle.style.height = size;
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 5 + 5 + 's';
    particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;
    
    container.appendChild(particle);
    
    // Hapus elemen setelah animasi selesai agar memori tidak penuh
    setTimeout(() => {
        particle.remove();
    }, 8000);
}
