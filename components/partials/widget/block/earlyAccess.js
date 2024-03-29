import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Custom hook for loading an external script
const useExternalScript = (url) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [url]);
};

const LaunchListWidget = () => {
  // Invoke the custom hook to load the LaunchList script
  useExternalScript("https://getlaunchlist.com/js/widget.js");

  return (

    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          <div className="launchlist-widget" data-key-id="OyI46B" data-height="180px"></div>
          {/* Title */}
        </Typography>
        <Typography variant="body2">
          {/* This is a simple card example using Material-UI. */}

        </Typography>
      </CardContent>
    </Card>
  );
};

export default LaunchListWidget;

