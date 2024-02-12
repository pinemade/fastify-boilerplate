import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import {
  CreateTodoRequestBody,
  DeleteTodoByIDRequestParam,
  GetTodoByIDRequestParam,
  GetTodoByIDResponseBody,
  ListTodoQueryParam,
  ListTodoResponseBody,
  UpdateTodoByIDRequestParam,
  UpdateTodoRequestBody,
} from '@src/dtos';

export const routes: FastifyPluginAsyncTypebox = async function (
  fastify,
  _opts
) {
  /**
   * Create todos
   */
  fastify.post(
    '/',
    {
      schema: {
        description: 'Create single todo',
        tags: ['Todos'],
        body: CreateTodoRequestBody,
      },
    },
    async function (req, res) {}
  );

  /**
   * Get todos
   */
  fastify.get(
    '/',
    {
      schema: {
        description: 'Get todos',
        tags: ['Todos'],
        querystring: ListTodoQueryParam,
        response: ListTodoResponseBody,
      },
    },
    async function (req, res) {}
  );

  /**
   * Get todo by ID
   */
  fastify.get(
    '/:id',
    {
      schema: {
        description: 'Get todos',
        tags: ['Todos'],
        params: GetTodoByIDRequestParam,
        response: GetTodoByIDResponseBody,
      },
    },
    async function (req, res) {}
  );

  /**
   * Update todo by ID
   */
  fastify.put(
    '/:id',
    {
      schema: {
        description: 'Create todos',
        tags: ['Todos'],
        params: UpdateTodoByIDRequestParam,
        body: UpdateTodoRequestBody,
      },
    },
    async function (req, res) {}
  );

  /**
   * Delete todo by ID
   */
  fastify.delete(
    '/:id',
    {
      schema: {
        description: 'Delete todos',
        tags: ['Todos'],
        params: DeleteTodoByIDRequestParam,
      },
    },
    async function (req, res) {}
  );
};
