import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,} from 'typeorm'
import {IUser, UserStatus} from '@t/IUser'


// 用户表

@Entity('user')
export class User implements IUser{
    @Column('smallint')
    power: number;
    @PrimaryGeneratedColumn('increment')
    uid: number;
    @Column('char',{length:11})
    tele: string;
    @Column('datetime')
    insert_time: Date;
    @Column('smallint')
    status: UserStatus;
    @Column('datetime')
    update_time: Date;
    @Column( 'varchar',{length:20} )
    account: string; 
    @Column('varchar',{length:20} )
    password: string;
}