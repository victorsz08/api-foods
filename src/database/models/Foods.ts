import { Table, Column, CreatedAt, PrimaryKey, Model, AutoIncrement,  AllowNull, UpdatedAt } from "sequelize-typescript";



@Table({
    timestamps: true,
    tableName: "foods"
})
class Foods extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column
    description!: string;
    
    @Column
    category!: string;

    @Column
    energy_kcal!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
};

export default Foods;