import { fastifyCookie } from '@fastify/cookie';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';

import { constants } from '@src/constants';
import type { FastifyInstance } from 'fastify';

export function registerPlugin<FI extends FastifyInstance>(instance: FI) {
  instance.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Boilerplate API',
        version: '0.0.0',
        description: 'Boilerplate API template',
      },
    },
  });

  instance.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    staticCSP: true,
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (_request, _reply, next) {
        next();
      },
      preHandler: function (_request, _reply, next) {
        next();
      },
    },
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, _request, _reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });

  instance.register(fastifyCookie, {
    secret: constants.COOKIE_SECRET,
  });
}
