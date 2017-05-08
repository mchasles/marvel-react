import React from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

export const Pagination = (props) => {
  return (
    <div className="pagination">
      <a className={(props.loading || props.offset === 0) ? 'disabled' : ''} onClick={!props.loading && props.previousCharacters}>
        <img src={arrowLeft} alt="Next" />
      </a>
      <a className={props.loading ? 'disabled' : ''} onClick={!props.loading && props.nextCharacters}>
        <img src={arrowRight} alt="Next" />
      </a>
    </div>
  );
}