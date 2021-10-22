import { Router } from 'https://deno.land/x/oak/mod.ts';
import Controller from '../controller/mobile-phone.ts';

const router = new Router();

router.post('/save', Controller.save);
router.get('/find', Controller.findAll);
router.get('/findone/:id', Controller.findById);
router.put('/update', Controller.update);
router.delete('/delete/:id', Controller.deleteById);

router.get('/hello', context => {
  context.response.body = { mess: 'hello deno!' };
});

export default router;
