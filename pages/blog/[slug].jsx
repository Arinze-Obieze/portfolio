import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { client } from '../../lib/sanity.client'
import { postQuery, postSlugsQuery } from '../../lib/sanity.queries'
import { urlFor } from '../../lib/urlFor'
import Layout from '../../components/Layout'
import { FaArrowLeft, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="relative w-full my-12 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/50">
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).width(1200).url()}
            className="object-cover w-full h-auto"
          />
           {value.alt && (
            <div className="text-center text-xs text-neutral-500 mt-2 py-2 italic">
              {value.alt}
            </div>
          )}
        </div>
      )
    },
    code: ({value}) => (
      <pre className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 overflow-x-auto my-8 font-mono text-sm text-neutral-300">
        <code>{value.code}</code>
      </pre>
    )
  },
  block: {
     h2: ({children}) => <h2 className="text-3xl font-bold text-white mt-16 mb-6 leading-tight">{children}</h2>,
     h3: ({children}) => <h3 className="text-2xl font-bold text-teal-400 mt-12 mb-4">{children}</h3>,
     h4: ({children}) => <h4 className="text-xl font-bold text-white mt-8 mb-4">{children}</h4>,
     normal: ({children}) => <p className="mb-6 text-neutral-300 text-lg leading-relaxed">{children}</p>,
     blockquote: ({children}) => (
       <blockquote className="border-l-4 border-teal-500 pl-6 py-2 my-10 bg-neutral-900/30 italic text-xl text-neutral-200 leading-relaxed shadow-sm">
         "{children}"
       </blockquote>
     ),
  },
  list: {
    bullet: ({children}) => <ul className="list-disc pl-6 mb-8 text-neutral-300 text-lg space-y-2">{children}</ul>,
    number: ({children}) => <ol className="list-decimal pl-6 mb-8 text-neutral-300 text-lg space-y-2">{children}</ol>,
  }
}

export default function BlogPost({ post }) {
  if (!post) return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">Loading...</div>

  return (
    <Layout>
      <Head>
        <title>{post.title} | Arinze Obieze</title>
        <meta name="description" content={post.title} />
      </Head>

      <article className="min-h-screen bg-[#0a0a0a] text-neutral-100">
        {/* Progress bar placeholder - could implement later */}
        
        <div className="max-w-3xl mx-auto px-6 md:px-0 py-20">
          
          <Link href="/blog" className="inline-flex items-center text-neutral-500 hover:text-teal-400 mb-12 transition-colors uppercase tracking-widest text-xs font-semibold">
            <FaArrowLeft className="mr-3 text-sm" /> Back to Journal
          </Link>

          <header className="mb-14">
            <div className="flex items-center space-x-4 mb-8">
                {post.categories && post.categories.map(cat => (
                    <span key={cat} className="text-xs font-bold uppercase tracking-widest text-teal-400 border border-teal-500/20 bg-teal-500/10 px-3 py-1.5 rounded-full">
                        {cat}
                    </span>
                ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
              {post.title}
            </h1>

            {/* Author & Date Block */}
            <div className="flex items-center justify-between border-t border-b border-neutral-900 py-6">
               <div className="flex items-center space-x-4">
                  {post.author?.image ? (
                    <img 
                      src={urlFor(post.author.image).width(100).url()} 
                      className="h-12 w-12 rounded-full object-cover border-2 border-neutral-800"
                      alt={post.author.name}
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold">
                       {post.author?.name?.charAt(0) || 'A'}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-white text-base">{post.author?.name}</p>
                    <p className="text-neutral-500 text-sm font-medium">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
               </div>

                {/* Social Share (Placeholder func) */}
               <div className="flex space-x-4 text-neutral-500">
                  <span className="hover:text-white cursor-pointer transition-colors"><FaTwitter /></span>
                  <span className="hover:text-white cursor-pointer transition-colors"><FaLinkedin /></span>
                  <span className="hover:text-white cursor-pointer transition-colors"><FaFacebook /></span>
               </div>
            </div>
          </header>

          {post.mainImage && (
            <div className="relative w-full h-auto overflow-hidden rounded-xl mb-16 shadow-2xl bg-neutral-900 border border-neutral-800">
               <img
                 src={urlFor(post.mainImage).width(1600).url()}
                 alt={post.title}
                 className="object-contain w-full h-auto"
               />
            </div>
          )}

          {/* Main Content Area - Optimised for Reading */}
          <div className="prose prose-invert prose-lg max-w-none">
             {/* Custom styling applied via ptComponents for cleaner control than standard Tailwind Typography */}
            <PortableText value={post.body} components={ptComponents} />
          </div>

          {/* Footer of Article */}
          <div className="mt-24 pt-12 border-t border-neutral-900">
             <h4 className="text-neutral-500 uppercase tracking-widest text-xs font-bold mb-8">Written by</h4>
             <div className="flex items-start space-x-6">
                {post.author?.image && (
                    <img 
                      src={urlFor(post.author.image).width(200).url()} 
                      className="h-20 w-20 rounded-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                      alt={post.author.name}
                    />
                )}
                <div>
                   <h3 className="text-white font-bold text-xl mb-2">{post.author?.name}</h3>
                   {post.author?.bio && (
                     <div className="text-neutral-400 leading-relaxed max-w-lg">
                       <PortableText value={post.author.bio} />
                     </div>
                   )}
                </div>
             </div>
          </div>

        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const post = await client.fetch(postQuery, { slug: params.slug })
  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}
