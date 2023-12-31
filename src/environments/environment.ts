// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  propertyphoto : 'https://s3-ap-southeast-1.amazonaws.com/mycrm-pro-accounts-v2/property/full/',
  blissApiHost:'http://localhost:9001/bliss/webapi',
  agentProfileHost: 'https://blissmedia-upload-s3-bucket.s3.me-central-1.amazonaws.com/',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
