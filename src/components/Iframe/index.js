import React from 'react';
import './index.scss';

const Iframe = ( source, title ) => {

  if(!source) {
    return <div>sorry NO SOURCE file !!! for your iframe !!!! </div>
  }
  const src = source;
  return (
    <div className="col-md-12">
      <div className="emdeb-responsive">
        <iframe src={src} title={ title }></iframe>
      </div>
    </div>
  )
}

export default Iframe;
