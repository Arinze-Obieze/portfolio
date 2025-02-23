const StatsSection = () => {
    const stats = [
      { value: "3+", label: "Years of Experience" },
      { value: "10+", label: "Projects Completed" },
      { value: "7+", label: "Happy Clients" },
      { value: "100%", label: "Client Satisfaction" },
    ];
  
    return (
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              My Stats
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              A quick glance at my achievements and experience.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <dt className="text-4xl font-extrabold text-teal-600">{stat.value}</dt>
                <dd className="mt-2 text-lg font-medium text-gray-900">{stat.label}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default StatsSection;