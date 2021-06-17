import {
	BaseEntity,
	Column,
	Entity,
	JoinTable,
	OneToMany,
	PrimaryGeneratedColumn,
	Unique
} from 'typeorm'
import * as bcrypt from 'bcrypt'

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
	name: string
	@Column()
	email: string
    @Column({ unique: true })
    cpf: string
    @Column({ nullable: true })
    phone_number: string
	@Column()
	role: string
	@Column()
	salt: string
	@Column({ type: 'timestamp', nullable: false })
	created_at: Date
	@Column({ type: 'timestamp', nullable: false })
	updated_at: Date
	// lista de conhecimentos
	// @OneToMany(type => Knowledge, knowledge => knowledge.user, { eager: true }, )
    // knowledges: Knowledge[]

	async validatePassword(password: string): Promise<boolean> {
		const hash = await bcrypt.hash(password, this.salt)
		return hash === this.password
	}
}
