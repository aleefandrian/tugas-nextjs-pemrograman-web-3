import Link from "next/link";

export default function MataKuliahLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: "24px", minHeight: "65vh" }}>
      {/* Sidebar Khusus Area Mata Kuliah */}
      <aside
        style={{
          width: "220px",
          background: "#f0f9ff",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #bae6fd",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#1e3a8a" }}>
          📚 Daftar Mata Kuliah
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: "10px",
          }}
        >
          <li>
            <Link href="/mata-kuliah/TI2026">TI2026 - Teknologi Informasi</Link>
          </li>
          <li>
            <Link href="/mata-kuliah/MEK2026">MEK2026 - Mekatronika</Link>
          </li>
          <li>
            <Link href="/mata-kuliah/BDJ2026">
              BDJ2026 - Bisnis Digital & Bahasa Jepang
            </Link>
          </li>
        </ul>
      </aside>

      {/* Area Konten Dinamis milik Mata Kuliah */}
      <section
        style={{
          flex: 1,
          background: "white",
          padding: "24px",
          borderRadius: "10px",
          border: "1px solid #cbd5e1",
        }}
      >
        {children}
      </section>
    </div>
  );
}
