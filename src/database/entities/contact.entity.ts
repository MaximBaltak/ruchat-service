import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity";

@Entity('contacts')
export default class Contact{
  @PrimaryGeneratedColumn()
  id:number
  @ManyToOne(()=>User,(user)=>user.id,{onDelete:"CASCADE"})
  user_one:number
  @ManyToOne(()=>User,(user)=>user.id,{onDelete:"CASCADE"})
  user_two:number
  @Column()
  history_chat:string

}
