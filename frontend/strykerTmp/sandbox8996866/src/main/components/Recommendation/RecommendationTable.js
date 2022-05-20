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

import OurTable, { ButtonColumn } from "main/components/OurTable"; //import OurTable from "main/components/OurTable";

import { useBackendMutation } from "main/utils/useBackend"; //import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/RecommendationUtils"
//import { useNavigate } from "react-router-dom";

import { hasRole } from "main/utils/currentUser";
import { toast } from "react-toastify";
export function onDeleteSuccess(message) {
  if (stryMutAct_9fa48("267")) {
    {}
  } else {
    stryCov_9fa48("267");
    console.log(message);
    toast(message);
  }
}
export function cellToAxiosParamsDelete(cell) {
  if (stryMutAct_9fa48("268")) {
    {}
  } else {
    stryCov_9fa48("268");
    return stryMutAct_9fa48("269") ? {} : (stryCov_9fa48("269"), {
      url: stryMutAct_9fa48("270") ? "" : (stryCov_9fa48("270"), "/api/recommendation"),
      method: stryMutAct_9fa48("271") ? "" : (stryCov_9fa48("271"), "DELETE"),
      params: stryMutAct_9fa48("272") ? {} : (stryCov_9fa48("272"), {
        id: cell.row.values.id
      })
    });
  }
}
export default function RecommendationTable({
  recommendations,
  currentUser
}) {
  if (stryMutAct_9fa48("273")) {
    {}
  } else {
    stryCov_9fa48("273");
    //const navigate = useNavigate();
    //const editCallback = (cell) => {
    //    navigate(`/recommendation/edit/${cell.row.values.id}`)
    //}
    // Stryker disable all : hard to test for query caching
    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ["/api/recommendation/all"]); // Stryker enable all 
    // Stryker disable next-line all : TODO try to make a good test for this

    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };

    const columns = [{
      Header: 'id',
      accessor: 'id' // accessor is the "key" in the data

    }, {
      Header: 'Date Needed',
      accessor: 'dateNeeded'
    }, {
      Header: 'Date Requested',
      accessor: 'dateRequested'
    }, {
      Header: 'Done?',
      id: 'done',
      accessor: (row, _rowIndex) => String(row.done) // hack needed for boolean values to show up

    }, {
      Header: 'Explanation',
      accessor: 'explanation'
    }, {
      Header: 'Professor Email',
      accessor: 'professorEmail'
    }, {
      Header: 'Requester Email',
      accessor: 'requesterEmail'
    }];
    const columnsIfAdmin = [...columns, //ButtonColumn("Edit", "primary", editCallback, "RecommendationTable"),
    ButtonColumn("Delete", "danger", deleteCallback, "RecommendationTable")];
    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns; //const columnsToDisplay = columns;

    return <OurTable data={recommendations} columns={columnsToDisplay} testid={"RecommendationTable"} />;
  }
}
;