/**
 * `products-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  images: {
    fields: ["alternativeText", "url"]
  },
  features: true
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In products-populate middleware.');

    await next();
  };
};
