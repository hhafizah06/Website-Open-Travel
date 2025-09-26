function bookNow(paket){
  document.getElementById('paket').value = paket;
  window.scrollTo({ top: document.querySelector('.form-section').offsetTop, behavior: 'smooth' });
}

const form = document.getElementById('bookingForm');
form.addEventListener('submit', e => {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const paket = document.getElementById('paket').value;
  const jumlah = document.getElementById('jumlah').value;

  // Nomor WhatsApp kamu
  const adminPhone = "62895369874943"; // ganti dengan nomor WA kamu (pakai 62 bukan 0)
  const text = `Halo, saya mau booking:\n\nNama: ${nama}\nWA: ${whatsapp}\nPaket: ${paket}\nJumlah: ${jumlah} orang`;

  const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});

