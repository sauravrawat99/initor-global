import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
})

/**
 * Submit contact form
 * @param {{ name, email, company, phone, source, message }} data
 */
export async function submitContactForm(data) {
  const res = await api.post('/contact', data)
  return res.data
}

/**
 * Fetch blog posts
 */
export async function fetchBlogs() {
  const res = await api.get('/blogs')
  return res.data
}

/**
 * Fetch single blog post by slug
 */
export async function fetchBlogBySlug(slug) {
  const res = await api.get(`/blogs/${slug}`)
  return res.data
}

export default api