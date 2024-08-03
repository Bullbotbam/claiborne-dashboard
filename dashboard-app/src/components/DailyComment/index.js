import React, { useState } from 'react';

const DailyComment = () => {
  const [comment, setComment] = useState('');

  return (
    <div className="component">
      <h3>Daily Comment</h3>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment here"
      />
    </div>
  );
};

export default DailyComment;
