import { useCallback, useEffect, useRef } from "react";

type CallbackFunction = () => void;

export default function useTimeout(callback: CallbackFunction, delay: number) {
	const callbackRef = useRef<CallbackFunction>(callback);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const set = useCallback(() => {
		timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
	}, [delay]);

	const clear = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}, []);

	useEffect(() => {
		set();
		return clear;
	}, [delay, set, clear]);

	const reset = useCallback(() => {
		clear();
		set();
	}, [clear, set]);

	return { reset, clear };
}
