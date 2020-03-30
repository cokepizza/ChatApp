import React from 'react';
import SubHeader from '../../components/common/SubHeader';

const SubHeaderContainer = ({ title, index, total }) => {
    return (
        <SubHeader
            title={title}
            index={index}
            total={total}
        />
    );
};

export default SubHeaderContainer;