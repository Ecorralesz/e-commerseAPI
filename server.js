const app = require("./app")
require("dotenv").config();

const HOSTNAME = "localhost"
const PORT = process.env.PORT || 8000;


app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running http://${HOSTNAME}:${PORT}`)
})