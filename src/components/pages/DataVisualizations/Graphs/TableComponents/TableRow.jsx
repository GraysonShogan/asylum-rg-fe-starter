import React from 'react';
import TableInnerSquare from './TableInnerSquare';
import SubTable from './SubTable';

function TableRow(props) {
  const { columns, row, tableWidth, rowHeight } = props;

  return (
    <div
      className="table-row"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: tableWidth,
        overflow: 'hidden',
      }}
    >
      {columns.map((property, idx) => {
        if (!row) {
          return null; // Return null or a placeholder if row is undefined or condition is not met
        }

        if (typeof row[property] === 'object') {
          return (
            <SubTable
              dataObject={row[property]}
              rowHeight={rowHeight}
              key={idx}
            />
          );
        } else {
          return (
            <div key={idx} style={{ overflow: 'hidden', flex: '1' }}>
              <TableInnerSquare
                innerData={row[property]}
                rowHeight={rowHeight}
              />
            </div>
          );
        }
        // No need for an else case after conditions, as all paths return a value
      })}
    </div>
  );
}

export default TableRow;
