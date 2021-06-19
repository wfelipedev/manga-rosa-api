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
	@Column({ nullable: false, length: 100 })
	name: string
	@Column({  nullable: false, length: 100 })
    email: string
	@Column({ unique: true, nullable: false })
    cpf: string
    @Column({ nullable: true })
    phone_number: string
	@Column()
	status: number
	@Column({ type: 'timestamp', nullable: false })
	created_at: Date
	@Column({ type: 'timestamp', nullable: false })
	updated_at: Date
	@Column({ type: 'timestamp', nullable: true })
	validated_at: Date
	@Column()
	user_id: number
}

// status 0 - esperando
// status 1 - validado
// status 2 - não validado