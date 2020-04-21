import { Entity, Column, Index, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity({ name: 'tags' })
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index({ unique: true })
    tag: string;

}