import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import User from "./entities/user.entity";
import Contact from "./entities/contact.entity";

export const configConnectionPostgresSQL: TypeOrmModuleOptions={
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Maks+100500',
  database: 'ruchat',
  entities: ['dist/database/entities/*.entity.js'],
  synchronize: true,
}
