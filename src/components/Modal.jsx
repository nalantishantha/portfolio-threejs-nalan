import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-200 bg-opacity-80 backdrop-blur-sm">
      <div className="bg-black-300 border border-black-200 p-8 rounded-xl max-w-md w-full relative mx-4 shadow-2xl transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white-500 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Which CV would you like to download?</h2>
        
        <div className="flex flex-col gap-4">
          <a
            href="/assets/K.V.N.T.Liyanage_SE.pdf"
            download
            className="flex gap-4 items-center justify-center cursor-pointer p-4 rounded-md bg-black-200 hover:bg-black-100 transition-all text-white mx-auto w-full font-semibold border border-black-300"
            onClick={onClose}
          >
            Software Engineer
          </a>
          
          <a
            href="/assets/K.V.N.T.Liyanage_AI.pdf"
            download
            className="flex gap-4 items-center justify-center cursor-pointer p-4 rounded-md bg-white hover:bg-white/90 transition-all text-black mx-auto w-full font-semibold"
            onClick={onClose}
          >
            AI/ML Engineer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
