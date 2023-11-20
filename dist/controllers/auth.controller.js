const signUp = (req, res) => {
    const Userdata = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    res.send(Userdata);
};
export default {
    signUp
};
