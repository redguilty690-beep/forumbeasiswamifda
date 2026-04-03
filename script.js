const scholarshipCards = [
  {
    title: 'Beasiswa Kampus Merdeka',
    status: 'Dibuka',
    period: '1–20 April 2026',
    desc: 'Untuk mahasiswa aktif dengan syarat akademik dan berkas administrasi tertentu.',
    tag: 'Internal Kampus',
  },
  {
    title: 'Beasiswa Prestasi Nasional',
    status: 'Segera Dibuka',
    period: 'Update via Instagram',
    desc: 'Informasi pengumuman, persyaratan, timeline, dan link pendaftaran akan diperbarui secara berkala.',
    tag: 'Pemerintah',
  },
  {
    title: 'Beasiswa Mitra Swasta',
    status: 'Terbaru',
    period: 'Rolling update',
    desc: 'Cocok untuk section unggulan yang menampilkan poster atau foto setiap kali ada update baru.',
    tag: 'Eksternal',
  },
];

const complaintItems = [
  'Laporan dugaan pelanggaran penerima beasiswa',
  'Kendala pencairan atau administrasi',
  'Permasalahan data penerima',
  'Laporan akan diteruskan ke pihak kampus sesuai kewenangan',
];

const scholarshipList = document.getElementById('scholarship-list');
const complaintList = document.getElementById('complaint-list');

scholarshipCards.forEach((card) => {
  const article = document.createElement('article');
  article.className = 'feed-card';
  article.innerHTML = `
    <div class="feed-card-top">
      <div>
        <span class="feed-tag">${card.tag}</span>
        <h4>${card.title}</h4>
      </div>
      <span class="feed-status">${card.status}</span>
    </div>
    <p>${card.desc}</p>
    <div class="feed-meta">
      <span>${card.period}</span>
      <span>Poster / Link / Detail</span>
    </div>
  `;
  scholarshipList.appendChild(article);
});

complaintItems.forEach((item) => {
  const box = document.createElement('div');
  box.className = 'complaint-item';
  box.textContent = item;
  complaintList.appendChild(box);
});
