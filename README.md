# Humo Latino · Catálogo Web Oficial

> *"Sin humo no hay luces"* — Plataforma web estática (SPA) para catálogo de iluminación profesional, cabezas móviles, láseres, pares LED, blinders y máquinas de humo para eventos y discotecas en Colombia.

---

## 📁 Estructura del Proyecto

El proyecto sigue una arquitectura estandarizada para aplicaciones web frontend (*Vanilla Web*):

```text
humo-latino-web/
├── .gitignore              # Archivos y carpetas ignorados por Git
├── .htaccess               # Configuración Apache/cPanel (HTTPS, compresión Gzip, caché)
├── 404.html                # Enrutador fallback para GitHub Pages / servidores estáticos
├── index.html              # Punto de entrada HTML5 y estructura base
├── README.md               # Documentación del proyecto
└── assets/                 # Recursos estáticos organizados por tipo
    ├── css/
    │   └── style.css       # Hojas de estilo globales, variables de color y diseño responsive
    ├── js/
    │   ├── app.js          # Lógica de la SPA, enrutador por hash, buscador y filtros
    │   └── data.js         # Base de datos de productos, categorías y marcas
    └── img/
        ├── logo-hero.png        # Logo versión Hero
        ├── logo-humo-latino.png # Logo oficial de marca
        └── qr-instagram.png     # Código QR de Instagram para soporte/redes
```

---

## ⚡ Tecnologías Utilizadas

* **HTML5 Semántico:** Marcado optimizado con etiquetas OpenGraph para previsualización en WhatsApp y redes sociales.
* **CSS3 Moderno:** Variables nativas (`var(--...)`), CSS Grid, Flexbox y diseño 100% responsive (móvil, tablet y escritorio).
* **JavaScript ES6+ (Vanilla):** Sin librerías pesadas ni dependencias externas. Carga ultrarrápida y mantenimiento sencillo.
* **Enrutamiento por Hash:** URLs amigables (`#/catalogo`, `#/producto/:id`, `#/nosotros`) sin requerir servidor backend.

---

## 🚀 Cómo Ejecutar en Local

No necesitas instalar Node.js ni herramientas complejas. Puedes levantar un servidor local con Python:

```bash
# En la raíz del proyecto
python3 -m http.server 8080
```

Abre en tu navegador:
```
http://localhost:8080
```

---

## 📦 Despliegue en Servidores

### Opción A: cPanel (Hosting compartido)
1. Comprime los archivos en un `.zip`:
   ```bash
   zip -r humo-latino-web.zip index.html 404.html assets/ .htaccess
   ```
2. Sube el `.zip` a `public_html/` en el Administrador de Archivos de cPanel.
3. Extrae el archivo y comprueba que `index.html` quede en la raíz de `public_html/`.

### Opción B: GitHub Pages
1. Ve a **Settings** > **Pages** en tu repositorio de GitHub.
2. Selecciona la rama `main` y la carpeta `/ (root)`.
3. Haz clic en **Save**.

---

## 🛠️ Mantenimiento del Catálogo

Para agregar nuevos productos o editar precios, abre [`assets/js/data.js`](assets/js/data.js) y agrega o modifica los objetos dentro del arreglo `PRODUCTS`:

```javascript
{
  "cod": 7963,
  "categoria": "LASER",
  "categoria_nombre": "Láser",
  "categoria_slug": "laser",
  "marca": "PRO DJ LIGHTING",
  "marca_slug": "pro-dj-lighting",
  "modelo": "PL5000 RGB",
  "features": [
    "Tipo: Láser de animación RGB",
    "Potencia: 5W",
    "Modos de control: Sonido, Automático, DMX, Ilda"
  ],
  "precio": 1855000
}
```

Para asociar una fotografía real al producto, añade su código al mapa `PRODUCT_IMAGES` en [`assets/js/app.js`](assets/js/app.js).
