import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScanResult, getConfidenceColor, getCropIcon } from '../mocks/scanMock';

type Props = {
  result: ScanResult;
  imagePreview?: string;
};

const ResultCard = ({ result, imagePreview }: Props) => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{getCropIcon(result.crop)}</span>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {isThai ? result.conditionTh : result.conditionEn}
              </h3>
              <p className="text-sm text-gray-600">
                {isThai ? result.conditionEn : result.conditionTh}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border ${getConfidenceColor(result.confidence)}`}>
              {isThai ? result.confidenceTh : result.confidenceEn}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-6">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={imagePreview}
                alt="Scanned leaf"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        )}

        {/* Recommendations */}
        <div className="mb-6">
          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            {isThai ? 'คำแนะนำ' : 'Recommendations'}
          </h4>
          <ol className="space-y-3">
            {(isThai ? result.stepsTh : result.stepsEn).map((step, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* PPE Notice */}
        {result.ppeTh && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <div className="text-yellow-600 mt-1">⚠️</div>
              <div>
                <h5 className="font-semibold text-yellow-800 mb-2 flex items-center space-x-2">
                  <span>{isThai ? 'อุปกรณ์ป้องกัน' : 'Safety Equipment'}</span>
                  {result.ppeIcons && (
                    <div className="flex space-x-1">
                      {result.ppeIcons.map((icon, index) => (
                        <span key={index} className="text-lg">{icon}</span>
                      ))}
                    </div>
                  )}
                </h5>
                <p className="text-yellow-700 text-sm">
                  {isThai ? result.ppeTh : result.ppeEn}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Safety Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="text-blue-600">ℹ️</div>
            <p className="text-blue-800 text-sm font-medium">
              {isThai 
                ? 'ผลลัพธ์เป็นคำแนะนำจาก AI—โปรดสังเกตอาการจริงร่วมด้วย' 
                : 'AI guidance only—always double-check in the field'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
