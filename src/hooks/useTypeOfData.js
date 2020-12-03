import React, { useState } from 'react';

const useTypeofData = () => {
	const [isFriendSelected, setIsFriendSelected] = useState(null);

	return {
		isFriendSelected,
		setIsFriendSelected,
	};
};

export default useTypeofData;
