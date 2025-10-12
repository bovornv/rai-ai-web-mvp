import React, { useRef, useState, useCallback } from "react";
import { useTranslation } from 'react-i18next';

type Props = {
  onImage: (file: File) => void;   // parent handles downscale + mock "analysis"
  scansLeft: number;               // 0..2
};

export default function ScanArea({ onImage, scansLeft }: Props) {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const disabled = scansLeft <= 0;

  const validateImage = (file: File): string | null => {
    // Check file type
    if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
      return t('scan.scanDemo.validation.invalidFormat');
    }
    
    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return t('scan.scanDemo.validation.fileTooLarge');
    }
    
    return null;
  };

  const handleFiles = useCallback((files: FileList | null) => {
    console.log('ScanArea handleFiles called with:', files);
    setError(null);
    if (!files || !files[0]) {
      console.log('No files provided');
      return;
    }
    const f = files[0];
    console.log('Processing file:', f.name, f.type, f.size);
    
    // Validate file
    const validationError = validateImage(f);
    if (validationError) {
      console.log('Validation error:', validationError);
      setError(validationError);
      return;
    }
    
    console.log('File validation passed, calling onImage');
    onImage(f);
  }, [onImage, t]);

  return (
    <div className="space-y-4">
      {/* Scan Area */}
      <label
        className={[
          "rounded-2xl border-2 border-dashed",
          disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
          dragOver ? "border-green-600 bg-green-50" : "border-gray-300 bg-white",
          "p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[240px]",
          "transition-all duration-200 hover:border-green-400 hover:bg-green-50",
          "focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2"
        ].join(" ")}
        onClick={() => {
          console.log('ScanArea clicked, disabled:', disabled);
          if (!disabled && inputRef.current) {
            console.log('Triggering file input click');
            inputRef.current.click();
          }
        }}
        onDragEnter={(e) => { e.preventDefault(); if (!disabled) setDragOver(true); }}
        onDragOver={(e) => { e.preventDefault(); }}
        onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
        onDrop={(e) => {
          e.preventDefault(); 
          setDragOver(false);
          if (disabled) return;
          handleFiles(e.dataTransfer.files);
        }}
        aria-disabled={disabled}
      >
        <div className="text-6xl mb-4">📷</div>
        <div className="text-2xl font-bold text-gray-900 mb-2">
          {isThai ? 'สแกน' : 'scan'}
        </div>
        <div className="text-lg text-gray-600 mb-2">
          {isThai 
            ? "แตะเพื่อถ่ายภาพ หรือ ลากรูปมาวาง" 
            : "Tap to use camera or drag & drop"
          }
        </div>
        <div className="text-sm text-gray-500">
          {t('scan.scanDemo.scanLimit')}
        </div>

        {/* Single input that covers BOTH camera capture (mobile) AND file picker (desktop) */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          // This hint opens rear camera on mobile; harmless on desktop
          capture="environment"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
          aria-label={isThai ? "อัปโหลดหรือถ่ายภาพใบพืช" : "Upload or capture crop leaf image"}
        />
      </label>

      {disabled && (
        <div className="text-center">
          <p className="text-amber-700 bg-amber-50 px-4 py-2 rounded-lg">
            {t('scan.scanDemo.demoLimit')}
          </p>
        </div>
      )}
      
      {error && (
        <div className="text-center">
          <p className="text-red-700 bg-red-50 px-4 py-2 rounded-lg">
            {error}
          </p>
        </div>
      )}
    </div>
  );
}
