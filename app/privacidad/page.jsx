export const metadata = {
  title: "Política de privacidad",
  description: "Información sobre el tratamiento de datos en el sitio web de SWP.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#37658b] dark:text-[#8fb2d1]">Información legal</p>
      <h1 className="mt-4 text-4xl font-medium tracking-[-0.025em] text-[#171c25] dark:text-white">Política de privacidad</h1>
      <p className="mt-6 text-sm leading-7 text-[#596575] dark:text-[#b8c5d3]">Este sitio presenta información institucional sobre SWP y sus líneas SWP Store y SWP Business. En esta versión no hay formularios propios que soliciten datos personales.</p>
      <h2 className="mt-10 text-xl font-semibold text-[#171c25] dark:text-white">Contacto</h2>
      <p className="mt-3 text-sm leading-7 text-[#596575] dark:text-[#b8c5d3]">Si el correo corporativo se configura en el sitio, los mensajes se enviarán desde la aplicación de correo elegida por la persona visitante. El sitio no almacena esos mensajes. El proveedor de alojamiento podría procesar registros técnicos necesarios para operar y proteger el servicio; sus detalles dependen de la infraestructura contratada.</p>
      <h2 className="mt-8 text-xl font-semibold text-[#171c25] dark:text-white">Cambios y consultas</h2>
      <p className="mt-3 text-sm leading-7 text-[#596575] dark:text-[#b8c5d3]">Esta información deberá revisarse y completarse antes de publicar el sitio, de acuerdo con el operador del servicio, la infraestructura y las obligaciones aplicables. No se publica un correo de contacto mientras SWP no configure uno.</p>
    </article>
  );
}