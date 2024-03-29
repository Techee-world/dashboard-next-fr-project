import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../components/axiosInstance';  

import HighlightedResponse from './utils';

const SearchComponent = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('letter-box provided by the Post'); // default search term
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
    setLoading(true);
      try {
        // Using the Axios instance to make a GET request
        const response = await axiosInstance.get('search', {
          params: {
            word: searchTerm,
          },
        });
        setData(response.data);
        console.log(data); 
        // const documentsData = response.data.slice(1);
        // setDocuments(documentsData);
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [searchTerm]); // Dependency on searchTerm, so it refetches when searchTerm changes
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Triggering the useEffect by changing searchTerm is enough for a new search
  };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
 
  return (
<div> 
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
        //   value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter search term..."
        />
        <button type="submit" >Search</button>
      </form>
      
      {loading ? (
        <div>Loading...</div>
      ) :  (
        <div>
           {data.length > 0 ? (
            <table>
                <p>Items Found: {data[0]}</p>
              <thead>
                <tr>
                  <th>Document ID</th>
                  <th>Field Name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {data.map((doc, index) => doc.document_id && (
                <tr key={index}>
                    <td>{doc.document_id.$oid}</td>
                    <td>{doc.field_name}</td>
                    <td><HighlightedResponse  doc={doc.value} searchTerm={searchTerm} /></td>
                </tr>
                ))}
            </tbody>
            </table>
          ) : (
            <p>No data found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
