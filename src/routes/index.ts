import { routes as todoRoutes } from '@src/routes/todos';
import type { FastifyInstance } from 'fastify';

export function registerRoutes<FI extends FastifyInstance>(instance: FI) {
  instance.register(todoRoutes, { prefix: '/todos' });
}
