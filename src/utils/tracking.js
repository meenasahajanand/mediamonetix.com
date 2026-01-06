// Minimal click/lead tracker using localStorage; can be replaced with analytics later
export function track(eventName, payload = {}) {
  try {
    const now = new Date().toISOString()
    const key = 'mmx-tracking'
    const prev = JSON.parse(localStorage.getItem(key) || '[]')
    prev.push({ event: eventName, at: now, ...payload })
    localStorage.setItem(key, JSON.stringify(prev).slice(-5000))
  } catch {}
}

export function getEvents() {
  try {
    return JSON.parse(localStorage.getItem('mmx-tracking') || '[]')
  } catch {
    return []
  }
}


