// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn({ name: "userId" })
    public userId: number;

    @Column({ unique: true }) // Assuming userName is unique
    public userName: string;

    @Column()
    public password: string;
}
