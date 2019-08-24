# Fetch Crawler

###### [API](https://github.com/yujiosaka/headless-chrome-crawler/blob/master/docs/API.md) | [Examples](https://github.com/yujiosaka/headless-chrome-crawler/tree/master/examples) | [Code of Conduct](https://github.com/yujiosaka/headless-chrome-crawler/blob/master/docs/CODE_OF_CONDUCT.md) | [Contributing](https://github.com/yujiosaka/headless-chrome-crawler/blob/master/docs/CONTRIBUTING.md) | [Changelog](https://github.com/yujiosaka/headless-chrome-crawler/blob/master/docs/CHANGELOG.md)

Distributed crawler powered by Fetch Crawler

## Features

Fetch Crawler is designed to provide a basic, flexible and robust API for crawling websites. 

Powered by Headless Chrome, the crawler provides [simple APIs](#api-reference) to crawl these dynamic websites with the following features:

* Distributed crawling
* Configure parallel, retry, max requests, ...
* Support both [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search) and [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) algorithm
* Stop at the max request
* Insert [Cheerio](https://cheerio.js.org/) automatically for scraping
* [Promise] support

## Getting Started

### Installation

```
# npm i @viclafouch/fetch-crawler
```

> **Note**: Fetch Crawler does not contain [Puppeteer](https://github.com/GoogleChrome/puppeteer). It using the [fetch-node](https://www.npmjs.com/package/node-fetch) module.

### Usage

```js
import FetchCrawler from '@viclafouch/fetch-crawler'

const collectContent = $ => $('body').find('h1').text().trim()

const doSomethingWith = (content, url) => console.log(`Here the title ${content} get from ${url}`)

FetchCrawler.launch({
  url: 'https://github.com',
  evaluatePage: $ => collectContentCards($),
  onSuccess: ({ result, url }) => doSomethingWith(result, url)
})
```

## FAQ

### How is this different from other crawlers?

### How is this different from Puppeteer?

This crawler is built on top of [node-fetch](https://www.npmjs.com/package/node-fetch).

[Puppeteer](https://github.com/GoogleChrome/puppeteer) is a project from the Google Chrome team which enables us to control a Chrome (or any other Chrome DevTools Protocol based browser) and execute common actions, much like in a real browser. Fetch Crawler is a static crawler based on simple requests to HTML files. So it will be difficult to scrap the contents when the HTML dynamically changes on browsers.