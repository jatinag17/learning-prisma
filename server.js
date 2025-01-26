import "dotenv/config";
import express from 'express';

const app = express();
const PORT=process.env.PORT ||3000

app.get("/", (req, res) => {
  return res.send("Hi Everyone.");
});

// * Routes file
import routes from "./routes/index.js";
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));