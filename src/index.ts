import MobilePhoneController from './controller/mobile-phone.ts';
import { Dero } from 'https://deno.land/x/dero/mod.ts';
import { DocumentBuilder, swagger } from 'https://deno.land/x/dero_swagger@0.0.6/mod.ts';
import { validationMetadatasToSchemas } from 'https://cdn.skypack.dev/class-validator-jsonschema?dts';

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
    swagger(this, '/api-docs/swagger', document, { validationMetadatasToSchemas });
  }
}

await new App().listen(8000, () => {
  console.log('Running on port 8000');
});
