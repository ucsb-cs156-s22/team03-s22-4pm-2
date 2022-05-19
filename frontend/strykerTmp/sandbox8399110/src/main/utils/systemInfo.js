// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});

  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }

  function retrieveNS() {
    return ns;
  }

  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}

stryNS_9fa48();

function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });

  function cover() {
    var c = cov.static;

    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }

    var a = arguments;

    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }

  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}

function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();

  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }

      return true;
    }

    return false;
  }

  stryMutAct_9fa48 = isActive;
  return isActive(id);
}

import { useQuery } from "react-query";
import axios from "axios";
export function useSystemInfo() {
  if (stryMutAct_9fa48("653")) {
    {}
  } else {
    stryCov_9fa48("653");
    return useQuery(stryMutAct_9fa48("654") ? "" : (stryCov_9fa48("654"), "systemInfo"), async () => {
      if (stryMutAct_9fa48("655")) {
        {}
      } else {
        stryCov_9fa48("655");

        try {
          if (stryMutAct_9fa48("656")) {
            {}
          } else {
            stryCov_9fa48("656");
            const response = await axios.get(stryMutAct_9fa48("657") ? "" : (stryCov_9fa48("657"), "/api/systemInfo"));
            return response.data;
          }
        } catch (e) {
          if (stryMutAct_9fa48("658")) {
            {}
          } else {
            stryCov_9fa48("658");
            console.error(stryMutAct_9fa48("659") ? "" : (stryCov_9fa48("659"), "Error invoking axios.get: "), e);
            return stryMutAct_9fa48("660") ? {} : (stryCov_9fa48("660"), {
              springH2ConsoleEnabled: stryMutAct_9fa48("661") ? true : (stryCov_9fa48("661"), false),
              showSwaggerUILink: stryMutAct_9fa48("662") ? true : (stryCov_9fa48("662"), false)
            });
          }
        }
      }
    }, stryMutAct_9fa48("663") ? {} : (stryCov_9fa48("663"), {
      initialData: stryMutAct_9fa48("664") ? {} : (stryCov_9fa48("664"), {
        initialData: stryMutAct_9fa48("665") ? false : (stryCov_9fa48("665"), true),
        springH2ConsoleEnabled: stryMutAct_9fa48("666") ? true : (stryCov_9fa48("666"), false),
        showSwaggerUILink: stryMutAct_9fa48("667") ? true : (stryCov_9fa48("667"), false)
      })
    }));
  }
}