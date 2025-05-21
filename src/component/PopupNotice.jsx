import { useState, useEffect } from 'react';

const PopupNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setIsVisible(true);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="p-6 max-w-md bg-white shadow-xl rounded-lg">
          <h2 className="text-xl font-bold">Kennisgewing</h2>
          <p className="mt-2 text-gray-700">
            Die webtuiste wys nog informasie vir die skou van 2024, wanneer ons
            nuwe informasie kry vir 2025 sal die webtuiste opgedateer word.
          </p>
          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={closePopup}>
            Got it!
          </button>
        </div>
      </div>
    </>
  );
};

export default PopupNotice;
