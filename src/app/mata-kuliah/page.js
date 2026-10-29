import Link from "next/link";

export default function MataKuliah() {
  const daftarMataKuliahProdi = [
    {
      kode: "TI2026",
      prodi: "Teknologi Informasi (TI)",
      matkul: [
        {
          nama: "Pemrograman Web Lanjut",
          sks: 3,
          dosen: "Bapak Ahmad, M.Kom.",
          semester: 3,
          sifat: "Wajib",
        },
        {
          nama: "Arsitektur & Organisasi Komputer",
          sks: 2,
          dosen: "Ibu Siti, M.T.",
          semester: 2,
          sifat: "Wajib",
        },
        {
          nama: "Jaringan Komputer & Keamanan",
          sks: 3,
          dosen: "Bapak Budi, S.T.",
          semester: 4,
          sifat: "Wajib",
        },
        {
          nama: "Basis Data Relasional",
          sks: 3,
          dosen: "Ibu Dewi, M.Kom.",
          semester: 2,
          sifat: "Wajib",
        },
        {
          nama: "Pengembangan Aplikasi Mobile",
          sks: 3,
          dosen: "Bapak Rian, M.T.",
          semester: 5,
          sifat: "Wajib",
        },
        {
          nama: "Proyek Akhir: Aplikasi Web & Mobile",
          sks: 4,
          dosen: "Tim Dosen TI",
          semester: 6,
          sifat: "Wajib",
        },
        {
          nama: "Studi Kasus: Implementasi TI di Industri",
          sks: 2,
          dosen: "Bapak Ahmad, M.Kom.",
          semester: 5,
          sifat: "Pilihan",
        },
        {
          nama: "Kecerdasan Buatan & Pembelajaran Mesin",
          sks: 3,
          dosen: "Bapak Alex, Ph.D.",
          semester: 5,
          sifat: "Pilihan",
        },
        {
          nama: "Analisis Data & Big Data",
          sks: 3,
          dosen: "Ibu Maya, M.Sc.",
          semester: 4,
          sifat: "Pilihan",
        },
      ],
    },
    {
      kode: "MEK2026",
      prodi: "Mekatronika",
      matkul: [
        {
          nama: "Sistem Embedded & Mikrokontroler",
          sks: 3,
          dosen: "Bapak Eko, M.Eng.",
          semester: 3,
          sifat: "Wajib",
        },
        {
          nama: "Pemrograman PLC & CNC",
          sks: 3,
          dosen: "Bapak Joko, S.T.",
          semester: 4,
          sifat: "Wajib",
        },
        {
          nama: "Elektronika Analog & Digital",
          sks: 3,
          dosen: "Bapak Agus, M.T.",
          semester: 2,
          sifat: "Wajib",
        },
        {
          nama: "Kinematika & Dinamika Robot",
          sks: 3,
          dosen: "Bapak Hendra, Ph.D.",
          semester: 4,
          sifat: "Wajib",
        },
        {
          nama: "Sensor dan Actuator",
          sks: 2,
          dosen: "Ibu Ratna, M.Eng.",
          semester: 3,
          sifat: "Wajib",
        },
        {
          nama: "Proyek Akhir: Robotika & Otomasi",
          sks: 4,
          dosen: "Tim Dosen Mekatronika",
          semester: 6,
          sifat: "Wajib",
        },
        {
          nama: "Studi Kasus: Implementasi Mekatronika di Industri",
          sks: 2,
          dosen: "Bapak Eko, M.Eng.",
          semester: 5,
          sifat: "Pilihan",
        },
      ],
    },
    {
      kode: "BDJ2026",
      prodi: "Bisnis Digital & Bahasa Jepang",
      matkul: [
        {
          nama: "Digital Marketing & SEO",
          sks: 3,
          dosen: "Ibu Rina, M.M.",
          semester: 3,
          sifat: "Wajib",
        },
        {
          nama: "E-Commerce & Payment Gateway",
          sks: 3,
          dosen: "Bapak Doni, M.B.A.",
          semester: 4,
          sifat: "Wajib",
        },
        {
          nama: "Analisis Data Bisnis",
          sks: 3,
          dosen: "Ibu Sinta, M.Si.",
          semester: 4,
          sifat: "Wajib",
        },
        {
          nama: "Kanji & Komunikasi Bisnis Jepang",
          sks: 3,
          dosen: "Sensei Tanaka",
          semester: 2,
          sifat: "Wajib",
        },
        {
          nama: "Sogo Nihongo (Bahasa Jepang untuk Bisnis)",
          sks: 3,
          dosen: "Sensei Sato",
          semester: 3,
          sifat: "Wajib",
        },
        {
          nama: "Proyek Akhir: Strategi Bisnis Digital",
          sks: 4,
          dosen: "Tim Dosen Bisdi",
          semester: 6,
          sifat: "Wajib",
        },
        {
          nama: "Studi Kasus: Implementasi Bisnis Digital di Jepang",
          sks: 2,
          dosen: "Sensei Tanaka & Ibu Rina",
          semester: 5,
          sifat: "Pilihan",
        },
      ],
    },
  ];

  return (
    <div>
      <h1>📖 Direktori Prodi & Mata Kuliah</h1>

      <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
        {daftarMataKuliahProdi.map((mataKuliah) => (
          <div
            key={mataKuliah.kode}
            style={{
              border: "1px solid #cbd5e1",
              padding: "16px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong style={{ fontSize: "16px" }}>{mataKuliah.prodi}</strong>
              <br />
              <span style={{ fontSize: "13px", color: "#64748b" }}>
                Mata Kuliah: {mataKuliah.matkul.length}
              </span>
            </div>

            <div style={{ textAlign: "right" }}>
              <strong style={{ fontSize: "20px", color: "#1e40af" }}>
                {mataKuliah.matkul.reduce((total, mk) => total + mk.sks, 0)} SKS
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
