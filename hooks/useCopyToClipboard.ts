import copy from "copy-to-clipboard";
import { useState } from "react";

interface CopyOptions {
  debug?: boolean;
  message?: string;
  format?: string; // MIME type
}

export default function useCopyToClipboard(): [
  (text: string, options?: CopyOptions) => void,
  { value: string | undefined; success: boolean | undefined }
] {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<boolean | undefined>(undefined);

  const copyToClipboard = (text: string, options?: CopyOptions) => {
    const result = copy(text, options);
    if (result) {
      setValue(text);
    }
    setSuccess(result);
  };

  return [copyToClipboard, { value, success }];
}
