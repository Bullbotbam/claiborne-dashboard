import React, { useState } from 'react';

const DailyChallenge = () => {
	const [challenge, setchallenge] = useState('');

	return (
		<div className="component">
			<h3>Daily Challenge</h3>
			<textarea
				value={challenge}
				onChange={(e) => setchallenge(e.target.value)}
				placeholder="Enter your challenge/resolution here"
			/>
		</div>
	);
};

export default DailyChallenge;
