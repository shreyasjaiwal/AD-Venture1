import React from "react";

const Timeline = () => {
  return (
    <div className="w-full bg-center bg-cover custom-img3 py-16 px-4 section" id="timeline">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center py-4">
          TIMELINE
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-9 px-2 py-10">
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-2xl font-medium py-2">10th March Registrations Opens</h1>
              <p className="text-gray-100 sm:text-sm text-xs">
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#ff5757] text-white text-center">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#ff5757] text-white text-center">
              2
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-2xl font-medium py-2">22nd March Closing of Registrations</h1>
              {/* <p className="text-gray-100 sm:text-sm text-xs">
              Deadline for the registration of startups for Expo.
              </p> */}
            </div>
          </div>

          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-2xl font-medium py-2">29th March Deadline for submission of entries</h1>
              {/* <p className="text-gray-100 sm:text-sm text-xs">
                Shortlisted Strtups will be signing the MOUs and further details will be communicated.
              </p> */}
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#ff5757] text-white text-center">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#ff5757] text-white text-center">
              4
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-2xl font-medium py-2"> 1st April Result declaration </h1>
              {/* <p className="text-gray-100 sm:text-sm text-xs">
               Awaiting Startups to showcase their amazing ideas and products.
              </p> */}
            </div>
          </div>



          
        </div>
      </div>
    </div>
  );
};

export default Timeline;
