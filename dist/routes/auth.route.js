//import authController from "../controllers/auth.controller.js";
import authController from "../controller/auth.controller.js";
export default (app) => {
    app.post('/api/signup', authController.signup);
    app.post('/api/signin', authController.signin);
};
