import {
	BaseEntity,
	Column,
	Entity,
	JoinTable,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	Unique
} from 'typeorm'
import * as bcrypt from 'bcrypt'
import { Knowledge } from 'src/knowledge/knowledge.entity'

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number
	@Column({ unique: true })
	username: string
	@Column()
	password: string
	@Column()
	role: string
	
	@Column()
	salt: string
	@Column({ type: 'timestamp', nullable: false })
	created_at: Date
	@Column({ type: 'timestamp', nullable: false })
	updated_at: Date
	@OneToMany(type => Knowledge, knowledge => knowledge.user, { eager: true }, )
    knowledges: Knowledge[]

	async validatePassword(password: string): Promise<boolean> {
		const hash = await bcrypt.hash(password, this.salt)
		return hash === this.password
	}
}
