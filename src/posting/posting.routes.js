import { Router } from "express";
import { check } from "express-validator";
import { publicationsGet, publicationsPut, publicationsGetById } from "./posting.controller.js";

const router = Router();

router.get('/posting', publicationsGet);

router.get('/posting/:id', publicationsGetById);

router.put('/posting/addComment:id', [
    check("id", "Id is required").not().isEmpty(),
    check("usuario", "The name of the user is required").not().isEmpty(),
    check("comment", "The commentMain is required").not().isEmpty(),
], publicationsPut);

export default router;

