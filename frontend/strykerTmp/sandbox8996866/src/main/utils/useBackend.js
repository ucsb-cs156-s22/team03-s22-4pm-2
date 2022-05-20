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

import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { toast } from "react-toastify"; // example
//  queryKey ["/api/users/all"] for "api/users/all"
//  queryKey ["/api/users","4"]  for "/api/users?id=4"
// For axiosParameters
//   
// {
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//  }
// 
// GET Example:
// useBackend(
//     ["/api/admin/users"],
//     { method: "GET", url: "/api/admin/users" },
//     []
// );

export function useBackend(queryKey, axiosParameters, initialData) {
  if (stryMutAct_9fa48("663")) {
    {}
  } else {
    stryCov_9fa48("663");
    return useQuery(queryKey, async () => {
      if (stryMutAct_9fa48("664")) {
        {}
      } else {
        stryCov_9fa48("664");

        try {
          if (stryMutAct_9fa48("665")) {
            {}
          } else {
            stryCov_9fa48("665");
            const response = await axios(axiosParameters);
            return response.data;
          }
        } catch (e) {
          if (stryMutAct_9fa48("666")) {
            {}
          } else {
            stryCov_9fa48("666");

            // Stryker disable next-line OptionalChaining
            if (stryMutAct_9fa48("668") ? false : stryMutAct_9fa48("667") ? true : (stryCov_9fa48("667", "668"), e.response?.data?.message)) {
              if (stryMutAct_9fa48("671")) {
                {}
              } else {
                stryCov_9fa48("671");
                toast.error(e.response.data.message);
              }
            } else {
              if (stryMutAct_9fa48("672")) {
                {}
              } else {
                stryCov_9fa48("672");
                const errorMessage = stryMutAct_9fa48("673") ? `` : (stryCov_9fa48("673"), `Error communicating with backend via ${axiosParameters.method} on ${axiosParameters.url}`);
                toast.error(errorMessage);
              }
            }

            throw e;
          }
        }
      }
    }, stryMutAct_9fa48("674") ? {} : (stryCov_9fa48("674"), {
      initialData
    }));
  }
}

const wrappedParams = async params => {
  if (stryMutAct_9fa48("675")) {
    {}
  } else {
    stryCov_9fa48("675");
    return await (await axios(params)).data;
  }
};

export function useBackendMutation(objectToAxiosParams, useMutationParams, queryKey = null) {
  if (stryMutAct_9fa48("676")) {
    {}
  } else {
    stryCov_9fa48("676");
    const queryClient = useQueryClient();
    return useMutation(stryMutAct_9fa48("677") ? () => undefined : (stryCov_9fa48("677"), object => wrappedParams(objectToAxiosParams(object))), stryMutAct_9fa48("678") ? {} : (stryCov_9fa48("678"), {
      onError: error => {
        if (stryMutAct_9fa48("679")) {
          {}
        } else {
          stryCov_9fa48("679");

          // Stryker disable next-line OptionalChaining : we want to check if each nested object is there but we dont want to write tests for each specific case
          if (stryMutAct_9fa48("681") ? false : stryMutAct_9fa48("680") ? true : (stryCov_9fa48("680", "681"), error.response?.data?.message)) {
            if (stryMutAct_9fa48("684")) {
              {}
            } else {
              stryCov_9fa48("684");
              toast.error(error.response.data.message);
            }
          } else {
            if (stryMutAct_9fa48("685")) {
              {}
            } else {
              stryCov_9fa48("685");
              const errorMessage = stryMutAct_9fa48("686") ? `` : (stryCov_9fa48("686"), `Error communicating with backend via ${error.response.config.method} on ${error.response.config.url}`);
              toast.error(errorMessage);
            }
          }
        }
      },
      // Stryker disable all: Not sure how to set up the complex behavior needed to test this
      onSettled: () => {
        if (queryKey !== null) queryClient.invalidateQueries(queryKey);
      },
      // Stryker enable all
      retry: false,
      ...useMutationParams
    }));
  }
}