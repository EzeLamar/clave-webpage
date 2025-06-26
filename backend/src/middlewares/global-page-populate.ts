/**
 * `global-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          images: {
            fields: ["alternativeText", "url"]
          },
          navLinks: true,
          items: {
            populate: {
              icon: true
            }
          }
        }
      },
      "blocks.products": true,
      "blocks.about-us": {
        populate: {
          items: {
            populate: {
              icon: true,
            }
          },
          image: {
            fields: ["alternativeText", "url"]
          }
        }
      },
      "blocks.markdown": true,
      "blocks.contact": true,
      "blocks.categories": {
        populate: {
          productLink: true,
        }
      },
      "blocks.opinions": true,
      "blocks.product-details": true,
    }
  }
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In global-page-populate middleware.');

    await next();
  };
};
