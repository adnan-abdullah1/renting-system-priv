const User = require('../../../models/User')

exports.signUp = async(req, res) => {

    if (!(req.body.email && req.body.password)) {
        return res.status(400).json({ message: 'Email and password not present' })
    }
    const { email, password } = req.body;

    const emailExists = await User.exists({ email })


    if (emailExists) {
        return res.status(400).json({ message: 'Email already exits' })
    }

    const newUser = new User(req.body)
    newUser.save()

    return res.status(200).json(newUser)


}

exports.login = async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
    if (!user) {
        return res.status(409).json({ message: "User does not exists" })

    }

    if (!(user.password == password)) {
        return res.status(409).json({ message: 'Incorrect Password' })
    }

    return res.status(200).json({ user: user })
}