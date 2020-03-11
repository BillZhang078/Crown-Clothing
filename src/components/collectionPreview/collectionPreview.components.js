import React from 'react';
import CollectionItem from '../collection-item/collectionItem.components';
import '../collectionPreview/collectionPreview.style.scss';

const collectionPreview = ({title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title} </h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...otherProps}) => {
            return <CollectionItem key={id} {...otherProps} />;
          })}
      </div>
    </div>
  );
};

export default collectionPreview;
