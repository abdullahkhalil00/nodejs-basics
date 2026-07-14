const express = require('express');
const router = express.Router()
const {allUserHandler,getuserbyid , addbyid ,updatebyid, deletebyid} = require('..//controllers/user')


router.get('/', allUserHandler)

router
    .route("/:id")
    .get(getuserbyid)
    .post(addbyid)
    .patch(updatebyid)
    .delete(deletebyid)
module.exports = router