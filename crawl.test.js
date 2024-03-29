const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

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