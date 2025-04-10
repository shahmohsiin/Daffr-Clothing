import jwt from 'jsonwebtoken'


const fetchUser = async (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        res.status(401).send({ errors: "Please Authenticate" })
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        }
        catch (error) {
            res.status(401).send({ errors: "please authenicate" })
        }
    }
}

export default fetchUser;