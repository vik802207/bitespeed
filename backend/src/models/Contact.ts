import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

interface ContactAttributes {
  id: number;
  email?: string;
  phoneNumber?: string;
  linkedId?: number | null;
  linkPrecedence: 'primary' | 'secondary';
  createdAt?: Date;
  updatedAt?: Date;
}

interface ContactCreationAttributes extends Optional<ContactAttributes, 'id' | 'linkedId'> {}

export class Contact extends Model<ContactAttributes, ContactCreationAttributes>
  implements ContactAttributes {
  public id!: number;
  public email?: string;
  public phoneNumber?: string;
  public linkedId?: number | null;
  public linkPrecedence!: 'primary' | 'secondary';

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  
  static associate(models: any) {
    // define association here
  }
}

export function initContactModel(sequelize: Sequelize) {
  Contact.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      linkedId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      linkPrecedence: {
        type: DataTypes.ENUM('primary', 'secondary'),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Contacts',
    }
  );
}
