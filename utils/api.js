// API utility functions
const getApiUrl = () => {
  const localDevUrl = 'https://vibebitesbackend-production.up.railway.app/api'
  const isLocalhost = () =>
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1')

  // Use environment variable if available
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL
  }

  // In browser, prefer local backend when running dev locally
  if (typeof window !== 'undefined') {
    if (process.env.NODE_ENV === 'development' || isLocalhost()) {
      return localDevUrl
    }
    // Production browser should hit the rewrite proxy
    return '/api'
  }

  // Server-side rendering fallback
  if (process.env.NODE_ENV === 'development') {
    return localDevUrl
  } 

  return 'https://vibebitesbackend-production.up.railway.app/api'
}

const buildApiUrl = (endpoint) => {
  const baseUrl = getApiUrl()
  // Remove trailing slash from baseUrl and leading slash from endpoint
  const cleanBaseUrl = baseUrl.replace(/\/$/, '')
  const cleanEndpoint = endpoint.replace(/^\//, '')
  return `${cleanBaseUrl}/${cleanEndpoint}`
}

export { getApiUrl, buildApiUrl }
