import { Sequelize } from 'sequelize';
import { initContactModel, Contact } from './models/Contact'

const sequelize = new Sequelize("postgresql://postgres:vik9708089380@db.jxjcjmarroyvxnfafxiq.supabase.co:5432/postgres", {
  dialect: 'postgres',
  logging: false,
});

initContactModel(sequelize);

export { sequelize, Contact };
