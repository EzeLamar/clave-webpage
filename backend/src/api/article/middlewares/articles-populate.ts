/**
 * `articles-populate` middleware
 */
const populate = {
  images: {
    fields: ["alternativeText", "url"]
  },
}

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In articles-populate middleware.');

    await next();
  };
};
