import { RefObject } from "react";

import useEventListener from "./useEventListener";

export default function useClickOutside(ref: RefObject<HTMLElement>, cb: (event: MouseEvent) => void) {
  useEventListener(
    "click",
    (e: MouseEvent) => {
      if (ref.current == null || ref.current.contains(e.target as Node)) {
        return;
      }
      cb(e);
    },
    document
  );
}
