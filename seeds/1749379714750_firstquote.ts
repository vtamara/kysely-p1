import { Insertable, Kysely, PostgresDialect, sql } from 'kysely';
import { DB, Purchasequote } from './db/db.d.ts';

export async function seed(db: Kysely<any>): Promise<void> {
  let nquote:Insertable<Purchasequote> = {
    id: 1,
    minimum: 200,
    maximum: 20,
    senderName: "I",
    senderPhone: "1",
    senderWallet: "0xb",
    timestamp: "12",
    token: "u",
    usdPriceInSle: 22.3,
  }

  let iquote = await db
    .insertInto('purchasequote')
   .values(nquote)
   .returningAll()
   .executeTakeFirstOrThrow()
  console.log("After insert iquote=", iquote)

  // Serial not autoincremented because we set id:1 Need to update
  let rs=await sql<any>`SELECT setval('public.purchasequote_id_seq', MAX(id)) FROM public.purchasequote`.execute(db)
  console.log("rs=", rs)

}
