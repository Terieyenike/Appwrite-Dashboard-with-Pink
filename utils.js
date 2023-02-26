import { Client, Databases } from 'appwrite';

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint('http://localhost/v1') 
  .setProject('63f363c2aa5021f765cc'); 

export const getList = databases.listDocuments(
  '63f366b7d685ba509d00',
  '63f366d65864d63af238'
);
