import { FC } from 'react';

import './card-loader.css';

type CardLoadingProps = {
  isImage?: boolean;
};

export const CardLoader: FC<CardLoadingProps> = ({ isImage = false }) => {
  return (
    <>
      <div className="card-loading">
        {isImage && <div className="skeleton-image"></div>}

        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
        <div className="skeleton-text short"></div>
      </div>
    </>
  );
};
