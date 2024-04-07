import express from "express";
import { add, get, remove, update, getAll} from "../services/todoService.js";

const todoRouter = express.Router();

// router.get("/", (req, res)=> {
//     res.send("get islemi basarılı...")
// })

todoRouter.post("/add", add);
todoRouter.get("/getAll", getAll);
todoRouter.get("/get", get);
todoRouter.patch("/update", update);
todoRouter.delete("/:id", remove);

export default todoRouter;
