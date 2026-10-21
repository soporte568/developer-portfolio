export const metadata = {
  title: "Términos y condiciones",
  description: "Condiciones generales de uso del sitio web de SWP.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#37658b] dark:text-[#8fb2d1]">Información legal</p>
      <h1 className="mt-4 text-4xl font-medium tracking-[-0.025em] text-[#171c25] dark:text-white">Términos y condiciones</h1>
      <p className="mt-6 text-sm leading-7 text-[#596575] dark:text-[#b8c5d3]">Este sitio ofrece información general sobre SWP, SWP Store y SWP Business. Su contenido no constituye una oferta contractual, garantía de disponibilidad ni promesa de resultados comerciales.</p>
      <h2 className="mt-10 text-xl font-semibold text-[#171c25] dark:text-white">Uso del sitio</h2>
      <p className="mt-3 text-sm leading-7 text-[#596575] dark:text-[#b8c5d3]">La persona visitante se compromete a utilizar el sitio conforme a la ley y a no interferir con su funcionamiento. Los contenidos pueden actualizarse o cambiarse para reflejar la evolución del proyecto.</p>
      <h2 className="mt-8 text-xl font-semibold text-[#171c25] dark:text-white">Propiedad intelectual</h2>
      <p className="mt-3 text-sm leading-7 text-[#596575] dark:text-[#b8c5d3]">Los nombres y materiales identificados como SWP pertenecen a sus respectivos titulares. No se concede una licencia de uso sobre ellos por navegar este sitio.</p>
      <p className="mt-8 border-t border-[#dce1e7] pt-6 text-xs leading-6 text-[#687586] dark:border-white/10 dark:text-[#91a1b3]">Estos términos son una base informativa y deben ser revisados por asesoría legal antes de su publicación definitiva.</p>
    </article>
  );
}