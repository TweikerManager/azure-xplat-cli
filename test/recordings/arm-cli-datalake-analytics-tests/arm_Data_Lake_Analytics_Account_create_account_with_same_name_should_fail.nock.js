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
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadla6956/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6971?api-version=2016-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeAnalytics/accounts/xplattestadla6971' under resource group 'xplattestadla6956' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b785b920-65ab-44e0-98a7-b8d91cd15098',
  'x-ms-correlation-request-id': 'b785b920-65ab-44e0-98a7-b8d91cd15098',
  'x-ms-routing-request-id': 'WESTUS2:20161202T005103Z:b785b920-65ab-44e0-98a7-b8d91cd15098',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 00:51:02 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadla6956/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6971?api-version=2016-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeAnalytics/accounts/xplattestadla6971' under resource group 'xplattestadla6956' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b785b920-65ab-44e0-98a7-b8d91cd15098',
  'x-ms-correlation-request-id': 'b785b920-65ab-44e0-98a7-b8d91cd15098',
  'x-ms-routing-request-id': 'WESTUS2:20161202T005103Z:b785b920-65ab-44e0-98a7-b8d91cd15098',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 00:51:02 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadla6956/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6971?api-version=2016-11-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name belongs to another resource.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '94',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'f77c504a-c271-4981-b49b-342d7a1b5202',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '08b1f2f8-1a61-47d2-b8f8-3a5f5441533d',
  'x-ms-routing-request-id': 'WESTUS2:20161202T005105Z:08b1f2f8-1a61-47d2-b8f8-3a5f5441533d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 00:51:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadla6956/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6971?api-version=2016-11-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name belongs to another resource.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '94',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'f77c504a-c271-4981-b49b-342d7a1b5202',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '08b1f2f8-1a61-47d2-b8f8-3a5f5441533d',
  'x-ms-routing-request-id': 'WESTUS2:20161202T005105Z:08b1f2f8-1a61-47d2-b8f8-3a5f5441533d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 00:51:05 GMT',
  connection: 'close' });
 return result; }]];