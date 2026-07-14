const makeUser = require('../models/makeUser')
async function allUserHandler(req, res) {
    const allDBUser = await makeUser.find({})
    const html = `
    <ul>
${allDBUser.map((user) => {
        return `<li>${user.firstName}  ${user.email}</li>`;
    }).join("")}
</ul>
    `
    res.send(html)
}

async function getuserbyid(req, result) {
    const id = await makeUser.findById(req.params.id)

    return res.json(id)
}
async function updatebyid(req, result) {
    await makeUser.findByIdAndUpdate(req.params.id, { lastName: "Changed" })

    return res.json({ status: "Changed" })

}

async function addbyid(req, result) {
    const body = req.body
    if (
        !body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title
    ) {
        return res.status(400).json({ msg: "All Field Required" })
    }
    const result = await makeUser.create({
        firstName: body.first_name,
        lastName: body.last_name,
        gender: body.gender,
        email: body.email,
        jobTitle: body.job_title,
    });
    console.log(result)
    return res.status(201).json({ msg: "User Created" })
}
async function deletebyid(req, result) {
    await makeUser.findByIdAndDelete(req.params.id, { lastName: "Changed" })

    return res.json({ status: "Deleted" })
}

module.exports = {
    allUserHandler,
    getuserbyid,
    addbyid,
    updatebyid,
    deletebyid
}

