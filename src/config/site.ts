export const SITE = {
  name: 'VanityWax.com',
  title: 'VanityWax.com | Premium Domain for Sale | Luxury Body Waxing & Hair Removal Brand',
  description:
    'VanityWax.com for sale — premium .com for luxury body waxing, Brazilian wax, laser hair removal & skincare. $85,000 USD. Secure Escrow.com transfer. Inquire now — response within 24 hours.',
  url: 'https://vanitywax.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Arizona',
  price: '85000',
  priceLabel: '$85,000',
  googleSiteVerification: 'QYOPBvUI_iAofl6T4sPpcvn1bHrQhLUPIX1Yh207Xfc',
  keywords:
    'vanitywax.com for sale, buy .com domains, premium domain names, body waxing domain, Brazilian wax domain, laser hair removal domain, sugaring domain, skincare brand domain, investment domains, domain marketplace, luxury beauty domain',
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

export const OFFER_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Offer for VanityWax.com — [Your Offer]')}&body=${encodeURIComponent("Hi,\n\nI'd like to make an offer for VanityWax.com.\n\nOffer amount (USD): \nIntended use: \nName: \n\nThank you!")}`;

export const BUY_NOW_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Buy Now — VanityWax.com via Escrow')}&body=${encodeURIComponent("Hi,\n\nI'd like to proceed with a secure Escrow.com transaction for VanityWax.com. Please send next steps.\n\nName: \n")}`;

export const AGENT_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Questions about VanityWax.com')}&body=${encodeURIComponent("Hi,\n\nI have a question about VanityWax.com: \n\nName: \n")}`;

export const EXIT_INTENT_MAILTO = (email: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent('First Refusal Request — VanityWax.com')}&body=${encodeURIComponent(`Hi,\n\nPlease add me to the first-refusal list for VanityWax.com.\n\nMy email: ${email}\n\nThank you!`)}`;
