export default ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
                region: env('AWS_REGION'),
                params: {
                    Bucket: env('AWS_BUCKET_NAME'),
                },
            },
        },
    },
    email: {
        config: {
          provider: 'sendgrid',
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: 'support@a2im.org',
            defaultReplyTo: 'support@a2im.org',
            testAddress: 'support@a2im.org',
        },
      },
    },
    graphql: {
      endpoint: '/graphql',
      enabled: true,
      shadowCRUD: true,
      config: {
        playgroundAlways: false,
        defaultLimit: 10,
        maxLimit: 100,
        apolloServer: {
          tracing: false,
          introspection: false,
        },
      }
    },
    'import-export-entries': {
      enabled: true,
    },
  });