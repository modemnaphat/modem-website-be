// Lib
import express from "express";
import cors from "cors";

// Include in Project
import { errorHandler } from "./middlewares/errorHandler";
import userRoutes from "./modules/user/user.route";
import profileRoutes from "./modules/profile/profile.route";
import skillRoute from "./modules/skill/skill.route";
import projectRoute from "./modules/project/project.route";
import contactRoute from "./modules/contact/contact.route";
import toolRoute from "./modules/tool/tool.route";
import technicalSkillRoute from "./modules/technicalSkill/technicalSkill.route";

const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/", (_req, res) => {
  res.json({ message: "Modem Website API is running" });
});

// routes
app.use("/users", userRoutes);
app.use("/profile", profileRoutes);
app.use("/skills", skillRoute);
app.use("/projects", projectRoute);
app.use("/contacts", contactRoute);
app.use("/tools", toolRoute);
app.use("/tech-skills", technicalSkillRoute);

// error handler
app.use(errorHandler);

export default app;
