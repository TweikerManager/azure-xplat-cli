// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01?op=MKDIRS&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c8d8bb46-0371-42a7-a32d-d96f052fef0e',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:48 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01?op=MKDIRS&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c8d8bb46-0371-42a7-a32d-d96f052fef0e',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:48 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1481162208890,\"modificationTime\":1481162208890,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cd4376d6-aa20-432d-9db3-c56c09de5ba6',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:48 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1481162208890,\"modificationTime\":1481162208890,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cd4376d6-aa20-432d-9db3-c56c09de5ba6',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:48 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3965.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/emptyfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': 'c5eae419-ed33-4493-a155-73995132a024',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:50 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3965.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/emptyfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': 'c5eae419-ed33-4493-a155-73995132a024',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:50 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162210303,\"modificationTime\":1481162210303,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c64881b8-e590-4ed1-9c3c-fd0acb233d1c',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:50 GMT',
  connection: 'close',
  'content-length': '308' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162210303,\"modificationTime\":1481162210303,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c64881b8-e590-4ed1-9c3c-fd0acb233d1c',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:50 GMT',
  connection: 'close',
  'content-length': '308' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01', '*')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3965.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/contentfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': 'e3d54d8d-8495-44c7-a1f4-c93b9f1c8f15',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:51 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01', '*')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3965.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/contentfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': 'e3d54d8d-8495-44c7-a1f4-c93b9f1c8f15',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:51 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162211495,\"modificationTime\":1481162211553,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91d949f6-70c6-4965-a11f-82600f5d78d8',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:51 GMT',
  connection: 'close',
  'content-length': '309' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162211495,\"modificationTime\":1481162211553,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91d949f6-70c6-4965-a11f-82600f5d78d8',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:51 GMT',
  connection: 'close',
  'content-length': '309' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=MSLISTSTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162211495,\"modificationTime\":1481162211553,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162210303,\"modificationTime\":1481162210303,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}]}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cead26b4-ff5e-4f80-b1da-bad654951146',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:52 GMT',
  connection: 'close',
  'content-length': '650' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=MSLISTSTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162211495,\"modificationTime\":1481162211553,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162210303,\"modificationTime\":1481162210303,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}]}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cead26b4-ff5e-4f80-b1da-bad654951146',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:52 GMT',
  connection: 'close',
  'content-length': '650' });
 return result; }]];