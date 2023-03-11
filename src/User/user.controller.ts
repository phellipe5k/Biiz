import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserBody } from './user.validator';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  getUser() {
    return this.UserService.list();
  }

  @Post()
  async createUser(
    @Body() body: createUserBody
  ): Promise<any> {
    console.log('posty: ', body)
    let user = await this.UserService.create(body);
    if (user){
        console.log('user', user);
        return true;
    }
    return false;
  }

}
