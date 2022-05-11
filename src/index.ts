import {initServer} from "./app";
import { PORT } from './env';



const server =  initServer().listen(PORT, () => {
    console.log(`[${process.env.NODE_ENV}] Server is listening on port ${PORT}`);
});

export default server;
