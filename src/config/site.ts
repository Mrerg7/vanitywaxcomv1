export const SITE = {
  name: 'VanityWax.com',
  title: 'VanityWax.com • Premium Domain for Sale | Luxury Body Waxing & Hair Removal Brand',
  description:
    'VanityWax.com — The definitive premium .com domain for the luxury body waxing, sugaring, laser hair removal, and skincare brand. Strategic acquisition available.',
  url: 'https://vanitywax.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Arizona',
  googleSiteVerification: 'QYOPBvUI_iAofl6T4sPpcvn1bHrQhLUPIX1Yh207Xfc',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'f12a20f9-6389-4268-4246-f2f8d67ee600',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('VanityWax.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring VanityWax.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
