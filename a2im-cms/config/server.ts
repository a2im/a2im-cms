export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  app: {
    keys: ['APP_KEY1', 'APP_KEY2', 'APP_KEY3', 'APP_KEY4'],
  },
});
