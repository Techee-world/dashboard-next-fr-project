import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LaunchListWidget from "./earlyAccess"

const ImageBlock1 = () => {
    const [isCardVisible, setIsCardVisible] = useState(false);
  
    const toggleCardVisibility = () => {
      setIsCardVisible(!isCardVisible);
    };

  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
      style={{
        backgroundImage: `url(/assets/images/all-img/widget-bg-1.png)`,
      }}
    >
      <div className="max-w-[169px]">
        <div className="text-xl font-medium text-slate-900 mb-2">
          You are in MVP !
        </div>
        <p className="text-sm text-slate-800">Join for Early Access</p>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 mt-2 h-12 w-12  text-slate-900     flex flex-col items-center justify-center">
        <div>
          <Button onClick={toggleCardVisibility} variant={isCardVisible ? "contained" : "outlined"} color="primary">
            {isCardVisible ? 'Hide' : 'Join Now'}
          </Button>
        </div>
      </div>
      {isCardVisible && <LaunchListWidget />}

    </div>
  );
};

export default ImageBlock1;
