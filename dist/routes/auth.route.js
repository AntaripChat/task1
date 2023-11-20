import authController from "../controllers/auth.controller.js";
export default (app) => {
    app.post('/api/signup', authController.signUp);
};
