import React, { useRef } from 'react'
import Link from 'next/link'
import BlogCard from './BlogCard'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function RecentPosts({ posts }) {
  const scrollContainerRef = useRef(null);

  if (!posts || posts.length === 0) return null;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-20 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="flex flax-col md:flex-row md:items-end justify-between mb-12">
                <div>
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                     From the <span className="text-teal-400">Journal</span>
                   </h2>
                   <p className="text-neutral-400 max-w-md">
                     Recent thoughts on engineering, design patterns, MVPs, and building better software.
                   </p>
                </div>
                
                {/* Desktop Link */}
                <Link href="/blog" className="hidden md:flex items-center text-teal-400 hover:text-white transition-colors font-medium group">
                    View all posts <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Mobile Arrows Controls */}
                <div className="flex md:hidden space-x-4 mt-6 md:mt-0">
                    <button 
                        onClick={scrollLeft}
                        className="p-3 rounded-full border border-neutral-800 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors active:scale-95"
                        aria-label="Scroll Left"
                    >
                        <FaChevronLeft />
                    </button>
                    <button 
                        onClick={scrollRight}
                        className="p-3 rounded-full border border-neutral-800 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors active:scale-95"
                        aria-label="Scroll Right"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Content - Swipeable on Mobile (Hidden Scrollbar), Grid on Desktop */}
            <div 
                ref={scrollContainerRef}
                className="
                flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-2 -mx-6 px-6 
                md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:space-x-0 md:pb-0 md:mx-0 md:px-0
                scrollbar-hide
            "
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} /* Hide scrollbar for Firefox/IE */
            >
                {posts.map((post) => (
                    <div key={post._id} className="min-w-[85vw] md:min-w-0 snap-center">
                        <BlogCard post={post} />
                    </div>
                ))}
            </div>
            
             {/* Mobile View All Link (Bottom) */}
             <div className="md:hidden mt-10 text-center">
                <Link href="/blog" className="inline-flex items-center text-teal-400 font-medium text-sm tracking-wide uppercase">
                    See all articles <FaArrowRight className="ml-2" />
                </Link>
             </div>

        </div>
    </div>
  )
}

export default RecentPosts
