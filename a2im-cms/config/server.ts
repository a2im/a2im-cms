export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT'),
  url: 'https://cms.a2im.org',
  app: {
    keys: ['APP_KEY1', 'APP_KEY2', 'APP_KEY3', 'APP_KEY4'],
  },
});
