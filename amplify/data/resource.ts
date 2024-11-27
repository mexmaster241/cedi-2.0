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
    .authorization((allow) => [
      allow.custom().to(['update', 'read', 'create']),
      allow.owner().to(['create', 'read'])
    ]),
});


export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
