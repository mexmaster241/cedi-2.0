import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  User: a
    .model({
      email: a.string().required(),
      givenName: a.string().required(),
      familyName: a.string().required(),
      clabe: a.string(),
      balance: a.float().default(0),
      lastLogin: a.datetime(),
    })
    .authorization((rules) => [
      // Allow authenticated users to read and update their own records
      // rules.owner().to(['read', 'update']),
      // Allow unauthenticated creation of new users
      rules.publicApiKey().to(['create']),
    ]),
});


export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
      defaultAuthorizationMode: 'apiKey',
      apiKeyAuthorizationMode: { 
          expiresInDays: 30 
      }
  }
});