import React from 'react';
import BlockItem from './BlockItem';

const BlockList = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block) => (
        <BlockItem block={block} />
      ))}
    </div>
  );
};

export default BlockList;
