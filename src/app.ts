import { TypeBoxValidatorCompiler } from '@fastify/type-provider-typebox';
import { registerPlugin } from '@src/plugins';
import { registerRoutes } from '@src/routes';
import { afterListenFn, listenOptions } from '@src/utils/fastify-listener';
import { fastify } from 'fastify';

const app = fastify({
  logger: true,
});

app.setValidatorCompiler(TypeBoxValidatorCompiler);
registerPlugin(app);
registerRoutes(app);

app.listen(listenOptions, afterListenFn);
