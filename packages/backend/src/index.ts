import express from "express";
import morgan from "morgan"

import userRouter from "./routes/userRoutes";
import projectRouter from "./routes/projectRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev')); 

app.use('/users', userRouter);
app.use('/projects',projectRouter)

app.get("/", (req, res) => {
	res.send("phaze-hq is running just fine");
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
