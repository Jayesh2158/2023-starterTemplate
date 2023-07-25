import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    phone: varchar('phone', { length: 256 }),
});

export type Users = InferModel<typeof users, 'select'>;
export type NewUsers = InferModel<typeof users, 'insert'>;
