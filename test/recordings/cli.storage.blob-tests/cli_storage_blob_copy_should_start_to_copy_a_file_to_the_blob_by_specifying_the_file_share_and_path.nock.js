// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .get('/testblobcopyshare?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:42:13 GMT',
  etag: '"0x8D40DC1CA3FCF72"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '474297a2-001a-0027-75aa-3f0c4e000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:42:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .get('/testblobcopyshare?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:42:13 GMT',
  etag: '"0x8D40DC1CA3FCF72"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '474297a2-001a-0027-75aa-3f0c4e000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:42:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/testblobcopydir/copytoblob.tmp.txt')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:42:22 GMT',
  etag: '"0x8D40DC1CF64FBE4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5f6f5ff1-0001-0044-30aa-3f4a6b000000',
  'x-ms-version': '2015-12-11',
  'x-ms-copy-id': 'cd1152e6-2161-4fc1-b7f3-f39ea75a470d',
  'x-ms-copy-status': 'pending',
  date: 'Wed, 16 Nov 2016 01:42:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/testblobcopydir/copytoblob.tmp.txt')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:42:22 GMT',
  etag: '"0x8D40DC1CF64FBE4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5f6f5ff1-0001-0044-30aa-3f4a6b000000',
  'x-ms-version': '2015-12-11',
  'x-ms-copy-id': 'cd1152e6-2161-4fc1-b7f3-f39ea75a470d',
  'x-ms-copy-status': 'pending',
  date: 'Wed, 16 Nov 2016 01:42:21 GMT',
  connection: 'close' });
 return result; }]];