import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk",
        { title: "Node js startrepo", message: "Använd det här repot som en grund för dina projekt." }
    )
})

router.get("/login", (req, res) => {
    res.render("login.njk", {
        title: "Logga in",
    })
})

router.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if (username === "admin" && password === "123") {
        console.log("logininin yabab")
        req.session.login = "true"
    } else {
        console.log("fiiiiiel")
    }


    res.json({username, password, session: req.session.login})
})

router.get('/error', (req, res) => {
    throw new Error('Test error')
})

export default router