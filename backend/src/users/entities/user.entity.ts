import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    fullName: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ default: true })
    isActive: boolean;
}