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

import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import React from 'react';
import { useBackend } from 'main/utils/useBackend'; // use prefix indicates a React Hook

import UCSBDiningCommonsMenuTable from 'main/components/UCSBDiningCommonsMenu/UCSBDiningCommonsMenuTable';
import { useCurrentUser } from 'main/utils/currentUser'; // use prefix indicates a React Hook

export default function UCSBDiningCommonsMenuIndexPage() {
  if (stryMutAct_9fa48("578")) {
    {}
  } else {
    stryCov_9fa48("578");
    const currentUser = useCurrentUser();
    const {
      data: diningCommonsMenu,
      error: _error,
      status: _status
    } = useBackend( // Stryker disable next-line all : don't test internal caching of React Query
    ["/api/ucsbdiningcommonsmenu/all"], // Stryker disable next-line StringLiteral,ObjectLiteral : since "GET" is default, "" is an equivalent mutation
    {
      method: "GET",
      url: "/api/ucsbdiningcommonsmenu/all"
    }, stryMutAct_9fa48("584") ? ["Stryker was here"] : (stryCov_9fa48("584"), []));
    return <BasicLayout>
      <div className="pt-2">
        <h1>UCSBDiningCommonsMenu</h1>
        <UCSBDiningCommonsMenuTable diningCommonsMenu={diningCommonsMenu} currentUser={currentUser} />
      </div>
    </BasicLayout>;
  }
}