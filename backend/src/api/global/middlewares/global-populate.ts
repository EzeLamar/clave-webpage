/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  favicon: {
    fields: ["alternativeText", "url"]
  },
  defaultSeo: {
    populate: {
      shareImage: {
        fields: ["alternativeText", "url"]
      }
    }
  },
  header: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["alternativeText", "url"]
          }
        }
      },
      navItems: true
    }
  },
  banner: {
    populate: {
      link: true
    }
  },
  footer: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["alternativeText", "url"]
          }
        }
      },
      navItems: true,
      socialLinks: {
        populate: {
          image: {
            fields: ["alternativeText", "url"]
          }
        }
      }
    }
  },
  company: true
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In global-populate middleware.');

    await next();
  };
};
