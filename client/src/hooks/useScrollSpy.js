import { useState, useEffect } from 'react'

/**
 * useScrollSpy — tracks which section ID is currently in viewport
 * @param {string[]} ids - array of section element IDs
 * @param {number} offset - top offset in px (e.g. navbar height)
 * @returns {string} — active section id
 */
export function useScrollSpy(ids = [], offset = 80) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0,
      }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, offset])

  return activeId
}