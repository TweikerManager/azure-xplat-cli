// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '1855',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.28 (rd_rdfe_stable.130418-1618) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '5a998213c9954598b208ebd84adf1925',
  date: 'Wed, 24 Apr 2013 20:23:49 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>tjanczuk4.azurewebsites.net</a:string><a:string>tjanczuk4.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>tjanczuk4.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>tjanczuk4.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>tjanczuk4.azurewebsites.net</a:string></HostNames><Name>tjanczuk4</Name><Owner i:nil=\"true\"/><RepositorySiteName>tjanczuk4</RepositorySiteName><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/tjanczuk4</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://tjanczuk4.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$tjanczuk4</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>7jRfcWxvrg7zfadaeitlRSMhmSsukA0GPLzbMz0YoJdhbhxQmsZn4z579f10</Value></NameValuePair></Properties></SiteProperties><State>Running</State><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>tjanczuk3.azurewebsites.net</a:string><a:string>tjanczuk3.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>tjanczuk3.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>tjanczuk3.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>tjanczuk3.azurewebsites.net</a:string></HostNames><Name>tjanczuk3</Name><Owner i:nil=\"true\"/><RepositorySiteName>tjanczuk3</RepositorySiteName><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/tjanczuk3</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://tjanczuk3.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$tjanczuk3</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>ibKmlPcPxdH40ZhA99zyvDsGGpqHRzpLih91uAJ4489NHarH06KdWHuXfT0c</Value></NameValuePair></Properties></SiteProperties><State>Running</State><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests1.azurewebsites.net</a:string><a:string>clitests1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests1.azurewebsites.net</a:string></HostNames><Name>clitests1</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitests1</RepositorySiteName><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/clitests1</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://clitests1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$clitests1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>t4cMqe68pPrW7bWXYkTDv3qbczh9kHXXiiBllzhkXRMQ17jkzgN6AT5ByuEl</Value></NameValuePair></Properties></SiteProperties><State>Running</State><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '5658',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.28 (rd_rdfe_stable.130418-1618) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '416d10772a1c4a2c82d469ec048c322e',
  date: 'Wed, 24 Apr 2013 20:23:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/northeuropewebspace/sites/?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>testnewasd.azurewebsites.net</a:string><a:string>testnewasd.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>testnewasd.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>testnewasd.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>testnewasd.azurewebsites.net</a:string></HostNames><Name>testnewasd</Name><Owner i:nil=\"true\"/><RepositorySiteName>testnewasd</RepositorySiteName><SSLCertificates/><SelfLink>https://waws-prod-db3-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/northeuropewebspace/sites/testnewasd</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://testnewasd.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$testnewasd</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>nx3yrNitt8r8JLeL5eg8PTKMECAKKLYoQPTF0lM60L3cslkSC6M9t1wSA3Mp</Value></NameValuePair></Properties></SiteProperties><State>Running</State><UsageState>Normal</UsageState><WebSpace>northeuropewebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '1984',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.28 (rd_rdfe_stable.130418-1618) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '558ae52c73284ef8a76a24fe348205e6',
  date: 'Wed, 24 Apr 2013 20:23:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/westeuropewebspace/sites/?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.28 (rd_rdfe_stable.130418-1618) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '6cfdc02b5c0c4d8d886dc1c8f3ea3ef9',
  date: 'Wed, 24 Apr 2013 20:23:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/westuswebspace/sites/?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>onesdkdotnetwebsite01.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>onesdkdotnetwebsite01.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>onesdkdotnetwebsite01.azurewebsites.net</a:string></HostNames><Name>onesdkdotnetwebsite01</Name><Owner i:nil=\"true\"/><RepositorySiteName i:nil=\"true\"/><SSLCertificates/><SelfLink>https://waws-prod-bay-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/westuswebspace/sites/onesdkdotnetwebsite01</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value i:nil=\"true\"/></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$onesdkdotnetwebsite01</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>wShdsniE3xMQwyxlTEoHgLnqsbM2rlgzTiv4Mhu3e4yAj2DcWK1PiGyeWCvR</Value></NameValuePair></Properties></SiteProperties><State>Running</State><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>onesdkwebsitestest01.azurewebsites.net</a:string><a:string>onesdkwebsitestest01.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>onesdkwebsitestest01.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>onesdkwebsitestest01.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>onesdkwebsitestest01.azurewebsites.net</a:string></HostNames><Name>onesdkwebsitestest01</Name><Owner i:nil=\"true\"/><RepositorySiteName>onesdkwebsitestest01</RepositorySiteName><SSLCertificates/><SelfLink>https://waws-prod-bay-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/westuswebspace/sites/onesdkwebsitestest01</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://onesdkwebsitestest01.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$onesdkwebsitestest01</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>9ut1QPYgCQdLuZwDEk8kcM4LhthF0qSvBfeMlSFht3RMkedlfkKZJMwjeccS</Value></NameValuePair></Properties></SiteProperties><State>Running</State><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>chshete-mojoPortal2.azurewebsites.net</a:string><a:string>chshete-mojoportal2.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>chshete-mojoPortal2.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>chshete-mojoportal2.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>chshete-mojoportal2.azurewebsites.net</a:string></HostNames><Name>chshete-mojoPortal2</Name><Owner i:nil=\"true\"/><RepositorySiteName>chshete-mojoPortal2</RepositorySiteName><SSLCertificates/><SelfLink>https://waws-prod-bay-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/westuswebspace/sites/chshete-mojoPortal2</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://chshete-mojoportal2.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$chshete-mojoPortal2</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>7QWhHy65afajARgZwtqLvmCGrP2P5YsCQAJayggCW62sAyAFhgmzJEpFG1qY</Value></NameValuePair></Properties></SiteProperties><State>Running</State><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '5613',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.28 (rd_rdfe_stable.130418-1618) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '4b6b185feb3646a4b7b6367ef5f863bc',
  date: 'Wed, 24 Apr 2013 20:23:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/clitests1?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests1.azurewebsites.net</a:string><a:string>clitests1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests1.azurewebsites.net</a:string></HostNames><Name>clitests1</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitests1</RepositorySiteName><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/clitests1</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://clitests1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$clitests1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>t4cMqe68pPrW7bWXYkTDv3qbczh9kHXXiiBllzhkXRMQ17jkzgN6AT5ByuEl</Value></NameValuePair></Properties></SiteProperties><State>Running</State><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site>", { 'cache-control': 'private',
  'content-length': '1949',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.28 (rd_rdfe_stable.130418-1618) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'cdcd370756cd4ec2b91570f2e774b518',
  date: 'Wed, 24 Apr 2013 20:23:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/clitests1/config')
  .reply(200, "<SiteConfig xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AppSettings/><ConnectionStrings/><DefaultDocuments xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>Default.htm</a:string><a:string>Default.html</a:string><a:string>Default.asp</a:string><a:string>index.htm</a:string><a:string>index.html</a:string><a:string>iisstart.htm</a:string><a:string>default.aspx</a:string><a:string>index.php</a:string><a:string>hostingstart.html</a:string></DefaultDocuments><DetailedErrorLoggingEnabled>false</DetailedErrorLoggingEnabled><DocumentRoot i:nil=\"true\"/><HandlerMappings i:nil=\"true\"/><HttpLoggingEnabled>false</HttpLoggingEnabled><Metadata/><NetFrameworkVersion>v4.0</NetFrameworkVersion><NumberOfWorkers>1</NumberOfWorkers><PhpVersion>5.3</PhpVersion><PublishingPassword>t4cMqe68pPrW7bWXYkTDv3qbczh9kHXXiiBllzhkXRMQ17jkzgN6AT5ByuEl</PublishingPassword><PublishingUsername>$clitests1</PublishingUsername><RequestTracingEnabled>false</RequestTracingEnabled><RequestTracingExpirationTime i:nil=\"true\"/><ScmType>LocalGit</ScmType><Use32BitWorkerProcess>true</Use32BitWorkerProcess></SiteConfig>", { 'cache-control': 'private',
  'content-length': '1175',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.28 (rd_rdfe_stable.130418-1618) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'afff8649773b47668f462e51dea922d9',
  date: 'Wed, 24 Apr 2013 20:23:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastuswebspace/sites/clitests1?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests1.azurewebsites.net</a:string><a:string>clitests1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests1.azurewebsites.net</a:string></HostNames><Name>clitests1</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitests1</RepositorySiteName><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/clitests1</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://clitests1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$clitests1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>t4cMqe68pPrW7bWXYkTDv3qbczh9kHXXiiBllzhkXRMQ17jkzgN6AT5ByuEl</Value></NameValuePair></Properties></SiteProperties><State>Running</State><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site>", { 'cache-control': 'private',
  'content-length': '1949',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.28 (rd_rdfe_stable.130418-1618) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '47896366ddec49748ef2032d5b4612b0',
  date: 'Wed, 24 Apr 2013 20:24:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://clitests1.scm.azurewebsites.net:443')
  .get('/settings')
  .reply(200, "[{\"Key\":\"deployment_branch\",\"Value\":\"master\"},{\"Key\":\"trace_level\",\"Value\":\"1\"},{\"Key\":\"command_idle_timeout\",\"Value\":\"180\"},{\"Key\":\"logstream_timeout\",\"Value\":\"1800\"},{\"Key\":\"build_args\",\"Value\":\"\"},{\"Key\":\"git.username\",\"Value\":\"windowsazure\"},{\"Key\":\"git.email\",\"Value\":\"windowsazure\"},{\"Key\":\"webpages:Enabled\",\"Value\":\"false\"},{\"Key\":\"ScmType\",\"Value\":\"LocalGit\"}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '369',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/7.5',
  'set-cookie': 
   [ 'ARRAffinity=462716b27beb795c09df205e893d3e263b1ec9b710c92f7c4203f4b63ac1aed2;Path=/;Domain=clitests1.scm.azurewebsites.net',
     'WAWebSiteSID=a0ec77a254c84dc49effcc30592987fb; Path=/; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ARR/2.5, ASP.NET',
  date: 'Wed, 24 Apr 2013 20:24:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://clitests1.scm.azurewebsites.net:443')
  .get('/logstream')
  .reply(200, "2013-04-24T20:20:44  Welcome, you are now connected to log-streaming service.", { 'cache-control': 'private',
  'transfer-encoding': 'chunked',
  'content-type': 'text/plain; charset=utf-8',
  server: 'Microsoft-IIS/7.5',
  'set-cookie': 
   [ 'ARRAffinity=462716b27beb795c09df205e893d3e263b1ec9b710c92f7c4203f4b63ac1aed2;Path=/;Domain=clitests1.scm.azurewebsites.net',
     'WAWebSiteSID=9d414b6427954beebeccbc195571a058; Path=/; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ARR/2.5, ASP.NET',
  date: 'Wed, 24 Apr 2013 20:24:01 GMT' });
 return result; } ]];