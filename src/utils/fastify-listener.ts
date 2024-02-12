import { constants } from '@src/constants';
import { FastifyListenOptions } from 'fastify';

export const listenOptions: FastifyListenOptions = {
  port: constants.APP_PORT,
};

export const afterListenFn: (err: Error | null, addr: string) => void =
  function (err, _) {
    if (err) {
      process.exit(1);
    }
  };
