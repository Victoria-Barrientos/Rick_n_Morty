const users = require('../utils/users');

module.exports.login = (req, res) => {
    const {email, password} = req.query;
    const validUser = users.filter(user => user.email === email && user.password === password);
    if(validUser) {
        return res.status(200).json({access: true})
    }
    return res.status(200).json({access: false})
};
