import authController from "../controllers/auth.controller.js";

export default (app:any) =>{
    app.post('/api/signup',authController.signUp)
}