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

import React from "react";
import OurTable from "main/components/OurTable";
const columns = stryMutAct_9fa48("455") ? [] : (stryCov_9fa48("455"), [stryMutAct_9fa48("456") ? {} : (stryCov_9fa48("456"), {
  Header: stryMutAct_9fa48("457") ? "" : (stryCov_9fa48("457"), 'id'),
  accessor: stryMutAct_9fa48("458") ? "" : (stryCov_9fa48("458"), 'id') // accessor is the "key" in the data

}), stryMutAct_9fa48("459") ? {} : (stryCov_9fa48("459"), {
  Header: stryMutAct_9fa48("460") ? "" : (stryCov_9fa48("460"), 'First Name'),
  accessor: stryMutAct_9fa48("461") ? "" : (stryCov_9fa48("461"), 'givenName')
}), stryMutAct_9fa48("462") ? {} : (stryCov_9fa48("462"), {
  Header: stryMutAct_9fa48("463") ? "" : (stryCov_9fa48("463"), 'Last Name'),
  accessor: stryMutAct_9fa48("464") ? "" : (stryCov_9fa48("464"), 'familyName')
}), stryMutAct_9fa48("465") ? {} : (stryCov_9fa48("465"), {
  Header: stryMutAct_9fa48("466") ? "" : (stryCov_9fa48("466"), 'Email'),
  accessor: stryMutAct_9fa48("467") ? "" : (stryCov_9fa48("467"), 'email')
}), stryMutAct_9fa48("468") ? {} : (stryCov_9fa48("468"), {
  Header: stryMutAct_9fa48("469") ? "" : (stryCov_9fa48("469"), 'Admin'),
  id: stryMutAct_9fa48("470") ? "" : (stryCov_9fa48("470"), 'admin'),
  accessor: stryMutAct_9fa48("471") ? () => undefined : (stryCov_9fa48("471"), (row, _rowIndex) => String(row.admin)) // hack needed for boolean values to show up

})]);
export default function UsersTable({
  users
}) {
  if (stryMutAct_9fa48("472")) {
    {}
  } else {
    stryCov_9fa48("472");
    return <OurTable data={users} columns={columns} testid={stryMutAct_9fa48("473") ? "" : (stryCov_9fa48("473"), "UsersTable")} />;
  }
}
;