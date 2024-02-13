"use client"
import React from 'react';
import { hasReactChildren } from "@/utils/hasReactChildren";
import Skeleton from "@/components/Skeleton/Skeleton"; // Update the import path as necessary
import './TableBody.scss'

function VTableBody({ columns, items, isLoading, itemsPerPage, hasError }) {
    // Function to render columns for a single item
    console.log("columns", columns)


    const renderColumns = (column, item, rowIndex) => {
        let content;

        if (column.props.children) {
            content = column.props.children

        } else {
            content = React.createElement('div', { field: column.props.field, item, rowIndex }, item[column.props.field]);

        }


        return (
            <>
                {content}
            </>

        );
    };


    // Function to get column style
    const getColumnStyle = (column) => {
        const columnWidth = column.props.width;
        if (columnWidth) {
            return {
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                maxWidth: `${columnWidth}px`,
                width: `${columnWidth}px`
            };
        }
        return {};
    };

    return (
        <tbody>
        {isLoading && (
            <tr>
                {columns.map((column, index) => (
                    <td key={index} className="py-4">
                        <Skeleton width={column.props.width} className="d-block" rounded="0"/>
                    </td>
                ))}
            </tr>
        )}

        {hasError && (
            <tr className="text-center">
                <td colSpan={columns.length} className="text-mute pt-8 pb-4">
                    <img alt="empty table" className="mb-2" src="@/assets/empty-img-simple.png"/>
                    <p className="mb-0">An error has occurred</p>
                </td>
            </tr>
        )}

        {!isLoading && items.length === 0 && (
            <tr className="text-center">
                <td colSpan={columns.length} className="text-mute pt-8 pb-4">
                    <img alt="empty table" className="mb-2" src="@/assets/empty-img-simple.png"/>
                    <p className="mb-0">No data available</p>
                </td>
            </tr>
        )}


        {items.map((item, rowIndex) => (
            <tr key={rowIndex}>
                {columns.map((column, index) => (
                    <td key={index} className="fs-3 bg-transparent" style={getColumnStyle(column)}>
                        {renderColumns(column, item, rowIndex)}
                    </td>
                ))}
            </tr>
        ))}

        </tbody>
    );
}

export default VTableBody;
