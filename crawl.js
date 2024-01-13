const {JSDOM} = require('jsdom')
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

function getURLSFromHTML(htmlBody, baseURL) {
    const links = []
    const domModel = new JSDOM(htmlBody)
    let elements =  domModel.window.document.querySelectorAll('a')
    for (const element of elements) {
        if (element.href.slice(0,1) === '/') {
            try {
                links.push(new URL(element.href, baseURL).href)
            } catch (err){
                console.log(`${err.message}: ${element.href}`)
            }
        } else {
            try {
                links.push(new URL(element.href).href)
            } catch (err) {
                console.log(`${err.message}: ${element.href}`)
            }
        }
    }
    return links
}







module.exports = {
    normalizeURL, getURLSFromHTML
}