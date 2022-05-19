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

import OurTable, { ButtonColumn } from "main/components/OurTable";
import { useBackendMutation } from "main/utils/useBackend";
import { onDeleteSuccess } from "main/utils/MenuItemReviewUtils";
import { hasRole } from "main/utils/currentUser";
export function cellToAxiosParamsDelete(cell) {
  if (stryMutAct_9fa48("114")) {
    {}
  } else {
    stryCov_9fa48("114");
    return stryMutAct_9fa48("115") ? {} : (stryCov_9fa48("115"), {
      url: stryMutAct_9fa48("116") ? "" : (stryCov_9fa48("116"), "/api/MenuItemReview"),
      method: stryMutAct_9fa48("117") ? "" : (stryCov_9fa48("117"), "DELETE"),
      params: stryMutAct_9fa48("118") ? {} : (stryCov_9fa48("118"), {
        id: cell.row.values.id
      })
    });
  }
}
export default function MenuItemReviewsTable({
  menuItemReviews,
  currentUser
}) {
  if (stryMutAct_9fa48("119")) {
    {}
  } else {
    stryCov_9fa48("119");
    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, stryMutAct_9fa48("120") ? {} : (stryCov_9fa48("120"), {
      onSuccess: onDeleteSuccess
    }), stryMutAct_9fa48("121") ? [] : (stryCov_9fa48("121"), [stryMutAct_9fa48("122") ? "" : (stryCov_9fa48("122"), "/api/MenuItemReview/all")]));

    const deleteCallback = async cell => {
      if (stryMutAct_9fa48("123")) {
        {}
      } else {
        stryCov_9fa48("123");
        deleteMutation.mutate(cell);
      }
    };

    const columns = stryMutAct_9fa48("124") ? [] : (stryCov_9fa48("124"), [stryMutAct_9fa48("125") ? {} : (stryCov_9fa48("125"), {
      Header: stryMutAct_9fa48("126") ? "" : (stryCov_9fa48("126"), 'ID'),
      accessor: stryMutAct_9fa48("127") ? "" : (stryCov_9fa48("127"), 'id')
    }), stryMutAct_9fa48("128") ? {} : (stryCov_9fa48("128"), {
      Header: stryMutAct_9fa48("129") ? "" : (stryCov_9fa48("129"), 'Menu Item ID'),
      accessor: stryMutAct_9fa48("130") ? "" : (stryCov_9fa48("130"), 'itemId')
    }), stryMutAct_9fa48("131") ? {} : (stryCov_9fa48("131"), {
      Header: stryMutAct_9fa48("132") ? "" : (stryCov_9fa48("132"), 'Reviewer/Critic Email'),
      accessor: stryMutAct_9fa48("133") ? "" : (stryCov_9fa48("133"), 'reviewerEmail')
    }), stryMutAct_9fa48("134") ? {} : (stryCov_9fa48("134"), {
      Header: stryMutAct_9fa48("135") ? "" : (stryCov_9fa48("135"), 'Number of Stars'),
      accessor: stryMutAct_9fa48("136") ? "" : (stryCov_9fa48("136"), 'stars')
    }), stryMutAct_9fa48("137") ? {} : (stryCov_9fa48("137"), {
      Header: stryMutAct_9fa48("138") ? "" : (stryCov_9fa48("138"), 'Date Reviewed'),
      accessor: stryMutAct_9fa48("139") ? "" : (stryCov_9fa48("139"), 'dateReviewed')
    }), stryMutAct_9fa48("140") ? {} : (stryCov_9fa48("140"), {
      Header: stryMutAct_9fa48("141") ? "" : (stryCov_9fa48("141"), 'Comments'),
      accessor: stryMutAct_9fa48("142") ? "" : (stryCov_9fa48("142"), 'comments')
    })]);
    const testid = stryMutAct_9fa48("143") ? "" : (stryCov_9fa48("143"), "MenuItemReviewsTable");
    const columnsIfAdmin = stryMutAct_9fa48("144") ? [] : (stryCov_9fa48("144"), [...columns, ButtonColumn(stryMutAct_9fa48("145") ? "" : (stryCov_9fa48("145"), "Delete"), stryMutAct_9fa48("146") ? "" : (stryCov_9fa48("146"), "danger"), deleteCallback, testid)]);
    const columnsToDisplay = hasRole(currentUser, stryMutAct_9fa48("147") ? "" : (stryCov_9fa48("147"), "ROLE_ADMIN")) ? columnsIfAdmin : columns;
    return <OurTable data={menuItemReviews} columns={columnsToDisplay} testid={testid} />;
  }
}
;