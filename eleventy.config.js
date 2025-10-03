import process from 'node:process'

import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

const serviceName = 'Select for Invitation (SPI) guidance'

export default function (eleventyConfig) {
  // Register the NHS.UK Eleventy plugin
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    templates: {
      feed: {
        title: serviceName
      },
      tags: true,
      searchIndex: true
    },
    header: {
      service: {
        text: serviceName,
        href: '/'
      }
    },
    footer: {
      meta: {
        items: [
          {
            text: 'Sitemap',
            href: '/sitemap'
          },
          {
            text: 'Subscribe to feed',
            href: '/feed.xml'
          },
          {
            text: 'Tags',
            href: '/tags'
          }
        ],
        text: 'All data and personal information shown in prototypes are fictional and for demonstration purposes only.'
      }
    },
    url:
      process.env.GITHUB_ACTIONS &&
      'https://asudbury.github.io/nhs-spi-guidance/',
    
    // Configure the header
    header: {
      service: {
        name: 'NHS SPI Guidance',
        href: '/'
      }
    },
    
    // Configure the footer
    footer: {
      copyright: {
        text: '© Crown copyright'
      },
      links: [
        {
          URL: '/privacy',
          label: 'Privacy policy'
        },
        {
          URL: '/cookies',
          label: 'Cookies'
        }
      ]
    },
    
    // Enable heading permalinks
    markdown: {
      headingPermalinks: true
    },
    
    // Enable additional templates
    templates: {
      sitemap: true,
      searchIndex: true
    }
  })

  // Pass through assets
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Configuration
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      output: '_site'
    },
    // Set path prefix for GitHub Pages
    pathPrefix: process.env.GITHUB_ACTIONS && '/nhs-spi-guidance/'
  }
}
