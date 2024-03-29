import React, { useState } from 'react';


const FolderTree = ({ data }) => {
  const [expandedFolders, setExpandedFolders] = useState([]);

  const toggleFolder = (folderId) => {
    if (expandedFolders.includes(folderId)) {
      setExpandedFolders(expandedFolders.filter(id => id !== folderId));
    } else {
      setExpandedFolders([...expandedFolders, folderId]);
    }
  };

  const renderFolder = (folder) => {
    const isExpanded = expandedFolders.includes(folder.id);

    return (
      <div key={folder.id}>
        <div onClick={() => toggleFolder(folder.id)}>
          {isExpanded ? '-' : '+'} {folder.name}
        </div>
        {isExpanded && folder.children && folder.children.map(child => {
          if (child.type === 'folder') {
            return renderFolder(child);
          } else {
            return (
              <div key={child.id} style={{ marginLeft: '20px' }}>
                {child.name}
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div>
      {data.map(folder => renderFolder(folder))}
    </div>
  );
};

export default FolderTree; 

 