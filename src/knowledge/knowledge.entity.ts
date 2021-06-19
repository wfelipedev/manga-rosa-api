import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from 'src/auth/user.entity'

@Entity()
export class Knowledge extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number
	@Column()
	title: string
	@ManyToOne(type => User, user => user.knowledges, { eager: false })
    user: User
    @Column()
    userId: number
}
