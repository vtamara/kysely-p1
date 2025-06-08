import { Insertable, Kysely, PostgresDialect, sql, Updateable } from 'kysely';
import 'dotenv/config'

import defineConfig from './.config/kysely.config.ts'
import type { DB, Purchasequote } from './db/db.d.ts';

console.log("defineConfig=", defineConfig)

const { dialect } = defineConfig
const db = new Kysely<DB>({
  dialect: dialect
})

let nquote:Insertable<Purchasequote> = {
  minimum: 200,
  maximum: 20,
  senderName: "E",
  senderPhone: "0",
  senderWallet: "0xa",
  timestamp: "11",
  token: "t",
  usdPriceInSle: 23.3,
}

let iquote = await db
  .insertInto('purchasequote')
  .values(nquote)
  .returningAll()
  .executeTakeFirstOrThrow()
console.log("After insert iquote=", iquote)

let rows = await db.selectFrom('purchasequote').selectAll().execute();
console.log("Query of all rows=", rows)

let crows = await sql<number[]>`select count(*) from purchasequote`.execute(db)
console.log("Count of rows=", crows.rows[0].count)

let uquote:Updateable<Purchasequote> = {
  minimum: 300,
  maximum: 30,
  usdPriceInSle: 24,
}
let rupdate=await db.updateTable('purchasequote').set(uquote).where('id', '=', iquote.id).execute()
console.log("After update rupdate=", rupdate)

rows = await db.selectFrom('purchasequote').selectAll().execute();
console.log("Query of all rows=", rows)

let rdelete = await db.deleteFrom('purchasequote').where('id', '=', iquote.id)
  .returningAll()
  .executeTakeFirst()
console.log("After delete rdelete=", rdelete)


crows = await sql<number[]>`select count(*) from purchasequote`.execute(db)
console.log("Count of rows=", crows.rows[0].count)

await db.destroy();
