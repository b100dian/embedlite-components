/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const Ci = Components.interfaces;

const { XPCOMUtils } = ChromeUtils.import("resource://gre/modules/XPCOMUtils.jsm");
const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

XPCOMUtils.defineLazyServiceGetter(Services, "embedlite",
                                    "@mozilla.org/embedlite-app-service;1",
                                    "nsIEmbedAppService");

Services.scriptloader.loadSubScript("chrome://embedlite/content/Logger.js");

// -----------------------------------------------------------------------
// Alerts Service
// -----------------------------------------------------------------------

function AlertsService() {
  dump("JSComp: AlertsService.js loaded\n");
}

AlertsService.prototype = {
  classID: Components.ID("{b98ab6b8-6c88-11e2-99bc-6745f7369235}"),
  QueryInterface: ChromeUtils.generateQI([Ci.nsIAlertsService]),

  showPersistentNotification: function (aPersistentData, aAlert, aAlertListener) {
    dump("showPersistentNotification:" + aPersistentData + "\n")
  },

  showAlert: function(aAlert, aAlertListener) {
    dump("showAlert:" + aAlert + "\n")
  },

  showAlertNotification: function(aImageUrl, aTitle, aText, aTextClickable, aCookie, aAlertListener, aName, aDir, aLang, aData, aPrincipal, aInPrivateBrowsing, aRequireInteraction) {
    dump("showAlertNotification: imgUrl:" + aImageUrl + ", title:" + aTitle + ", txt:" + aText + ", clickable:" + aTextClickable + ", cookie:" +  aCookie + ", listener:" + aAlertListener + ", Name:" + aName + "\n");
  },

  closeAlert: function(aName, aPrincipal) {
    dump("closeAlert:" + aName + "\n");
  }
};

this.NSGetFactory = XPCOMUtils.generateNSGetFactory([AlertsService]);
