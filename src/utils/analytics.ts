/**
 * Solène Analytics & Event Tracking Helper
 * Integrates cleanly with Google Analytics (gtag) and Meta Pixel (fbq) if configured in window.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type TrackEvent =
  | 'whatsapp_click'
  | 'call_click'
  | 'book_consultation_click'
  | 'google_maps_click'
  | 'service_enquiry'
  | 'form_submission'
  | 'filter_services'
  | 'read_article'
  | 'open_patient_portal';

export function trackClinicEvent(event: TrackEvent, data?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  // Log in development console
  if (process.env.NODE_ENV !== 'production') {
    // Quiet debug trace
    console.debug(`[Solène Analytics] Event: ${event}`, data);
  }

  // Google Analytics Hook
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, data);
  }

  // Meta Pixel Hook
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, data);
  }
}
