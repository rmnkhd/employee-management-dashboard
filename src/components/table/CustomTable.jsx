import React from 'react';
import TableHeader from "@/components/tableHeader/TableHeader";
import TableBody from "@/components/tableBody/TableBody"; // Update the import path as necessary
import './CustomTable.scss'

function CustomTable({ children , items, page = 1, itemsPerPage = 10, isLoading = false, hasError = false, ...props }) {
    // JSX for rendering the component
    return (
        <div>
            <table className="table" {...props}>
                <TableHeader columns={children} />
                <TableBody
                    itemsPerPage={Number(itemsPerPage)}
                    columns={children}
                    isLoading={isLoading}
                    items={items}
                    hasError={hasError}
                />
            </table>

        </div>
    );
}

export default CustomTable;
