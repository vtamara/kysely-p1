import type { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  // For more info, see: https://kysely.dev/docs/migrations
  await db.schema
    .createTable('purchasequote')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('senderPhone', 'varchar(15)', (col) => col.notNull())
    .addColumn('senderName', 'varchar(80)', (col) => col.notNull())
    .addColumn('senderWallet', 'varchar(50)', (col) => col.notNull())
    .addColumn('usdPriceInSle', 'real', (col) => col.notNull())
    .addColumn('maximum', 'real', (col) => col.notNull())
    .addColumn('minimum', 'real', (col) => col.notNull())
    .addColumn('timestamp', 'bigint', (col) => col.notNull())
    .addColumn('token', 'varchar(32)', (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('purchasequote').execute()
}
