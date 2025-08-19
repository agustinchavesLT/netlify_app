import React from 'react';

function ArchiveEs() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <div className="page archive-page">
      <h2>Archivo (Versión en Español)</h2>
      <p>Esta es la versión en español de la página de archivo.</p>
      <p>Ruta actual: <strong>{path}</strong></p>
      <p>Si ves esta página, la regla de idioma funcionó correctamente.</p>

      <h3>Enlaces de prueba:</h3>
      <ul>
        <li><a href="/blog/2024/08/14/ejemplo">Probar redirección 1</a></li>
        <li><a href="/blog/2023/12/25/navidad">Probar redirección 2</a></li>
        <li><a href="/blog/2022/01/01/ano-nuevo">Probar redirección 3</a></li>
      </ul>
    </div>
  );
}

export default ArchiveEs;
