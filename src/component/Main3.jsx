export default function TwoBoxes() {
  const handleClick = () => {
    window.open("https://www.digistore24.com/product/572074/200149?cid=d8j5dm1fjbsv27g9jh8v9jfa&utm_term=d8j5dm1fjbsv27g9jh8v9jfa", "_blank");
  };
  return (
      <div className=" bg-[#fef8ef] h-auto pb-5" >
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-8 bg-[#fef8ef]  h-auto">
      
      {/* Box 1 */}
      <div className="bg-gradient-to-b from-[#f9f1fb] to-[#fdf4e3] p-6 rounded-xl shadow-md w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
          What You'll Discover in This Guide
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <i>The real reason you’re attracted to avoidant partners</i>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <i>Why chaos can feel more familiar than connection</i>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <i>How your nervous system may be bonded to rejection</i>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <i>A 7-minute exercise to begin emotional rewiring</i>
          </li>
        </ul>
      </div>

      {/* Box 2 */}
      <div className="bg-gradient-to-b from-[#f9f1fb] to-[#fdf4e3] p-6 rounded-xl shadow-md w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
          What You'll Get
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            The Inner Relationship Blueprint
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            7-Minute Healing Exercise (Audio)
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            30-Day Free Access to the Healing Portal
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            60-Day No-Risk Guarantee
          </li>
        </ul>
      </div>
     

    </div>
    <div className="space-y-2 text-center">
          <p className="text-lg font-bold">Only $19.90</p>
          <p className="text-sm text-gray-700">
            (Regular Price $58 – 60% Off Today Only)
          </p>
          <button onClick={handleClick} className="px-6 py-3 text-xs font-bold tracking-wider text-center text-white uppercase transition bg-black rounded hover:bg-red-700">
            Get My Copy Now 

          </button>
          <p className="pt-3">Instant digital delivery. Secure checkout. Zero risk.</p>
        </div>

      </div>
  );
}
