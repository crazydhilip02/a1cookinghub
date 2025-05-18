import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ritika Singh',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'Amazing products with fast delivery! I loved the experience.',
  },
  {
    id: 2,
    name: 'Vikram Reddy',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    rating: 4,
    text: 'Very helpful customer service and smooth order process.',
  },
  {
    id: 3,
    name: 'Meena Iyer',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    text: 'Great quality and the design is very Indian and authentic!',
  },
];

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);

  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text || rating === 0) return;

    const newTestimonial: Testimonial = {
      id: Date.now(),
      name,
      avatar: `https://i.pravatar.cc/150?u=${name}`,
      rating,
      text,
    };
    setTestimonials((prev) => [...prev, newTestimonial]);
    setName('');
    setRating(0);
    setText('');
  };

  return (
    <section className="py-16 bg-[#fff4e6] text-black">
      <div className="container mx-auto px-4">
        <div className="heading text-center mb-10">
          <h2 className="text-3xl font-bold text-[#5c2e00]">What Our Customers Say</h2>
          <p className="text-[#5c2e00] mt-2">Don’t just take our word for it – hear from our satisfied customers</p>
        </div>

        {/* Review Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto mb-12 bg-[#fbe9dd] p-6 rounded-lg shadow-md"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={30}
                onClick={() => setRating(i + 1)}
                onMouseEnter={() => setHoverRating(i + 1)}
                onMouseLeave={() => setHoverRating(0)}
                className={`cursor-pointer transition ${
                  (hoverRating || rating) > i ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-3 bg-white placeholder-black text-black rounded border border-gray-300"
            required
          />
          <textarea
            placeholder="Write your review..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full mb-4 p-3 bg-white placeholder-black text-black rounded border border-gray-300"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#5c2e00] text-white py-2 rounded hover:opacity-90"
          >
            Submit Review
          </button>
        </form>

        {/* Testimonials Display */}
        {testimonials.length > 0 && (
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-[#f9e8dc] rounded-lg p-8 text-center shadow-md">
                      <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#5c2e00]">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Stars First */}
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={
                              i < testimonial.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }
                          />
                        ))}
                      </div>

                      {/* Name Second */}
                      <h4 className="font-semibold text-xl text-[#5c2e00] mb-2">{testimonial.name}</h4>

                      {/* Review Last */}
                      <p className="text-lg italic text-black mt-2">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#5c2e00] rounded-full p-2 text-white focus:outline-none"
              onClick={goToPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#5c2e00] rounded-full p-2 text-white focus:outline-none"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-[#5c2e00]' : 'bg-gray-400'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
