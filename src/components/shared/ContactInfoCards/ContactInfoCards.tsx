import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfoCards = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone Card */}
        <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-500 p-4 rounded-full mb-6">
            <FaPhone className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 text-center">
            +123 456 789
          </h3>
        </div>

        {/* Email Card */}
        <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-500 p-4 rounded-full mb-6">
            <MdEmail className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 text-center">
            mail@vintar.com
          </h3>
        </div>

        {/* Address Card */}
        <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-500 p-4 rounded-full mb-6">
            <FaMapMarkerAlt className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 text-center">
            42 Summit Lane, Rivertown, OR 9743
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
