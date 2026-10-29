import Link from "next/link";

const databaseMataKuliah = {
  TI2026: {
    prodi: "Teknologi Informasi (TI)",
    matkul: [
      {
        nama: "Pemrograman Web Lanjut",
        sks: 3,
        dosen: "Bapak Ahmad, M.Kom.",
        semester: 3,
        sifat: "Wajib"
      },
      {
        nama: "Arsitektur & Organisasi Komputer",
        sks: 2,
        dosen: "Ibu Siti, M.T.",
        semester: 2,
        sifat: "Wajib"
      },
      {
        nama: "Jaringan Komputer & Keamanan",
        sks: 3,
        dosen: "Bapak Budi, S.T.",
        semester: 4,
        sifat: "Wajib"
      },
      {
        nama: "Basis Data Relasional",
        sks: 3,
        dosen: "Ibu Dewi, M.Kom.",
        semester: 2,
        sifat: "Wajib"
      },
      {
        nama: "Pengembangan Aplikasi Mobile",
        sks: 3,
        dosen: "Bapak Rian, M.T.",
        semester: 5,
        sifat: "Wajib"
      },
      {
        nama: "Proyek Akhir: Aplikasi Web & Mobile",
        sks: 4,
        dosen: "Tim Dosen TI",
        semester: 6,
        sifat: "Wajib"
      },
      {
        nama: "Studi Kasus: Implementasi TI di Industri",
        sks: 2,
        dosen: "Bapak Ahmad, M.Kom.",
        semester: 5,
        sifat: "Pilihan"
      },
      {
        nama: "Kecerdasan Buatan & Pembelajaran Mesin",
        sks: 3,
        dosen: "Bapak Alex, Ph.D.",
        semester: 5,
        sifat: "Pilihan"
      },
      {
        nama: "Analisis Data & Big Data",
        sks: 3,
        dosen: "Ibu Maya, M.Sc.",
        semester: 4,
        sifat: "Pilihan"
      }
    ]
  },
  MEK2026: {
    prodi: "Mekatronika",
    matkul: [
      {
        nama: "Sistem Embedded & Mikrokontroler",
        sks: 3,
        dosen: "Bapak Eko, M.Eng.",
        semester: 3,
        sifat: "Wajib"
      },
      {
        nama: "Pemrograman PLC & CNC",
        sks: 3,
        dosen: "Bapak Joko, S.T.",
        semester: 4,
        sifat: "Wajib"
      },
      {
        nama: "Elektronika Analog & Digital",
        sks: 3,
        dosen: "Bapak Agus, M.T.",
        semester: 2,
        sifat: "Wajib"
      },
      {
        nama: "Kinematika & Dinamika Robot",
        sks: 3,
        dosen: "Bapak Hendra, Ph.D.",
        semester: 4,
        sifat: "Wajib"
      },
      {
        nama: "Sensor dan Actuator",
        sks: 2,
        dosen: "Ibu Ratna, M.Eng.",
        semester: 3,
        sifat: "Wajib"
      },
      {
        nama: "Proyek Akhir: Robotika & Otomasi",
        sks: 4,
        dosen: "Tim Dosen Mekatronika",
        semester: 6,
        sifat: "Wajib"
      },
      {
        nama: "Studi Kasus: Implementasi Mekatronika di Industri",
        sks: 2,
        dosen: "Bapak Eko, M.Eng.",
        semester: 5,
        sifat: "Pilihan"
      }
    ]
  },
  BDJ2026: {
    prodi: "Bisnis Digital & Bahasa Jepang",
    matkul: [
      {
        nama: "Digital Marketing & SEO",
        sks: 3,
        dosen: "Ibu Rina, M.M.",
        semester: 3,
        sifat: "Wajib"
      },
      {
        nama: "E-Commerce & Payment Gateway",
        sks: 3,
        dosen: "Bapak Doni, M.B.A.",
        semester: 4,
        sifat: "Wajib"
      },
      {
        nama: "Analisis Data Bisnis",
        sks: 3,
        dosen: "Ibu Sinta, M.Si.",
        semester: 4,
        sifat: "Wajib"
      },
      {
        nama: "Kanji & Komunikasi Bisnis Jepang",
        sks: 3,
        dosen: "Sensei Tanaka",
        semester: 2,
        sifat: "Wajib"
      },
      {
        nama: "Sogo Nihongo (Bahasa Jepang untuk Bisnis)",
        sks: 3,
        dosen: "Sensei Sato",
        semester: 3,
        sifat: "Wajib"
      },
      {
        nama: "Proyek Akhir: Strategi Bisnis Digital",
        sks: 4,
        dosen: "Tim Dosen Bisdi",
        semester: 6,
        sifat: "Wajib"
      },
      {
        nama: "Studi Kasus: Implementasi Bisnis Digital di Jepang",
        sks: 2,
        dosen: "Sensei Tanaka & Ibu Rina",
        semester: 5,
        sifat: "Pilihan"
      }
    ]
  }
};

export default async function ListMataKuliah({ params }) {
  const { kode } = await params;

  const dataProdi = databaseMataKuliah[kode];

  if (!dataProdi) {
    return (
      <div
        style={{
          padding: "20px",
          background: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "40px auto",
        }}
      >
        <h2 style={{ color: "#dc2626", marginBottom: "8px" }}>
          Prodi "{kode}" Tidak Ditemukan!
        </h2>
        <Link
          href="/mata-kuliah"
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          ← Kembali ke Direktori Mata Kuliah
        </Link>
      </div>
    );
  }

  return (
    <main
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "32px 20px" }}
    >
      <div style={{ marginBottom: "24px" }}>
        <Link
          href="/mata-kuliah"
          style={{
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          ← Kembali ke Direktori
        </Link>
      </div>

      <h1 style={{ color: "#0f172a", fontSize: "26px", marginBottom: "8px" }}>
        Daftar Mata Kuliah: {dataProdi.prodi}
      </h1>
      <p style={{ color: "#475569", marginBottom: "28px", fontSize: "15px" }}>
        Berikut adalah daftar mata kuliah yang akan dipelajari pada program
        studi ini.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {dataProdi.matkul.map((mk, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              border: "1px solid #cbd5e1",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Badge SKS */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#f1f5f9",
                    color: "#475569",
                    padding: "2px 8px",
                    borderRadius: "6px",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  Semester {mk.semester}
                </span>
                <span
                  style={{
                    backgroundColor: "#dbeafe",
                    color: "#1e40af",
                    padding: "2px 8px",
                    borderRadius: "6px",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  {mk.sks} SKS
                </span>
              </div>

              {/* Nama Mata Kuliah */}
              <h3
                style={{
                  margin: "0 0 12px 0",
                  color: "#0f172a",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {mk.nama}
              </h3>
            </div>

            {/* Informasi Tambahan (Dosen & Sifat) */}
            <div
              style={{
                borderTop: "1px solid #f1f5f9",
                paddingTop: "12px",
                fontSize: "13px",
                color: "#475569",
              }}
            >
              <p style={{ margin: "2px 0" }}>
                👨‍🏫 <strong>Dosen:</strong> {mk.dosen}
              </p>
              <p style={{ margin: "2px 0" }}>
                📌 <strong>Sifat:</strong> {mk.sifat}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
