import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) setShow(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm">
          We use cookies to improve experience and show relevant ads.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-blue-600 px-4 py-2 rounded text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
