import { useEffect, useState } from "react";

export default function CopyToClipboard({ hex }) {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsCopied(false), 3000);
  }, [isCopied]);

  return (
    <>
      <button
        onClick={() => {
          navigator.clipboard.writeText(hex);
          setIsCopied(true);
        }}
      >
        {isCopied ? "Successfully copied!" : "copy"}
      </button>
    </>
  );
}
