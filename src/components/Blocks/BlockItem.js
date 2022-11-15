import React from 'react';

const BlockItem = ({ block }) => {
  return (
    <div>
      <img
        src={require(`../../assets/items/${block.type + '-' + block.meta}.png`)}
        alt={block.name}
      />
      <label>{block.name}</label>
    </div>
  );
};

export default BlockItem;
