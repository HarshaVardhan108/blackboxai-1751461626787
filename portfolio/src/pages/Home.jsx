import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="section-padding bg-light-pink">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-dark-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600">
                Optimized for speed and efficiency in every project we deliver.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-dark-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600">
                Flexible solutions tailored to meet your specific needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-dark-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable</h3>
              <p className="text-gray-600">
                Dependable solutions you can trust for your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-teal text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life with modern web solutions.
          </p>
          <a href="/contact" className="btn bg-mint-green text-dark-teal hover:bg-teal">
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
