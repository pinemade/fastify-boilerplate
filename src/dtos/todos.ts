import { Type } from '@fastify/type-provider-typebox';

export const CreateTodoRequestBody = Type.Object(
  {
    name: Type.String({
      description: 'Name of the todo item',
      examples: ['Bake a cake'],
    }),
    done: Type.Boolean({
      description: 'Is the todo item done ?',
      examples: [true],
    }),
  },
  {
    description: 'This is body lol',
  }
);

export const ListTodoQueryParam = Type.Object({
  page: Type.Optional(
    Type.Number({
      minimum: 1,
      default: 1,
      description: 'Page offset',
    })
  ),
  itemsPerPage: Type.Optional(
    Type.Number({
      minimum: 10,
      maximum: 20,
      default: 10,
      description: 'Item count per page',
    })
  ),
});

export const ListTodoResponseBody = {
  200: Type.Object({
    data: Type.Object({
      todos: Type.Array(
        Type.Object({
          id: Type.Number({
            description: 'Todo ID',
            examples: [1],
          }),
          name: Type.String({
            description: 'Todo name',
            examples: ['bake a cake'],
          }),
          done: Type.Boolean({
            description: 'Is todo done',
            examples: [false],
          }),
        }),
        {
          description: 'List of todo',
        }
      ),
      count: Type.Number({
        description: 'Length of todos',
      }),
    }),
  }),
};

export const GetTodoByIDRequestParam = Type.Object({
  id: Type.Number({
    description: 'ID of the todo',
    examples: [1, 2],
  }),
});

export const GetTodoByIDResponseBody = {
  200: Type.Object({
    data: Type.Object({
      id: Type.Number({
        description: 'Todo ID',
        examples: [1],
      }),
      name: Type.String({
        description: 'Todo name',
        examples: ['bake a cake'],
      }),
      done: Type.Boolean({
        description: 'Is todo done',
        examples: [false],
      }),
    }),
  }),
};

export const UpdateTodoByIDRequestParam = Type.Object({
  id: Type.Number({
    description: 'ID of the todo',
    examples: [1, 2],
  }),
});

export const UpdateTodoRequestBody = Type.Object(
  {
    name: Type.Optional(
      Type.String({
        description: 'Name of the todo item',
        examples: ['Bake a cake'],
      })
    ),
    done: Type.Optional(
      Type.Boolean({
        description: 'Is the todo item done ?',
        examples: [true],
      })
    ),
  },
  {
    description: 'This is body lol',
  }
);

export const DeleteTodoByIDRequestParam = Type.Object({
  id: Type.Number({
    description: 'ID of the todo',
    examples: [1, 2],
  }),
});
