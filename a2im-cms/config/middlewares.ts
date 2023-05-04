export default ({ env }) => [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          'script-src': ["'self'", "'unsafe-inline'"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "cms.a2im.org",
            "strapi.io",
            `${env('AWS_BUCKET_NAME')}.s3.amazonaws.com`
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
