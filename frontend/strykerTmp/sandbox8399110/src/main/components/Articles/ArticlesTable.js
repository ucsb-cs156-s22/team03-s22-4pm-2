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
import { onDeleteSuccess } from "main/utils/UCSBDateUtils"; // import { useNavigate } from "react-router-dom";

import { hasRole } from "main/utils/currentUser";
export function cellToAxiosParamsDelete(cell) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    return stryMutAct_9fa48("1") ? {} : (stryCov_9fa48("1"), {
      url: stryMutAct_9fa48("2") ? "" : (stryCov_9fa48("2"), "/api/Article"),
      method: stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), "DELETE"),
      params: stryMutAct_9fa48("4") ? {} : (stryCov_9fa48("4"), {
        id: cell.row.values.id
      })
    });
  }
}
export default function ArticlesTable({
  articles,
  currentUser
}) {
  if (stryMutAct_9fa48("5")) {
    {}
  } else {
    stryCov_9fa48("5");
    // const navigate = useNavigate();
    // const editCallback = (cell) => {
    //     navigate(`/Article/edit/${cell.row.values.id}`)
    // }
    // Stryker disable all : hard to test for query caching
    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ["/api/Article/all"]); // Stryker enable all 
    // Stryker disable next-line all : TODO try to make a good test for this

    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };

    const columns = [{
      Header: 'id',
      accessor: 'id' // accessor is the "key" in the data

    }, {
      Header: 'Title',
      accessor: 'title'
    }, {
      Header: 'Url',
      accessor: 'url'
    }, {
      Header: 'Explanation',
      accessor: 'explanation'
    }, {
      Header: 'Email',
      accessor: 'email'
    }, {
      Header: 'Date Added',
      accessor: 'dateAdded'
    }];
    const columnsIfAdmin = [...columns, // ButtonColumn("Edit", "primary", editCallback, "ArticlesTable"),
    ButtonColumn("Delete", "danger", deleteCallback, "ArticlesTable")];
    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;
    return <OurTable data={articles} columns={columnsToDisplay} testid={"ArticlesTable"} />;
  }
}
;