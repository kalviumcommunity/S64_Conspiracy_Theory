import React from 'react';

const TheoryDisplay = ({ theory }) => {
  // Handle both client-side and backend data structures
  const keywords = theory.keywords || (theory.tags && theory.tags.map(tag => 
    typeof tag === 'string' ? tag : tag.name || 'Unknown'
  )) || [];
  
  // Enhanced user validation to ensure we display username when available
  let createdBy = 'Anonymous';
  if (theory.createdBy) {
    if (typeof theory.createdBy === 'object' && theory.createdBy.username) {
      createdBy = theory.createdBy.username;
    } else if (typeof theory.createdBy === 'string') {
      // If it's just an ID, we'll display 'User' instead of the raw ID
      createdBy = 'User';
    }
  }
  
  const createdAt = theory.createdAt ? new Date(theory.createdAt).toLocaleDateString() : '';
  
  return (
    <div className="bg-gray-700 rounded-lg p-6 border border-gray-600 theory-card">
      <h4 className="text-xl font-bold mb-2 text-indigo-300 title-font">{theory.title}</h4>
      <p className="mb-4">{theory.content}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {keywords.map((keyword, index) => (
            <span key={index} className="bg-gray-800 px-2 py-1 rounded text-xs">
              {keyword}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-black-400 hover:text-indigo-400 btn-like">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{theory.likes || 0}</span>
          </button>
          {theory.shares !== undefined && (
            <div className="flex items-center gap-1 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>{theory.shares}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        {createdBy && (
          <div className="text-sm text-gray-400">
            By: {createdBy} {createdAt && `• ${createdAt}`}
          </div>
        )}
        <div className="flex gap-2">
          <button className="text-sm px-4 py-1 rounded btn-save">
            Save
          </button>
          <button className="text-sm px-4 py-1 rounded btn-share">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheoryDisplay;