// See `example-deployer.config.js` in this directory for setup instructions and the "Deployer
// configuration" section of `BUILDING.md` for documentation on each of the parameters.
//
// It's recommended you track your live deployments here. You can change this any time you want to
// do a fresh deployment.
// Live: 0
'use strict'

const n = ''

module.exports = {
  // Optional
  region: 'us-east-1',

  buildAssetsBucket: 'cf-templates-1j0oexal9w8c-us-east-1',

  // All of these are parametric over `n` so that if you need to have multiple stacks deployed
  // during development or if you need to tear down a stack and don't want to wait for it to
  // completely be torn down before deploying the replacement stack, you can just do it without
  // much work.
  stackName: `ctn-api-portal${n}`,
  siteAssetsBucket: `ctn-api-portal-static-assets${n}`,
  apiAssetsBucket: `ctn-api-portal-artifacts${n}`,
  cognitoDomainName: `auth.tcptest.org${n}`,
  customersTableName: `DevPortalCustomers${n}`,
  preLoginAccountsTableName: `DevPortalPreLoginAccounts${n}`,
  feedbackTableName: `DevPortalFeedback${n}`,

  // Optional, but highly recommended for easier identification.
  cognitoIdentityPoolName: `DevPortalIdentityPool${n}`,

  // Optional, but highly recommended so you can keep the site in sync with what's in the repo.
  // overwrite-content
  staticAssetRebuildMode: '',

  customDomainName: 'apiportal.tcpdev.org',
  customDomainNameAcmCertArn: 'arn:aws:acm:us-east-1:496986085600:certificate/77f9ed65-f01a-4a2d-bdbf-afc90a148912',
  cognitoDomainAcmCertArn: 'arn:aws:acm:us-east-1:496986085600:certificate/77f9ed65-f01a-4a2d-bdbf-afc90a148912',
  useRoute53Nameservers: false,
  feedbackEmail: 'cloudops@thecommonsproject.org',

  // Set development mode for local use.
  developmentMode: false

  // Toggle this any time the edge lambda or its replicator lambda are updated. In general, unless
  // either you're modifying them yourself or they were changed upstream and you just pulled those
  // changes, you shouldn't need to do anything about this value.
  // edgeLambdaResetToken: 'reset',
}
