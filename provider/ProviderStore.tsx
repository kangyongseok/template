"use client";

import { Provider } from "jotai";

function ProviderStore({ children }) {
	return <Provider>{children}</Provider>;
}

export default ProviderStore;
