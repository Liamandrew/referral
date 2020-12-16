# Referral Builder

## Getting Started

### Prerequisites

1. This project requires the use of `yarn` to install dependencies.
2. This project also requires a local installation of PostgreSQL. Please follow the steps described [here](/server/README.md) for the correct setup before trying to run this application.

### Running Locally

1. From the root directory, run the following command to install all dependencies for both the client and server applications:
> `yarn bootstrap`

1. From the root directory, run the following command to initialise the database tables:
> `yarn server:db:migrate`

3. From the root directory, run the following command to start the server:
> `yarn server:start`

4. In another terminal, from the root directory run the following command to start the client:
> `yarn client:start`