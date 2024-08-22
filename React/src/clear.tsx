import React from 'react';

type ClearProps = {
    clearPersons: () => void;
};

const Clear: React.FC<ClearProps> = ({ clearPersons }) => {
    return (
        <button onClick={clearPersons}>
            Clear All
        </button>
    );
};

export default Clear;