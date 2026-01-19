import { useState, useMemo } from 'react'
import Head from 'next/head'
import { client } from '../../lib/sanity.client'
import { postsQuery } from '../../lib/sanity.queries'
import BlogCard from '../../components/BlogCard'
import Layout from '../../components/Layout'

export default function BlogIndex({ posts }) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const allCats = posts?.flatMap(post => post.categories || []) || [];
    return ['All', ...new Set(allCats)];
  }, [posts]);

  // Filter posts based on active category
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter(post => post.categories?.includes(activeCategory));
  }, [activeCategory, posts]);


  return (
    <Layout>
      <Head>
        <title>Journal | Arinze Obieze</title>
        <meta name="description" content="Thoughts on engineering, design, and the future of web." />
      </Head>

      <div className="min-h-screen bg-[#0a0a0a] text-neutral-100">
         <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-20 md:py-32">
            
            {/* Header Section - Big Typography */}
            <header className="mb-16 md:mb-24">
              <span className="block text-teal-500 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6">
                The Journal
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-tight max-w-4xl">
                Insights on <br/>
                <span className="text-neutral-500">Startups</span> & Code.
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-12">
                A collection of thoughts, tutorials, and experiments exploring the intersection of technical excellence and startup dynamics.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-4 border-b border-neutral-900 pb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                      ${activeCategory === category 
                        ? 'bg-teal-500 text-black border-teal-500' 
                        : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'}
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </header>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 min-h-[50vh]">
              {filteredPosts?.length > 0 ? (
                filteredPosts.map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-2xl text-neutral-600 font-light">No posts found in this category.</p>
                  <button 
                    onClick={() => setActiveCategory('All')}
                    className="mt-6 text-teal-500 hover:text-teal-400 transition-colors"
                  >
                    View all posts
                  </button>
                </div>
              )}
            </div>

            {/* Footer / Newsletter placeholder */}
            <div className="mt-40 border-t border-neutral-900 pt-12 flex justify-between items-center text-neutral-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Arinze Obieze.</p>
                <p>Built with Sanity + Next.js</p>
            </div>
         </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(postsQuery)

  return {
    props: {
      posts,
    },
    // revalidate every 60 seconds
    revalidate: 60,
  }
}
