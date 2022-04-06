import {
  BaseEntity,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;
  @Column({ type: "text" })
  seller!: string;
  @PrimaryGeneratedColumn("increment")
  number!: number;
  @Column({ type: "text" })
  name!: string;
  @Column({ type: "text" })
  detail!: string;
  @Column({ type: "text" })
  price!: number;
  @DeleteDateColumn({ type: "timestamp" })
  deletedAt?: Date;
}
// export class Product extends BaseEntity {
//   @PrimaryGeneratedColumn("increment")
//   page!: number;
// }
