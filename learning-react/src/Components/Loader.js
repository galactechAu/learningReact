import React from 'react';

function Loader() {
  return (
    <div className="z-20 h-full w-full absolute inset-0 flex items-center justify-center">
        <div className="lds-hourglass"></div>
    </div>
  );
}

export default Loader;
