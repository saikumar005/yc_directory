import { defineQuery } from "next-sanity";

export const STARTUP_QUERY=defineQuery(`
    *[_type=="startup" && defined(slug.current)]{
  _id,
    title,slug,
    _createdAt,
    author->{
      _id,
      name,
      bio,
      image
    },
    views,
    description,
    category,
    image
}
    `)