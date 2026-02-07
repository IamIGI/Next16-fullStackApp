import posthog from 'posthog-js';

console.log('debug: ', process.env.NEXT_PUBLIC_POSTHOG_KEY);

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: '2025-11-30',
  capture_exceptions: true,
  debug: process.env.NODE_ENV === 'development',
});
