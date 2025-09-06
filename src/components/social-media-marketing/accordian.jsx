import React from 'react'

function accordian({items}) {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-md">
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 font-semibold flex justify-between items-center transition"
          >
            <span>{item.question}</span>
            <span className="text-xl">
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-[300px] p-5" : "max-h-0 px-5"
            }`}
          >
            <p className="text-gray-700">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default accordian