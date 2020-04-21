import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";
import { Tag } from "./Tag";

@Entity({ name: "tools" })
export class Tool {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @ManyToMany(type => Tag, {
        cascade: true,
        eager: true
    })
    @JoinTable()
    tags: Tag[];

}
