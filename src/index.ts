// import { Application } from 'https://deno.land/x/oak/mod.ts';
// import router from './routes/routing.ts';
import MobilePhoneController from './controller/mobile-phone.ts';
import { Dero } from 'https://deno.land/x/dero/mod.ts';
import { DocumentBuilder, swagger } from 'https://deno.land/x/dero_swagger@0.0.6/mod.ts';

// const app = new Application();
// app.use(router.routes());
// app.use(router.allowedMethods());

// console.log('Server Port 8000');

// await app.listen({ port: 8000 });

class App extends Dero {
  constructor() {
    super();
    this.use({
      class: [MobilePhoneController]
    });

    // document builder
    const document = new DocumentBuilder()
      .setInfo({
        title: 'Rest APIs for amazing app',
        version: '1.0.0',
        description: 'This is the amazing app'
      })
      // .addServer('http://10.211.55.11:8000')
      .build();

    // serve swagger
    swagger(this, '/api-docs/swagger', document);
  }
}

await new App().listen(8000, () => {
  console.log('Running on port 8000');
});

// import { Application } from 'https://deno.land/x/oak/mod.ts';
// import { APP_HOST, APP_PORT } from './config/config.ts';
// import router from './routes/routing.ts';
// import notFound from './handlers/notFound.ts';
// import errorMiddleware from './middlewares/error.ts';

// const app = new Application();

// app.use(errorMiddleware);
// app.use(router.routes());
// app.use(router.allowedMethods());
// app.use(notFound);

// console.log(`Listening on ${APP_PORT}...`);

// // await app.listen(`${APP_HOST}:${APP_PORT}`);

// await app.listen({ port: 3000 });
