import {Router} from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/orphanagesController';
import uploadConfig from './config/upload'

const Routes = Router();
const upload = multer(uploadConfig);


Routes.get('/orphanages',OrphanagesController.index);
Routes.get('/orphanage/:id',OrphanagesController.show);
Routes.post('/orphanages', upload.array('images'),OrphanagesController.create);



export default Routes;