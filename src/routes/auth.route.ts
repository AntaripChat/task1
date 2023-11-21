//import authController from "../controllers/auth.controller.js";
import authController from "../controller/auth.controller.js";

export default (app:any) =>{
    app.post('/api/signup',authController.signup)
}