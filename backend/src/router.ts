import express from "express";

const router = express.Router();

/*   *****   Controller   *****   */

import studentControllers from "./controllers/studentontrollers";
import adsControllers from "./controllers/adsControllers";
import languageControllers from "./controllers/languageControllers";
import schoolControllers from "./controllers/schoolControllers";
import categoryControllers from "./controllers/categoryControllers";

/*   *****   Routes   *****   */
/* *** POST *** */
// *********** api/student  STUDENT
router.post("/student", studentControllers.add);

// *********** api/ads  ADS
router.post("/ads", adsControllers.add);

// *********** api/language  LANGUAGE
router.post("/language", languageControllers.add);

// *********** api/school  SCHOOL
router.post("/school", schoolControllers.add);

/* *** GET *** */
// *********** api/student  STUDENT
router.get("/student", studentControllers.browse);
router.get("/student/:id", studentControllers.getById);

// *********** api/ads  ADS
router.get("/ads", adsControllers.browse);

// *********** api/language  LANGUAGE
router.get("/language", languageControllers.browse);
router.get("/language/:id", languageControllers.getById);

// *********** api/school  SCHOOL
router.get("/school", schoolControllers.browse);
router.get("/school/:id", schoolControllers.getById);

// *********** api/category  CATEGORY
router.get("/category", categoryControllers.browse);

/* *** PUT *** */
// *********** api/student  STUDENT
// *********** api/ads  ADS
// *********** api/language  LANGUAGE
// *********** api/school  SCHOOL

/* *** DELETE *** */
// *********** api/student  STUDENT
// *********** api/ads  ADS
router.delete("/ads/:id", adsControllers.remove);

// *********** api/language  LANGUAGE
// *********** api/school  SCHOOL

export default router;
