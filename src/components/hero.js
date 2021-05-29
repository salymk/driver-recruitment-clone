import React from 'react';

export const Hero = () => (
  <>
    <section>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4 lg:my-10">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="mb-8 text-4xl lg:text-4xl font-bold max-w-sm">
              Take care of your performance every day. performance every day
            </h2>
            <p className="mb-6 text-lg text-gray-500 leading-loose max-w-lg">
              Build a well-presented brand that everyone will love. Take care to
              develop resources continually and integrity them with previous
              projects.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-md md:px-10">
                  Schedule appointment
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-md md:px-10">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img
              className="object-cover w-full rounded-xl"
              src="https://images.unsplash.com/photo-1561157437-415893bd7149?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1165&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </>
);
