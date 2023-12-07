import express from "express";
import morgan from "morgan";
import cors from "cors";

import userRouter from "./routes/userRoutes";
import projectRouter from "./routes/projectRoutes";
import departmentRouter from "./routes/departmentRoutes";
import userProjectRouter from "./routes/userProjectRoutes";
import tagRouter from "./routes/tagRoutes";
import userTagRouter from "./routes/userTagRoutes";
import noteRouter from "./routes/noteRoutes";
import birthdayWishRouter from "./routes/birthdayWishRoutes";
import performanceReviewRouter from "./routes/performanceReviewRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(
	cors({
		origin: "*",
	})
);

app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/departments", departmentRouter);
app.use("/user-projects", userProjectRouter);
app.use("/tags", tagRouter);
app.use("/user-tags", userTagRouter);
app.use("/notes", noteRouter);
app.use("/birthday-wishes", birthdayWishRouter);
app.use("/perf", performanceReviewRouter);

app.get("/", (req, res) => {
	res.send("phaze-hq is running just fine");
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
