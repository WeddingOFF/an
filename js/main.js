// ===== AMBIL NAMA TAMU DARI URL PARAMETER =====
function getGuestName() {
  const params = new URLSearchParams(window.location.search);
  const to = params.get('to') || params.get('kepada') || params.get('name');
  if (to) {
    // Decode dan format nama (huruf kapital tiap kata)
    return decodeURIComponent(to)
      .replace(/\+/g, ' ')
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  }
  return null;
}

// ===== SET NAMA TAMU =====
function setGuestName() {
  const name = getGuestName();
  const el = document.getElementById('guest-name');
  if (!el) return;

  if (name) {
    el.textContent = name;
  } else {
    el.textContent = 'Tamu Undangan';
  }
}

// ===== TOMBOL BUKA UNDANGAN =====
function initOpenButton() {
  const btn = document.getElementById('btn-open');
  if (!btn) return;

  btn.addEventListener('click', () => {
    // Nanti tinggal diarahkan ke halaman utama undangan
    // Contoh: window.location.href = 'main.html' + window.location.search;
    alert('Silakan hubungkan ke halaman utama undangan.');
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setGuestName();
  initOpenButton();
});
