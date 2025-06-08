# Example of using kysely


1. Create a PostgreSQL user and a database, for example in adJ/OpenBSD:

    ```sh
    createdb -Ukysely -h /var/www/var/run/postgresql kyselyp1
    ```
2. Copy .env.template in .env and fill the variables.
3. Run migrations that will create tables:
    ```sh
    node_modules/.bin/kysely migrate:latest
    ```
4. Add seeds to fill some tables with initial information
    ```sh
    node_modules/.bin/kysely seed:run
    ```
5. Run the example
    ```sh
    tsx index.ts
    ```
