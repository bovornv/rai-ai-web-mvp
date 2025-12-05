import { useTranslation } from 'react-i18next';
import { Download, FileText, Archive } from 'lucide-react';
import SEO from '../components/SEO';

const Physics1 = () => {
  const { t } = useTranslation();

  const files = [
    {
      name: 'AP Physics 1 FRQs',
      filename: '1.AP Physics 1 FRQs.pdf',
      path: '/physics1/1.AP Physics 1 FRQs.pdf',
      type: 'pdf',
      icon: FileText,
      description: 'AP Physics 1 Free Response Questions'
    },
    {
      name: 'Physics I FRQ Problems',
      filename: '2.physics-I-frq-problems.zip',
      path: '/physics1/2.physics-I-frq-problems.zip',
      type: 'zip',
      icon: Archive,
      description: 'Physics I Free Response Question Problems Archive'
    },
    {
      name: 'Physics I FRQ Solutions',
      filename: '3.physics-I-frq-solutions.zip',
      path: '/physics1/3.physics-I-frq-solutions.zip',
      type: 'zip',
      icon: Archive,
      description: 'Physics I Free Response Question Solutions Archive'
    }
  ];

  return (
    <>
      <SEO
        title="Physics 1 Resources | AP Physics 1 FRQs | Rai AI"
        description="Download AP Physics 1 Free Response Questions, problems, and solutions"
        keywords="AP Physics 1, FRQ, physics problems, physics solutions"
        url="https://raiai.app/physics1"
      />
      <div className="min-h-screen bg-gradient-to-br from-rai-green-50 to-rai-teal-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-rai-green-500 to-rai-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Physics 1 Resources
            </h1>
            <p className="text-lg text-gray-600">
              Download AP Physics 1 Free Response Questions and Solutions
            </p>
          </div>

          {/* Files Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file, index) => {
              const Icon = file.icon;
              return (
                <div key={index} className="card hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-rai-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-rai-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {file.name}
                      </h3>
                      <p className="text-sm text-gray-600 truncate">
                        {file.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a
                      href={file.path}
                      download={file.filename}
                      className="btn-primary w-full text-center flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                    <p className="text-xs text-gray-500 text-center mt-2 truncate">
                      {file.filename}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Section */}
          <div className="mt-12 card bg-blue-50 border border-blue-200">
            <div className="flex items-start space-x-3">
              <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  About These Resources
                </h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  These files contain AP Physics 1 Free Response Questions (FRQs) along with problems and solutions. 
                  Use these resources to practice and prepare for your AP Physics 1 exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Physics1;

