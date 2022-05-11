import config from 'config';

export const PORT = config.get('port') as number;
