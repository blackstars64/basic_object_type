import express from "express";

const router = express.Router();

/*   *****   Controller   *****   */

import studentControllers from "./controllers/studentontrollers";
import adsControllers from "./controllers/adsControllers";

/*   *****   Routes   *****   */

// POST /api/student
router.post("/student", studentControllers.add);

// GET /api/ads
router.get("/ads", adsControllers.browse);

// POST /api/ads
router.post("/ads", adsControllers.add);

export default router;
