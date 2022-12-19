import React from 'react';
import loading from '../images/loading.svg';

const Loading = () => (
  <div className="spinner">
    <img width={200} src={loading} alt="Loading" />
  </div>
);

export default Loading;
