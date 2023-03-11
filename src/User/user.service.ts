import { Injectable } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  list(): any {
    return this.prisma.user.findMany();
  }

  create(data): any /**Promise<UserModel> */ {
    const { name, email, avatar, password } = data;
    console.log('Data: ', data)
    return this.prisma.user.create({ data: {
        id: randomUUID(),
        name,
        email,
        avatar,
        password
    } });
  }
}
