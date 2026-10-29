export default function PengumumanKampus({ kategori, judul, tanggal, tempat, warnaBadge }) {
  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #cbd5e1',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <span style={{
          display: 'inline-block',
          padding: '4px 10px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 'bold',
          backgroundColor: warnaBadge,
        }}>
          {kategori}
        </span>

        <h3 style={{ marginTop: '12px', marginBottom: '8px', color: '#0f172a', fontSize: '16px', fontWeight: '600' }}>
          {judul}
        </h3>
      </div>

      <div style={{ fontSize: '14px', color: '#475569', marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
        <p style={{ margin: '0 0 4px 0' }}>
          <strong>📅 {tanggal}</strong>
        </p>
        {tempat && (
          <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>
            📍 {tempat}
          </p>
        )}
      </div>
    </div>
  );
}