// 모니터링하려는 요소에 대한 참조를 제공하기만 하면 useOnScreen이 뷰포트에 들어오거나 나갈 때 알려줍니다.

import { useEffect, useState } from "react";

export default function useOnScreen(ref, rootMargin = "0px") {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (ref.current == null) {
			return;
		}
		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ rootMargin }
		);
		observer.observe(ref.current);
		return () => {
			if (ref.current == null) {
				return;
			}
			observer.unobserve(ref.current);
		};
	}, [ref.current, rootMargin]);

	return isVisible;
}
