# SWP

Sitio corporativo de SWP, una marca tecnológica y comercial con dos líneas: SWP Store y SWP Business. Construido con Next.js App Router, React, Tailwind CSS, shadcn/ui y Sass.

Los componentes compartidos de shadcn/ui están en `app/components/ui`; la configuración del generador se encuentra en `components.json`. El menú móvil usa `Sheet` y las acciones principales usan `Button`.

## Requisitos

- Node.js 20 o superior
- pnpm

## Instalación

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Configuración

Define estas variables en `.env.local` antes de publicar:

- `NEXT_PUBLIC_SITE_URL`: URL pública canónica, por ejemplo `https://tu-dominio.pe`. Sin esta variable, el sitemap no publica URLs.
- `NEXT_PUBLIC_SWP_CONTACT_EMAIL`: correo corporativo que recibirá los mensajes iniciados desde el sitio. Si se deja vacío, no se muestra un enlace de correo y la página indica que el canal no está configurado.

No uses datos personales ni publiques claves privadas en variables `NEXT_PUBLIC_*`. Las variables heredadas de correo o Telegram solo son necesarias para las rutas API existentes, no para la portada corporativa.

## Comandos

```bash
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Rutas

- `/`: portada corporativa y líneas SWP Store / SWP Business.
- `/privacidad`: información de privacidad del sitio.
- `/terminos`: términos de uso.
- `/robots.txt` y `/sitemap.xml`: recursos SEO de Next.js.

Los textos legales son una base informativa; deben revisarse y completarse según el operador del sitio, la infraestructura contratada y las obligaciones aplicables antes de la publicación definitiva.
