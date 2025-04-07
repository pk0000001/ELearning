export default function MocktestM() {
    const mockTests = [
      { name: "VIT", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980681-300x300-1-150x150.png" },
      { name: "Manipal", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980693-300x300-1.png" },
      { name: "Comedk", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980668-300x300-1-150x150.png" },
    ];
  
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Mock Tests</h1>
  
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
          {mockTests.map((test, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg flex flex-col items-center p-4 w-full sm:w-64 h-56 transition transform hover:scale-105 hover:shadow-lg"
            >
              <img src={test.img} alt={test.name} className="w-24 h-24 mb-4" />
              <p className="text-lg font-semibold">{test.name}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Start Test
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  