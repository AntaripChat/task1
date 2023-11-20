import app from "./app.js";
import serverConfig from './config/server.config.js';
app.listen(serverConfig.PORT, () => console.log(`App Running on ${serverConfig.PORT}`));
