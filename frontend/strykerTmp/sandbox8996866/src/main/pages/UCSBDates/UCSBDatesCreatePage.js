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
import UCSBDateForm from "main/components/UCSBDates/UCSBDateForm";
import { Navigate } from 'react-router-dom';
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
export default function UCSBDatesCreatePage() {
  if (stryMutAct_9fa48("531")) {
    {}
  } else {
    stryCov_9fa48("531");
    const objectToAxiosParams = stryMutAct_9fa48("532") ? () => undefined : (stryCov_9fa48("532"), (() => {
      const objectToAxiosParams = ucsbDate => stryMutAct_9fa48("533") ? {} : (stryCov_9fa48("533"), {
        url: stryMutAct_9fa48("534") ? "" : (stryCov_9fa48("534"), "/api/ucsbdates/post"),
        method: stryMutAct_9fa48("535") ? "" : (stryCov_9fa48("535"), "POST"),
        params: stryMutAct_9fa48("536") ? {} : (stryCov_9fa48("536"), {
          quarterYYYYQ: ucsbDate.quarterYYYYQ,
          name: ucsbDate.name,
          localDateTime: ucsbDate.localDateTime
        })
      });

      return objectToAxiosParams;
    })());

    const onSuccess = ucsbDate => {
      if (stryMutAct_9fa48("537")) {
        {}
      } else {
        stryCov_9fa48("537");
        toast(stryMutAct_9fa48("538") ? `` : (stryCov_9fa48("538"), `New ucsbDate Created - id: ${ucsbDate.id} name: ${ucsbDate.name}`));
      }
    };

    const mutation = useBackendMutation(objectToAxiosParams, stryMutAct_9fa48("539") ? {} : (stryCov_9fa48("539"), {
      onSuccess
    }), // Stryker disable next-line all : hard to set up test for caching
    ["/api/ucsbdates/all"]);
    const {
      isSuccess
    } = mutation;

    const onSubmit = async data => {
      if (stryMutAct_9fa48("542")) {
        {}
      } else {
        stryCov_9fa48("542");
        mutation.mutate(data);
      }
    };

    if (stryMutAct_9fa48("544") ? false : stryMutAct_9fa48("543") ? true : (stryCov_9fa48("543", "544"), isSuccess)) {
      if (stryMutAct_9fa48("545")) {
        {}
      } else {
        stryCov_9fa48("545");
        return <Navigate to="/ucsbdates/list" />;
      }
    }

    return <BasicLayout>
      <div className="pt-2">
        <h1>Create New UCSBDate</h1>

        <UCSBDateForm submitAction={onSubmit} />

      </div>
    </BasicLayout>;
  }
}