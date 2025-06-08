# Example of using kysely


1. Create a user for PostgreSQL (e.g `kysely`) --the following instructions are for adJ/OpenBSD
    ```sh
    % doas su - _postgresql
    % createuser kysely -s -h /var/www/var/run/postgresql/ -U postgres
    % psql -h /var/www/var/run/postgresql/ -U postgres
    # alter user kysely with password 'MiClave';
    # \q
    % exit 
    ```
2. Simplify interaction with the database by configuring the new user and password in your `~/.pgpass` with:
    ```sh
    % echo "*:*:*:kysely:MiClave" >> ~/.pgpass
    ```
3. Create the database, for example `kyselyp1`:
    ```sh
    % createdb -U kysely -h /var/www/var/run/postgresql kyselyp1
    ```
4. Copy the file `.env.template` in `.env` and edit it to fill the user, password and database you created:
    ```sh
    % cp .env.template .nv
    ```
5. Install packages
    ```sh 
    % pnpm install
    ```
6. Run migrations that will create tables:
    ```sh
    % node_modules/.bin/kysely migrate:latest
    ```
7. Add seeds to fill some tables with initial information
    ```sh
    % node_modules/.bin/kysely seed:run
    ```
8. Run the example
    ```sh
    % tsx index.ts
    ```
