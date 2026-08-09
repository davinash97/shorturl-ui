"use client";

import { useRouter } from "next/navigation";

function useNavigation() {
	const router = useRouter();

	const navigate = (location: string) => {
		router.push(location);
	};
	return navigate;
}

export { useNavigation }