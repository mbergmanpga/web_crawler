function normalizeURL(url) {
    const fullURL = new URL(url)
    const baseURL = fullURL.hostname
    const pathname = fullURL.pathname
    
    let normalizedURL = `${baseURL}${pathname}`
    if (normalizedURL.length > 0 && normalizedURL.slice(-1) === '/'){
        normalizedURL = normalizedURL.slice(0,-1)
    }
    
    return normalizedURL
}







module.exports = {
    normalizeURL
}