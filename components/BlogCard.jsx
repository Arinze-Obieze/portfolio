import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/urlFor'
import { FaArrowRight } from "react-icons/fa";

function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="group block">
      <div className="flex flex-col h-full">
        {/* Image Container - Aspect Ratio Square (1:1) - Best for Instagram style without cropping */}
        <div className="relative w-full aspect-square overflow-hidden rounded-md mb-6 bg-neutral-900">
          {post.mainImage ? (
             <img
               className="h-full w-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
               src={urlFor(post.mainImage).width(800).url()}
               alt={post.title}
             />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-neutral-600">
               <span className="text-sm uppercase tracking-widest font-light">No Visual</span>
            </div>
          )}
          
          {/* Overlay gradient for text legibility if needed, mostly clean though */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Metadata */}
          <div className="flex items-center space-x-3 text-xs md:text-sm text-neutral-400 mb-3 font-medium tracking-wide">
             <span className="text-teal-400 uppercase tracking-wider">{post.categories?.[0] || 'Thoughts'}</span>
             <span className="w-1 h-1 rounded-full bg-neutral-600" />
             <span>{new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>

          {/* Title - Large & Clean */}
          <h3 className="text-2xl font-bold text-neutral-100 mb-3 leading-tight group-hover:text-teal-400 transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt if available, or just visual spacer */}
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
            {/* Ideally we'd have an excerpt field, but using title/body snippets or just visual space for now */}
            Click to read more about this topic.
          </p>
          
          {/* 'Read More' Indicator - Text Button style */}
          <div className="mt-auto flex items-center text-white text-sm font-semibold group-hover:text-teal-400 transition-colors">
            <span className="mr-2">Read Article</span>
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300 text-xs" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
