// Blog registry. Empty for now — scaffold only.
// To add a post: { slug, title, date, summary, tags, body }
// `body` can be an array of { heading?, paragraphs: string[] } sections.
export const posts = []

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug)
