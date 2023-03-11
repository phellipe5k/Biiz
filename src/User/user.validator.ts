import { IsNotEmpty, IsUUID, Length, Matches, IsDefined } from 'class-validator';

export class createUserBody {

  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @Matches(/[a-zA-Z0-9_-]{2,20}/)
  email: string;

  avatar: string;

  @IsNotEmpty()
  password: string;
}

/*
  name String
  email String
  password String
  avatar String

*/
