import React from 'react';

function Skeleton({ width = null, height = null, animation = true, rounded = 1 }) {
    const styles = {
        width: width,
        height: height
    };

    const classNames = `v-skeleton rounded-${rounded} ${animation ? '' : 'v-skeleton__disable-animation'}`;

    return <div style={styles} className={classNames}></div>;
}

export default Skeleton;
