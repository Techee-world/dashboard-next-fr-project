import React from 'react';
import { Typography } from '@mui/material';

const HighlightedResponse = ({ doc, searchTerm }) => {
  // Function to highlight the search term within the response text
  const highlightSearchTerm = (text, term) => {
    if (!term.trim()) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  return (
    <Typography variant="body1" component="div" dangerouslySetInnerHTML={{ __html: highlightSearchTerm(doc, searchTerm) }} />
  );
};

export default HighlightedResponse;


