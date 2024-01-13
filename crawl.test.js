const { test, expect } = require('@jest/globals')
const { normalizeURL, getURLSFromHTML } = require('./crawl.js')

// Test normalizeURL Function
test('https://blog.boot.dev/path/ to equal blog.boot.dev/path', () =>{
    expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
});

test('http://blog.boot.dev/path/ to equal blog.boot.dev/path', () =>{
    expect(normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
});

test('https://blog.boot.dev/path to equal blog.boot.dev/path', () =>{
    expect(normalizeURL('https://blog.boot.dev/path')).toBe('blog.boot.dev/path');
});

test('http://blog.boot.dev/path to equal blog.boot.dev/path', () =>{
    expect(normalizeURL('http://blog.boot.dev/path')).toBe('blog.boot.dev/path');
});

test('Normalize capitals in domain', () => {
    expect(normalizeURL('https://BLOG.boot.dev/path/')).toBe('blog.boot.dev/path');
});

// Test getURLsFromHTML function

test('Retrieve a single url from html', () => {
    expect(getURLSFromHTML('<html><body><a href="https://blog.boot.dev"><span>Boot.dev></span></a></body></html>', "https://blog.boot.dev")).toEqual((['https://blog.boot.dev/']))
})

test('getURLs from a relative path', () => {
    const inputURL = 'https://blog.boot.dev'
    const htmlBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>'
    const result = getURLSFromHTML(htmlBody, inputURL)
    const expected = ['https://blog.boot.dev/path/one']
    expect(result).toEqual(expected)
})

