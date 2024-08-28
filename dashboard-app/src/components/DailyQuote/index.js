import React, { useState, useEffect } from 'react';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch a daily quote from an API or use a static quote
    setQuote(`Everythig is Relative!    -    D. Bull`);
  }, []);

  return (
    <div className="component">
      <h3>Daily Quote</h3>
      <p>{quote}</p>
    </div>
  );
};

export default DailyQuote;
