import {
	BaseEntity,
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from 'src/auth/user.entity'

@Entity()
export class Person extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number
	@Column({ unique: true, nullable: false })
	name: string
	@Column({ unique: true, nullable: false })
    email: string
	@Column({ unique: true, nullable: false })
    cpf: string
    @Column({ nullable: true })
    phone_number: string
	@Column()
	status: boolean
	@Column({ type: 'timestamp', nullable: false })
	created_at: Date
	@Column({ type: 'timestamp', nullable: false })
	updated_at: Date
	@Column()
	user_id: number
}
