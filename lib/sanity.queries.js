import { groq } from 'next-sanity'

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    "author": author->{name, image}
  }
`

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    "author": author->{
      name, 
      image,
      bio
    },
    body
  }
`

export const featuredPostsQuery = groq`
  *[_type == "post"] | order(featured desc, publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    "author": author->{name, image}
  }
`

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`
