import React from 'react';
import {
  FacebookShareButton
} from 'react-share';

const SocialShare = props => {
  const { product } = props;
  return (
    <ul className='d-flex flex-row mx-0 mb-0 justify-content-center justify-content-md-start share-box'>
      <li>
        <FacebookShareButton
          url={product?.imageUrl}
          className='share-btn facebook'>
          <i className='fa fa-facebook'></i>
        </FacebookShareButton>
      </li>
    </ul>
  );
};

export default SocialShare;
