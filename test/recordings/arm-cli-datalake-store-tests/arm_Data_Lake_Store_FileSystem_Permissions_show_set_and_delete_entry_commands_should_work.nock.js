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
  .get('/webhdfs/v1/%2F?op=MSGETACLSTATUS&api-version=2016-11-01')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"permission\":\"770\",\"stickyBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6177ecd5-af41-4be9-9e3d-d9715889ac72',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:08 GMT',
  connection: 'close',
  'content-length': '196' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=MSGETACLSTATUS&api-version=2016-11-01')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"permission\":\"770\",\"stickyBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6177ecd5-af41-4be9-9e3d-d9715889ac72',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:08 GMT',
  connection: 'close',
  'content-length': '196' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&op=MODIFYACLENTRIES&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'bd6bfa4c-8ab9-4a33-ac67-33e9936e0e06',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:07 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&op=MODIFYACLENTRIES&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'bd6bfa4c-8ab9-4a33-ac67-33e9936e0e06',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:07 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=MSGETACLSTATUS&api-version=2016-11-01')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\",\"group::rwx\",\"mask::rwx\",\"other::---\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"permission\":\"770\",\"stickyBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1a48606c-9c97-428f-9618-a3ed1261aa3d',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:08 GMT',
  connection: 'close',
  'content-length': '256' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=MSGETACLSTATUS&api-version=2016-11-01')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\",\"group::rwx\",\"mask::rwx\",\"other::---\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"permission\":\"770\",\"stickyBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1a48606c-9c97-428f-9618-a3ed1261aa3d',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:08 GMT',
  connection: 'close',
  'content-length': '256' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3A-w-&op=MODIFYACLENTRIES&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '6e25d480-8a11-4460-b730-21a82ff12791',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:09 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3A-w-&op=MODIFYACLENTRIES&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '6e25d480-8a11-4460-b730-21a82ff12791',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:09 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=MSGETACLSTATUS&api-version=2016-11-01')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:-w-\",\"group::rwx\",\"mask::rwx\",\"other::---\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"permission\":\"770\",\"stickyBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '597a4cc2-d84d-4377-aebb-5fe862b76793',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:10 GMT',
  connection: 'close',
  'content-length': '256' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=MSGETACLSTATUS&api-version=2016-11-01')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:-w-\",\"group::rwx\",\"mask::rwx\",\"other::---\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"permission\":\"770\",\"stickyBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '597a4cc2-d84d-4377-aebb-5fe862b76793',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:10 GMT',
  connection: 'close',
  'content-length': '256' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3&op=REMOVEACLENTRIES&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'e4459f61-c7a5-48bb-922e-3d38905f9a5f',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:10 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3&op=REMOVEACLENTRIES&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'e4459f61-c7a5-48bb-922e-3d38905f9a5f',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:10 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=MSGETACLSTATUS&api-version=2016-11-01')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"mask::rwx\",\"other::---\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"permission\":\"770\",\"stickyBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '617ee4f7-2dc3-4e56-b034-30b692ef68d2',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:10 GMT',
  connection: 'close',
  'content-length': '208' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=MSGETACLSTATUS&api-version=2016-11-01')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"mask::rwx\",\"other::---\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"permission\":\"770\",\"stickyBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '617ee4f7-2dc3-4e56-b034-30b692ef68d2',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:57:10 GMT',
  connection: 'close',
  'content-length': '208' });
 return result; }]];