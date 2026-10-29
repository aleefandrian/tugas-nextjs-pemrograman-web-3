import KartuProdi from "@/components/KartuProdi";
import PengumumanKampus from "@/components/PengumumanKampus";

export default function HalamanEksperimen() {
 
  const daftarProdi = [
    {
      id: 1,
      namaProdi: 'Teknologi Informasi (TI)',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Full-Stack Web Developer, Cloud Engineer, Mobile App Developer'
    },
    {
      id: 2,
      namaProdi: 'Mekatronika & Robotika',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Automation Engineer, IoT Specialist, Robotics Programmer'
    },
    {
      id: 3,
      namaProdi: 'Bisnis Digital & Bahasa Jepang',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Digital Marketer, IT Bridge Engineer (BrSE) Jepang, Business Analyst'
    }
  ];

    const pengumumanKampus = [
    {
      id: 1,
      kategori: "Penting",
      judul: "Batas Akhir Pembayaran Uang Kuliah Tunggal (UKT Semester Genap)",
      tanggal: "15 November 2026",
      tempat: "Sistem Akademik / Keuangan Kampus",
      warnaBadge: "#fee2e2"
    },
    {
      id: 2,
      kategori: "Akademik",
      judul: "Pelaksanaan Ujian Tengah Semester (UTS) Ganjil",
      tanggal: "23 - 28 November 2026",
      tempat: "Ruang Kuliah & CBT Lab",
      warnaBadge: "#dbeafe"
    },
    {
      id: 3,
      kategori: "Kemahasiswaan",
      judul: "Sosialisasi Program Kreativitas Mahasiswa (PKM) & Hibah Pendanaan",
      tanggal: "05 Desember 2026",
      tempat: "Auditorium Kampus & Live Streaming",
      warnaBadge: "#dcfce7"
    },
  ];

  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 20px' }}>
      {/* Bagian Hero Banner */}
      <section style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        padding: '36px',
        borderRadius: '12px',
        marginBottom: '32px'
      }}>
        <h1 style={{ margin: '0 0 12px 0', fontSize: '28px' }}>
          Selamat Datang di Portal Akademik Politeknik Takumi
        </h1>
        <p style={{ margin: 0, fontSize: '16px', color: '#dbeafe' }}>
          Mencetak talenta teknologi siap kerja dengan kurikulum berbasis industri dan arsitektur web modern.
        </p>
      </section>

      {/* Bagian Daftar Program Studi */}
      <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>
        Pilihan Program Studi Unggulan
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {daftarProdi.map((item) => (
          <KartuProdi
            key={item.id}
            namaProdi={item.namaProdi}
            jenjang={item.jenjang}
            akreditasi={item.akreditasi}
            prospekKarir={item.prospekKarir}
          />
        ))}
      </div>

      <div style={{ marginTop: '48px' }}>
  <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>
    Pengumuman Kampus Terbaru
  </h2>
  
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '20px' 
  }}>
    {pengumumanKampus.map((pengumuman) => (
      <PengumumanKampus 
        key={pengumuman.id}
        kategori={pengumuman.kategori}
        judul={pengumuman.judul}
        tanggal={pengumuman.tanggal}
        tempat={pengumuman.tempat}
        warnaBadge={pengumuman.warnaBadge}
      />
    ))}
  </div>
</div>
    </main>
  );
}
   