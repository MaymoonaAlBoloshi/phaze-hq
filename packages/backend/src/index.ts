import express from "express";
import morgan from 'morgan';

import userRouter from "./routes/userRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev')); 

app.use('/users', userRouter);

app.get("/", (req, res) => {
	res.send("phaze-hq is running just fine");
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
