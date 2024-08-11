import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    amount: number;

    @Column()
    _type: string;

    @Column()
    dateTime: Date;
}