// ─────────────────────────────────────────────
// Blog post registry.
// Each post is a .jsx file in this folder that exports:
//   - meta: { slug, title, dek, publishDate, updatedDate, author, tags, readingMinutes, seo* }
//   - Body: () => JSX
//   - faq: [{ q, a }, ...] (used for FAQPage JSON-LD on the detail page)
// Register each post below in the `modules` map.
// ─────────────────────────────────────────────

import * as rsuTaxIndia from './rsu-tax-india';
import * as scheduleFaRsu from './schedule-fa-rsu';
import * as transferRsusToIndia from './transfer-rsus-to-india';
import * as concentrationRiskRsu from './concentration-risk-rsu';
import * as fxRepatriationRsuIndia from './fx-repatriation-rsu-india';
import * as esppIndiaTax from './espp-india-tax';
import * as vestCycleLtcgStrategy from './vest-cycle-ltcg-strategy';
import * as form67Rsu from './form-67-rsu';
import * as choosingIndianUsEquityPlatform from './choosing-indian-us-equity-platform';
import * as budgetRsuIndia from './budget-rsu-india';

const modules = {
  'rsu-tax-india': rsuTaxIndia,
  'schedule-fa-rsu': scheduleFaRsu,
  'transfer-rsus-to-india': transferRsusToIndia,
  'concentration-risk-rsu': concentrationRiskRsu,
  'fx-repatriation-rsu-india': fxRepatriationRsuIndia,
  'espp-india-tax': esppIndiaTax,
  'vest-cycle-ltcg-strategy': vestCycleLtcgStrategy,
  'form-67-rsu': form67Rsu,
  'choosing-indian-us-equity-platform': choosingIndianUsEquityPlatform,
  'budget-rsu-india': budgetRsuIndia,
};

// Sorted newest first by publishDate (ISO yyyy-mm-dd)
export const posts = Object.values(modules)
  .map((m) => m.meta)
  .sort((a, b) => (b.publishDate || '').localeCompare(a.publishDate || ''));

// Full module (meta + Body + faq) for the detail page
export function getPost(slug) {
  return modules[slug] || null;
}

// Just meta — for sitemap, generateMetadata, listing
export function getPostMeta(slug) {
  return modules[slug]?.meta || null;
}
