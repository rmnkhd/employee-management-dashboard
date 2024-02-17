import React from 'react';
import './TableHeader.scss'
function VTableHeader({ columns }) {
    // Define the functions used in the setup
    function shouldShowColumn(column) {
       // return column.props.show ?? column.type.props.show;
        return true
    }
    function getHeaderWidth(column) {
        const columnWidth = column.props.width;
        if (columnWidth) {
            return { width: `${columnWidth}px` };
        }
        return {}; // Return an empty object if no width is specified
    }

    // JSX for rendering the component
    return (
        <thead>
        <tr className="table-tr">
            {columns.map((column, index) => {
                if (shouldShowColumn(column)) {
                    return (
                        <th
                            className="table-th"
                            style={getHeaderWidth(column)}
                            key={index}
                        >
                            {/* Check if column has a header component */}
                            {column.children && column.children.header ? (
                                <column.children.header />
                            ) : (
                                <>{column.props.header}</>
                            )}
                        </th>
                    );
                }
                return null; // If shouldShowColumn returns false, don't render the th
            })}
        </tr>
        </thead>
    );
}

export default VTableHeader;
