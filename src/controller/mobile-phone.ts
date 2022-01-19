import { BaseController, Controller, Get, Post, Put, Delete, Patch } from '../deps.ts';
import { ApiDocument, ApiOperation, ApiResponse, ApiParameter, ApiRequestBody } from '../deps.ts';
import mobilePhoneService from '../service/mobile-phone.ts';
import { MobilePhoneSaveIn, MobilePhoneModifyIn, MobilePhoneModifyInPatch } from '../schema/request/mobile-phone.ts';
// import { Linq } from 'https://deno.land/x/linqts@1.0.5/mod.ts';
// import { Linq } from '../../../linqts-deno/mod.ts';
// import { Linq } from '../../../linqjs-deno/index.js';
import { Linq } from '../deps.ts';

@ApiDocument({
  name: 'MobilePhone',
  description: 'MobilePhone description'
})
@Controller('/api/mobile-phone')
class MobilePhoneController extends BaseController {
  @ApiParameter({ name: '_id', in: 'query', description: 'id' })
  @ApiParameter({ name: 'model_name', in: 'query', description: '手机型号' })
  @ApiResponse(200, { description: 'OK' })
  @ApiOperation({ summary: '查找', description: '查找' })
  @Get('/findall')
  async findAll() {
    const employees = await mobilePhoneService.findAll({});
    // console.log(employees);
    return employees;
  }

  @ApiParameter({ name: 'id', in: 'path', required: true, description: 'id' })
  @ApiResponse(200, { description: 'OK' })
  @ApiOperation({ summary: 'id查找', description: 'id查找' })
  @Get('/find/:id')
  async findById() {
    const { id } = this.request.params;
    console.log('id:' + id);
    const employee = await mobilePhoneService.findById(id);
    // console.log(employee);
    return employee;
  }

  @ApiRequestBody({
    description: '创建手机-输入参数',
    required: true,
    schema: MobilePhoneSaveIn
  })
  @ApiResponse(201, { description: 'Created' })
  @ApiOperation({ summary: '添加手机', description: '添加手机' })
  @Post('/create')
  async save() {
    console.log(JSON.stringify(this.request.parsedBody));
    const result = await mobilePhoneService.save(this.request.parsedBody);
    console.log('insert employee:' + result);
    return { _id: result };
  }

  @ApiRequestBody({
    description: '修改手机-输入参数',
    required: true,
    schema: MobilePhoneModifyIn
  })
  @ApiResponse(201, { description: 'Updated' })
  @ApiOperation({ summary: '更新手机', description: '更新手机' })
  @Put('/update')
  async update() {
    console.log(JSON.stringify(this.request.parsedBody));
    const { _id } = this.request.parsedBody;
    const { model_name, size, spec, ram, rom, seria_number } = this.request.parsedBody;
    console.log('_id', _id);
    const updatedEmployee = await mobilePhoneService.update(_id, { model_name, size, spec, ram, rom, seria_number });
    return updatedEmployee;
  }

  @ApiRequestBody({
    description: '修改手机-输入参数',
    required: true,
    schema: MobilePhoneModifyInPatch
  })
  @ApiResponse(201, { description: 'Updated' })
  @ApiOperation({ summary: '更新手机', description: '更新手机' })
  @Patch('/patch')
  async updateByPatch() {
    console.log(JSON.stringify(this.request.parsedBody));
    const { _id, model_name } = this.request.parsedBody;
    console.log('_id', _id);
    const updatedEmployee = await mobilePhoneService.update(_id, { model_name });
    return updatedEmployee;
  }

  @ApiParameter({ name: 'id', in: 'path', required: true, description: 'id' })
  @ApiResponse(200, { description: 'OK' })
  @ApiOperation({ summary: '删除手机', description: '删除手机' })
  @Delete('/delete/:id')
  async deleteById() {
    const { id } = this.request.params;
    const result = await mobilePhoneService.deleteById(id);
    return { count: result };
  }

  @ApiParameter({ name: 'model_name', in: 'query', description: '手机型号' })
  @ApiResponse(200, { description: 'OK' })
  @ApiOperation({ summary: 'Linq', description: 'Linq' })
  @Get('/getlinq')
  async getlinq() {
    let orderByID, persons, thenByAge, thenByName;

    interface Person {
      ID: number;
      Age: number;
      Name: string;
    }

    persons = [
      { ID: 0, Age: 30, Name: 'A' },
      { ID: 1, Age: 25, Name: 'B' },
      { ID: 2, Age: 2, Name: 'G' },
      { ID: 2, Age: 18, Name: 'C' },
      { ID: 1, Age: 30, Name: 'D' },
      { ID: 1, Age: 25, Name: 'E' },
      { ID: 2, Age: 15, Name: 'F' }
    ];

    // thenByName = new Linq<Person>(persons)
    //   .OrderByDescending(x => x.ID)
    //   .ThenBy(x => x.Age)
    //   .ThenByDescending(x => x.Name)
    //   .ToArray();
    thenByName = new Linq(persons)
      .OrderByDescending((x: Person) => x.ID)
      .ThenBy((x: Person) => x.Age)
      .ThenByDescending((x: Person) => x.Name)
      .ToArray();

    console.log('thenByName:', thenByName);

    return thenByName;
  }
}

export default MobilePhoneController;
