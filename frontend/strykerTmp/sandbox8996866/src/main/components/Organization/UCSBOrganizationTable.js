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
import { useBackendMutation } from "main/utils/useBackend"; //import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBOrganizationUtils"
//import { useNavigate } from "react-router-dom";

import { hasRole } from "main/utils/currentUser";
import { toast } from "react-toastify";
export function onDeleteSuccess(message) {
  if (stryMutAct_9fa48("208")) {
    {}
  } else {
    stryCov_9fa48("208");
    console.log(message);
    toast(message);
  }
}
export function cellToAxiosParamsDelete(cell) {
  if (stryMutAct_9fa48("209")) {
    {}
  } else {
    stryCov_9fa48("209");
    return stryMutAct_9fa48("210") ? {} : (stryCov_9fa48("210"), {
      url: stryMutAct_9fa48("211") ? "" : (stryCov_9fa48("211"), "/api/ucsborganization"),
      method: stryMutAct_9fa48("212") ? "" : (stryCov_9fa48("212"), "DELETE"),
      params: stryMutAct_9fa48("213") ? {} : (stryCov_9fa48("213"), {
        orgCode: cell.row.values.orgCode
      })
    });
  }
}
export default function UCSBOrganizationTable({
  organization,
  currentUser
}) {
  if (stryMutAct_9fa48("214")) {
    {}
  } else {
    stryCov_9fa48("214");
    //const navigate = useNavigate();
    // const editCallback = (cell) => {
    //     navigate(`/ucsborganization/edit/${cell.row.values.id}`)
    // }
    // Stryker disable all : hard to test for query caching
    const deleteMutation = useBackendMutation(cellToAxiosParamsDelete, {
      onSuccess: onDeleteSuccess
    }, ["/api/ucsborganization/all"]); //Stryker enable all 
    // Stryker disable next-line all : TODO try to make a good test for this

    const deleteCallback = async cell => {
      deleteMutation.mutate(cell);
    };

    const columns = [{
      Header: 'Org Code',
      accessor: 'orgCode' // accessor is the "key" in the data

    }, {
      Header: 'Org Translation Short',
      accessor: 'orgTranslationShort'
    }, {
      Header: 'Org Translation',
      accessor: 'orgTranslation'
    }, {
      Header: 'Inactive',
      id: 'inactive',
      accessor: (row, _rowIndex) => String(row.inactive)
    }];
    const columnsIfAdmin = [...columns, //     ButtonColumn("Edit", "primary", editCallback, "UCSBDatesTable"),
    ButtonColumn("Delete", "danger", deleteCallback, "UCSBOrganizationTable", "code")];
    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;
    return <OurTable data={organization} columns={columnsToDisplay} testid={"UCSBOrganizationTable"} />;
  }
}
;