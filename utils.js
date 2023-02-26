import { Client, Databases } from 'appwrite';

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('63fb62b636399892cf6e');

export const getList = databases.listDocuments(
  '63fb634be6642fdbb096',
  '63fb63723fa78d888204'
);
