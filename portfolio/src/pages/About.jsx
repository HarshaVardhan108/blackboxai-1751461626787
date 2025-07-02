const About = () => {
  return (
    <div className="min-h-screen bg-light-pink">
      {/* Hero Section */}
      <section className="bg-dark-teal text-white py-20">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl">
            Building innovative solutions for sustainable space operations and traffic management.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                We are dedicated to revolutionizing space operations through innovative
                technology solutions. Our mission is to make space exploration safer
                and more sustainable for future generations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <svg
                      className="text-dark-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Advanced space traffic monitoring systems
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <svg
                      className="text-dark-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Cutting-edge collision avoidance technology
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <svg
                      className="text-dark-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Sustainable space operations management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-dark-teal text-white py-16">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-mint-green mb-2">100+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-mint-green mb-2">50+</div>
              <div className="text-lg">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-mint-green mb-2">10+</div>
              <div className="text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">Chief Executive Officer</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-gray-600">Lead Engineer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
