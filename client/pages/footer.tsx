import React from 'react'

const footer = () => {
  return (
    <div className='footer'>


  {/* component */}
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />
  <footer className=" p-3 mb-2 bg-dark text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl fonat-semibold text-blueGray-500">
            Let's keep in touch!
          </h4>
          <h5 className="text-lg mt-0 mb-2 text-light">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            <button
              className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-twitter" />
            </button>
            <button
              className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-facebook-square" />
            </button>
            <button
              className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-dribbble" />
            </button>
            <button
              className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-github" />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                Useful Links
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-light hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation?ref=njs-profile"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-light hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com?ref=njs-profile"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-light hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial?ref=njs-profile"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="text-light hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                  >
                    Free Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                Other Resources
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-light hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                  >
                    MIT License
                  </a>
                </li>
                <li>
                  <a
                    className="text-light hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms?ref=njs-profile"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="text-light hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/privacy?ref=njs-profile"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-light hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us?ref=njs-profile"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
         
            <a
              href="https://www.creative-tim.com/product/notus-js"
              className="text-blueGray-500 hover:text-gray-800"
              target="_blank"
            >
              {" "}
              Walid Slim & 
            </a>
            <a
              href="https://www.creative-tim.com?ref=njs-profile"
              className="text-blueGray-500 hover:text-blueGray-800"
            >
              CO
            </a>
            .
         
        </div>
      </div>
    </div>
  </footer>

  
    </div>
  )
}

export default footer