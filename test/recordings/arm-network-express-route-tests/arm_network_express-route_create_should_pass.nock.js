// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGExpressRoute?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGExpressRoute' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-request-id': '0defe696-13d5-4c99-b1e2-97327146f678',
  'x-ms-correlation-request-id': '0defe696-13d5-4c99-b1e2-97327146f678',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T084953Z:0defe696-13d5-4c99-b1e2-97327146f678',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 30 Dec 2015 08:49:53 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGExpressRoute?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGExpressRoute' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-request-id': '0defe696-13d5-4c99-b1e2-97327146f678',
  'x-ms-correlation-request-id': '0defe696-13d5-4c99-b1e2-97327146f678',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T084953Z:0defe696-13d5-4c99-b1e2-97327146f678',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 30 Dec 2015 08:49:53 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGExpressRoute?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute\",\"name\":\"xplatTestGExpressRoute\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '207',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-request-id': 'be3a8d47-3b8a-42be-aa1d-c15ed5fb799c',
  'x-ms-correlation-request-id': 'be3a8d47-3b8a-42be-aa1d-c15ed5fb799c',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T084956Z:be3a8d47-3b8a-42be-aa1d-c15ed5fb799c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 30 Dec 2015 08:49:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGExpressRoute?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute\",\"name\":\"xplatTestGExpressRoute\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '207',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-request-id': 'be3a8d47-3b8a-42be-aa1d-c15ed5fb799c',
  'x-ms-correlation-request-id': 'be3a8d47-3b8a-42be-aa1d-c15ed5fb799c',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T084956Z:be3a8d47-3b8a-42be-aa1d-c15ed5fb799c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 30 Dec 2015 08:49:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/xplatExpressRoute' under resource group 'xplatTestGExpressRoute' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c7fa4670-3a2c-4517-ae18-6952add7103e',
  'x-ms-correlation-request-id': 'c7fa4670-3a2c-4517-ae18-6952add7103e',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T084959Z:c7fa4670-3a2c-4517-ae18-6952add7103e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 30 Dec 2015 08:49:58 GMT',
  connection: 'close',
  'content-length': '182' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/xplatExpressRoute' under resource group 'xplatTestGExpressRoute' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c7fa4670-3a2c-4517-ae18-6952add7103e',
  'x-ms-correlation-request-id': 'c7fa4670-3a2c-4517-ae18-6952add7103e',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T084959Z:c7fa4670-3a2c-4517-ae18-6952add7103e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 30 Dec 2015 08:49:58 GMT',
  connection: 'close',
  'content-length': '182' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatExpressRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute\",\r\n  \"etag\": \"W/\\\"7bc3f296-3d9e-45a9-9751-0997e6456f17\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"0a2a95d5-3c84-4e37-b4b6-3f23ee283fd7\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '974',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6f09935d-6f09-4257-ac77-1a27066604da',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/6f09935d-6f09-4257-ac77-1a27066604da?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '64a28c0d-fc8c-4c7d-b8e9-47d3b69e2e2f',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T085005Z:64a28c0d-fc8c-4c7d-b8e9-47d3b69e2e2f',
  date: 'Wed, 30 Dec 2015 08:50:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatExpressRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute\",\r\n  \"etag\": \"W/\\\"7bc3f296-3d9e-45a9-9751-0997e6456f17\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"0a2a95d5-3c84-4e37-b4b6-3f23ee283fd7\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '974',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6f09935d-6f09-4257-ac77-1a27066604da',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/6f09935d-6f09-4257-ac77-1a27066604da?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '64a28c0d-fc8c-4c7d-b8e9-47d3b69e2e2f',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T085005Z:64a28c0d-fc8c-4c7d-b8e9-47d3b69e2e2f',
  date: 'Wed, 30 Dec 2015 08:50:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/6f09935d-6f09-4257-ac77-1a27066604da?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ded42182-6049-4a43-b0d7-62b52a027a1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': 'efcae99b-345c-47a1-86d9-2fe65c1cd3f1',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T085017Z:efcae99b-345c-47a1-86d9-2fe65c1cd3f1',
  date: 'Wed, 30 Dec 2015 08:50:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/6f09935d-6f09-4257-ac77-1a27066604da?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ded42182-6049-4a43-b0d7-62b52a027a1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': 'efcae99b-345c-47a1-86d9-2fe65c1cd3f1',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T085017Z:efcae99b-345c-47a1-86d9-2fe65c1cd3f1',
  date: 'Wed, 30 Dec 2015 08:50:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/6f09935d-6f09-4257-ac77-1a27066604da?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ab5467c9-db1e-412a-a0fb-133e91238b07',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14943',
  'x-ms-correlation-request-id': '67531183-e341-497a-9c2c-e26ed849bb24',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T085048Z:67531183-e341-497a-9c2c-e26ed849bb24',
  date: 'Wed, 30 Dec 2015 08:50:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/6f09935d-6f09-4257-ac77-1a27066604da?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ab5467c9-db1e-412a-a0fb-133e91238b07',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14943',
  'x-ms-correlation-request-id': '67531183-e341-497a-9c2c-e26ed849bb24',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T085048Z:67531183-e341-497a-9c2c-e26ed849bb24',
  date: 'Wed, 30 Dec 2015 08:50:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute\",\r\n  \"etag\": \"W/\\\"da206451-8f3e-4402-bc21-e95fecfc7a57\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"0a2a95d5-3c84-4e37-b4b6-3f23ee283fd7\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"f7d3a462-a717-4cd2-a5de-ea43ecd6c109\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '974',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd8808599-8535-4496-9740-7b6111bac016',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14946',
  'x-ms-correlation-request-id': '53ee237e-1a60-42ef-8381-69fb0504c714',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T085050Z:53ee237e-1a60-42ef-8381-69fb0504c714',
  date: 'Wed, 30 Dec 2015 08:50:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGExpressRoute/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute\",\r\n  \"etag\": \"W/\\\"da206451-8f3e-4402-bc21-e95fecfc7a57\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"0a2a95d5-3c84-4e37-b4b6-3f23ee283fd7\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"f7d3a462-a717-4cd2-a5de-ea43ecd6c109\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '974',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd8808599-8535-4496-9740-7b6111bac016',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14946',
  'x-ms-correlation-request-id': '53ee237e-1a60-42ef-8381-69fb0504c714',
  'x-ms-routing-request-id': 'WESTINDIA:20151230T085050Z:53ee237e-1a60-42ef-8381-69fb0504c714',
  date: 'Wed, 30 Dec 2015 08:50:49 GMT',
  connection: 'close' });
 return result; }]];
