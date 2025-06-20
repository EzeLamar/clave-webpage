/**
 * `categories-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  image: {
    fields: ["alternativeText", "url"]
  },
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In categories-populate middleware.');

    await next();
  };
};
