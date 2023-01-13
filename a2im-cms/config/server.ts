export default ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),

  app: {
    keys: ['APP_KEY1', 'APP_KEY2', 'APP_KEY3', 'APP_KEY4'],
  },
});
