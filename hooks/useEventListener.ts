import { useEffect, useRef, RefObject } from "react";

type EventType = keyof DocumentEventMap;

export default function useEventListener<K extends EventType>(
  eventType: K,
  callback: (event: DocumentEventMap[K]) => void,
  element?: Document | RefObject<HTMLElement>
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const targetElement: Document | HTMLElement | null = 
      (element && 'current' in element) ? element.current : 
      element || 
      document;

    if (!targetElement) {
      return;
    }

    const handler = (e: Event) => {
      callbackRef.current(e as DocumentEventMap[K]);
    };
    targetElement.addEventListener(eventType, handler);

    return () => targetElement.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
