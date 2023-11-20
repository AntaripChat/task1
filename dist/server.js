import app from "./app.js";
import serverConfig from './config/server.config.js';
import authRoute from "./routes/auth.route.js";
authRoute(app);
app.listen(serverConfig.PORT, () => console.log(`App Running on ${serverConfig.PORT}`));
