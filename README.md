# Example of using kysely

## Run


Create a PostgreSQL user and a database, for example in adJ/OpenBSD:

```sh
createdb -Ukysely -h /var/www/var/run/postgresql kyselyp1
```

Copy .env.template in .env and fill the variables.

After create the tables by running the migrations with:

```
node_modules/.bin/kysely migrate:latest
```

And then run the example with
```sh
tsx index.ts
```
```

