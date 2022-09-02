import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configConnectionPostgresSQL } from "./database/connectionDatabase";
import User from "./database/entities/user.entity";
import Contact from "./database/entities/contact.entity";

@Module({
  imports: [TypeOrmModule.forRoot(configConnectionPostgresSQL),
    TypeOrmModule.forFeature([User, Contact])],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
