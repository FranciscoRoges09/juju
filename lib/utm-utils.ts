export function getUtmParameters(): URLSearchParams {
  if (typeof window === 'undefined') return new URLSearchParams();
  
  const params = new URLSearchParams(window.location.search);
  const utmParams = new URLSearchParams();
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid', 'msclkid', 'ttclid'];
  
  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) {
      utmParams.append(key, value);
    }
  });
  
  return utmParams;
}

export function saveUtmParameters(): void {
  if (typeof window === 'undefined') return;
  
  const utmParams = getUtmParameters();
  if (utmParams.toString()) {
    localStorage.setItem('utmParams', utmParams.toString());
    console.log("[v0] UTM parameters saved:", utmParams.toString());
  }
}

export function getStoredUtmParameters(): string {
  if (typeof window === 'undefined') return '';
  
  return localStorage.getItem('utmParams') || '';
}

export function buildUrlWithUtm(baseUrl: string): string {
  const storedParams = getStoredUtmParameters();
  
  if (storedParams) {
    return `${baseUrl}?${storedParams}`;
  }
  
  return baseUrl;
}

export function trackEvent(eventType: string, data?: Record<string, any>): void {
  if (typeof window === 'undefined') return;
  
  if (window.utmify && window.utmify.track) {
    window.utmify.track(eventType, {
      ...data,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
    console.log("[v0] Event tracked:", eventType, data);
  }
}
