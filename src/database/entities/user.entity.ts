import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Contact from "./contact.entity";

@Entity('users')
export default class User{
  @PrimaryGeneratedColumn()
  id:number
  @Column({nullable:false})
  user_name:string
  @Column({unique:true,nullable:false})
  email:string
  @Column({nullable:false,})
  password:string
  @Column({nullable:false})
  image_avatar:string
  @Column({nullable:false})
  is_admin:boolean
  @OneToMany(()=>Contact,(contact)=>contact,{eager:true,
    onDelete:'SET NULL'})
  contacts:Contact[]
  @CreateDateColumn({nullable:false})
  create_date:Date
}
