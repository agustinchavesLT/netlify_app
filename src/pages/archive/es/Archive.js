import React from 'react';

function ArchiveEs() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <div className="page archive-page">
      <h2>Archivo (Versión en Español)</h2>
      <p>Esta es la versión en español de la página de archivo.</p>
      <p>Ruta actual: <strong>{path}</strong></p>
      <p>Si ves esta página, la regla de idioma funcionó correctamente.</p>
    </div>
  );
}

export default ArchiveEs;
