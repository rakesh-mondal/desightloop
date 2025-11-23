"use client"

export function GTMSuccess() {
  return (
    <section className="w-full pt-16 md:pt-20 lg:pt-24 pb-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
          {/* Main Headline */}
          <h2 className="text-lg font-semibold text-pretty lg:text-3xl text-center w-full text-gray-900">
            Guarantee your GTM Success
          </h2>
          
          {/* Sub-headline */}
          <div className="max-w-3xl mx-auto space-y-2">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Outstanding Results without spending more
            </p>
          </div>

          {/* KPIs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-[10px] w-full max-w-5xl mx-auto mt-8 sm:mt-12">
            {/* KPI 1 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#5716EF]">
                4X
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium text-center">
                Qualified Pipeline
              </p>
            </div>

            {/* KPI 2 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#5716EF]">
                2X
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium text-center">
                Deals Closed
              </p>
            </div>

            {/* KPI 3 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#5716EF]">
                10%
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium text-center">
                Churn Reduction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

