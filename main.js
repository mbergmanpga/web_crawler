const {getURLSFromHTML} = require("./crawl");
const crawl = require("./crawl");


const baseURL = "https://www.boot.dev/"

const htmlBody =

let links = crawl.getURLSFromHTML(htmlBody, baseURL)

for (let link of links) {
    console.log(link)
}