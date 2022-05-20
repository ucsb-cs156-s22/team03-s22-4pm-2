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
import { useTable, useSortBy } from 'react-table';
import { Table, Button } from "react-bootstrap";
export default function OurTable({
  columns,
  data,
  testid = stryMutAct_9fa48("240") ? "" : (stryCov_9fa48("240"), "testid")
}) {
  if (stryMutAct_9fa48("241")) {
    {}
  } else {
    stryCov_9fa48("241");
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable(stryMutAct_9fa48("242") ? {} : (stryCov_9fa48("242"), {
      columns,
      data
    }), useSortBy);
    return <Table {...getTableProps()} striped bordered hover>
      <thead>
        {headerGroups.map(stryMutAct_9fa48("243") ? () => undefined : (stryCov_9fa48("243"), headerGroup => <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(stryMutAct_9fa48("244") ? () => undefined : (stryCov_9fa48("244"), column => <th {...column.getHeaderProps(column.getSortByToggleProps())} data-testid={stryMutAct_9fa48("245") ? `` : (stryCov_9fa48("245"), `${testid}-header-${column.id}`)}>
                {column.render(stryMutAct_9fa48("246") ? "" : (stryCov_9fa48("246"), 'Header'))}
                <span data-testid={stryMutAct_9fa48("247") ? `` : (stryCov_9fa48("247"), `${testid}-header-${column.id}-sort-carets`)}>
                  {column.isSorted ? column.isSortedDesc ? stryMutAct_9fa48("248") ? "" : (stryCov_9fa48("248"), ' 🔽') : stryMutAct_9fa48("249") ? "" : (stryCov_9fa48("249"), ' 🔼') : stryMutAct_9fa48("250") ? "Stryker was here!" : (stryCov_9fa48("250"), '')}
                </span>
              </th>))}
          </tr>))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          if (stryMutAct_9fa48("251")) {
            {}
          } else {
            stryCov_9fa48("251");
            prepareRow(row);
            return <tr {...row.getRowProps()}>
              {row.cells.map((cell, _index) => {
                if (stryMutAct_9fa48("252")) {
                  {}
                } else {
                  stryCov_9fa48("252");
                  return <td {...cell.getCellProps()} data-testid={stryMutAct_9fa48("253") ? `` : (stryCov_9fa48("253"), `${testid}-cell-row-${cell.row.index}-col-${cell.column.id}`)}>
                    {cell.render(stryMutAct_9fa48("254") ? "" : (stryCov_9fa48("254"), 'Cell'))} 
                  </td>;
                }
              })}
            </tr>;
          }
        })}
      </tbody>
    </Table>;
  }
} // The callback function for ButtonColumn should have the form
// (cell) => { doSomethingWith(cell); }
// The fields in cell are:
//   ["column","row","value","getCellProps","render"]
// Documented here: https://react-table.tanstack.com/docs/api/useTable#cell-properties
// Typically, you want cell.row.values, which is where you can get the individual
//   fields of the object representing the row in the table.
// Example: 
//   const deleteCallback = (cell) => 
//      toast(`Delete Callback called on id: ${cell.row.values.id} name: ${cell.row.values.name}`);
// Add it to table like this:
// const columns = [
//   {
//       Header: 'id',
//       accessor: 'id', // accessor is the "key" in the data
//   },
//   {
//       Header: 'Name',
//       accessor: 'name',
//   },
//   ButtonColumn("Edit", "primary", editCallback),
//   ButtonColumn("Delete", "danger", deleteCallback)
// ];

export function ButtonColumn(label, variant, callback, testid, idfield = stryMutAct_9fa48("255") ? "" : (stryCov_9fa48("255"), "id")) {
  if (stryMutAct_9fa48("256")) {
    {}
  } else {
    stryCov_9fa48("256");
    const column = stryMutAct_9fa48("257") ? {} : (stryCov_9fa48("257"), {
      Header: label,
      id: label,
      Cell: stryMutAct_9fa48("258") ? () => undefined : (stryCov_9fa48("258"), ({
        cell
      }) => <Button variant={variant} onClick={stryMutAct_9fa48("259") ? () => undefined : (stryCov_9fa48("259"), () => callback(cell))} data-testid={stryMutAct_9fa48("260") ? `` : (stryCov_9fa48("260"), `${testid}-cell-row-${cell.row.index}-col-${cell.column[idfield]}-button`)}>
        {label}
      </Button>)
    });
    return column;
  }
}