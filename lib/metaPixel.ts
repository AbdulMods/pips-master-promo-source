// Meta Pixel tracking functions

declare global {
  interface Window {
    fbq: any
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters)
  }
}

// Predefined tracking events for your forex business
export const trackTelegramClick = () => {
  trackEvent("Contact", {
    content_name: "Telegram Channel Join",
    content_category: "Social Media",
  })
}

export const trackSignalInterest = () => {
  trackEvent("ViewContent", {
    content_name: "Trading Signals",
    content_category: "Forex Signals",
  })
}

export const trackPricingView = () => {
  trackEvent("ViewContent", {
    content_name: "Pricing Plans",
    content_category: "Subscription",
  })
}

export const trackAccountManagementInterest = () => {
  trackEvent("Lead", {
    content_name: "Account Management",
    content_category: "Premium Service",
    value: 1000, // Minimum account value
    currency: "USD",
  })
}

export const trackFAQEngagement = () => {
  trackEvent("ViewContent", {
    content_name: "FAQ Section",
    content_category: "Support",
  })
}

export const trackTestimonialView = () => {
  trackEvent("ViewContent", {
    content_name: "Success Stories",
    content_category: "Social Proof",
  })
}
