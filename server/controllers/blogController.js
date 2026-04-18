const blogs = [
  { id: 1, slug: 'how-to-outsource-accounting', title: 'How to Outsource Accounting Services Effectively', category: 'Accounting', date: '2024-01-15', excerpt: 'Key steps to successfully outsource your UK accounting needs.' },
  { id: 2, slug: 'small-business-outsource', title: 'How Initor Global helps small businesses outsource', category: 'Accounting', date: '2024-02-10', excerpt: 'Real benefits for small businesses using offshore accounting.' },
]

exports.getAllBlogs = (req, res) => res.json({ success: true, data: blogs })
exports.getBlogBySlug = (req, res) => {
  const blog = blogs.find(b => b.slug === req.params.slug)
  if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' })
  res.json({ success: true, data: blog })
}