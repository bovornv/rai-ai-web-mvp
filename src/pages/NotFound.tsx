import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {

  return (
    <>
      <SEO
        title="ไม่พบหน้า | 404 | Rai AI"
        description="ไม่พบหน้าที่คุณกำลังมองหา"
        keywords="404, ไม่พบหน้า, หน้าไม่พบ"
        url="https://raiai.app/404"
      />
      <div className="min-h-screen bg-gradient-to-br from-rai-green-50 to-rai-teal-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="w-24 h-24 bg-gradient-to-r from-rai-green-500 to-rai-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">🌱</span>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4 ">
            404
          </h1>
          
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 ">
            ไม่พบหน้าที่คุณกำลังมองหา
          </h2>
          
          <p className="text-gray-600 mb-8 ">
            หน้าที่คุณกำลังมองหาอาจถูกลบหรือย้ายไปที่อื่นแล้ว
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span className="">กลับหน้าแรก</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="">กลับหน้าก่อนหน้า</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
