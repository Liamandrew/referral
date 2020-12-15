# Referral Builder Server

## Getting Started

### Prerequisite

#### PostgreSQL

1. You must have PostgresSQL installed:

*Install with brew*:
>`brew install postgres`

*Start postgres*:
>`brew services start postgres`

2. Create a new user

*Connect to default database*
>`psql postgres`

*Create user & grant permissions*
>`postgres=# CREATE ROLE api_user WITH LOGIN PASSWORD 'password';`;

>`postgres=# ALTER ROLE api_user CREATEDB;`

*Log out and into the new user*
>`postgres=# \q`

>`psql -d postgres -U api_user`

3. Create the database:

>`postgres=> CREATE DATABASE referral_db;`
