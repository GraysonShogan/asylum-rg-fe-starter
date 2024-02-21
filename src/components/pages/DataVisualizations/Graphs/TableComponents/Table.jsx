import React from 'react';
import TableRow from './TableRow';
import { colors } from '../../../../../styles/data_vis_colors';

const { primary_accent_color } = colors;

function Table(props) {
  const { rows, columns, tableWidth, rowHeight } = props;

  // Extracted styles for readability
  const tableStyle = {
    display: 'flex',
    width: tableWidth,
    flexDirection: 'column',
    margin: '5% auto',
    overflow: 'hidden',
  };

  const columnIdContainerStyle = {
    display: 'flex',
    width: tableWidth,
    height: rowHeight,
  };

  const columnIdStyle = {
    backgroundColor: primary_accent_color,
    border: '1px solid black',
    color: 'white',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="g-table" style={tableStyle}>
      <div className="column-id-container" style={columnIdContainerStyle}>
        {columns.map((column, idx) => (
          <div
            className="column-id"
            style={columnIdStyle}
            key={column.id || idx} // Assuming columns might have a unique `id`. If not, fallback to index.
          >
            {column}
          </div>
        ))}
      </div>
      <div className="rows-container">
        {rows.map((row, idx) => (
          <TableRow
            key={row.id || idx} // Similar assumption for rows having a unique `id`.
            row={row}
            rowId={idx}
            tableWidth={tableWidth}
            rowHeight={rowHeight}
            columns={columns}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
