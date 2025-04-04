/**
 * `landing-images-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  Images: {
    fields: ["url"],
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-images-populate middleware.");
    ctx.query.populate = populate;

    await next();
  };
};
