// Analytics integration point
// Add your analytics provider here (e.g., PostHog, Plausible, GA4).
// Keep this file as the single place for all tracking calls.

export function trackEvent(_name: string, _properties?: Record<string, unknown>): void {
  void _name;
  void _properties;
  // TODO: Implement when analytics infrastructure is configured.
  // Example: posthog.capture(name, properties);
}

export function identifyUser(_userId: string, _traits?: Record<string, unknown>): void {
  void _userId;
  void _traits;
  // TODO: Implement when analytics infrastructure is configured.
}

export function resetUser(): void {
  // TODO: Implement when analytics infrastructure is configured.
}
