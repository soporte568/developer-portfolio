const contactEmail = process.env.NEXT_PUBLIC_SWP_CONTACT_EMAIL?.trim() ?? "";

export const swpConfig = {
  name: "SWP",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "",
  contactEmail,
  contactHref: contactEmail ? `mailto:${contactEmail}` : "#canal-contacto",
};