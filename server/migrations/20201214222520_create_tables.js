const ADDRESSES_TABLE_NAME = "addresses";
const REFERALLS_TABLE_NAME = "referrals";
const REFERAL_ADDRESSES_TABLE_NAME = "referral_addresses";

exports.up = async (knex) => {
    const createAddressesTable = async () => {
        const hasTable = await knex.schema.hasTable(ADDRESSES_TABLE_NAME);

        if (!hasTable) {
            await knex.schema.createTable(ADDRESSES_TABLE_NAME, (table) => {
                table.increments("id").primary();
                table.string("street_number").notNullable();
                table.string("street_name").notNullable();
                table.string("suburb").notNullable();
                table.string("state").notNullable();
                table.string("country").notNullable();
                table.string("postcode").notNullable();
            });
        }
    };

    const createReferralsTable = async () => {
        const hasTable = await knex.schema.hasTable(REFERALLS_TABLE_NAME);

        if (!hasTable) {
            await knex.schema.createTable(REFERALLS_TABLE_NAME, (table) => {
                table.increments("id").primary();
                table.string("given_name").notNullable();
                table.string("surname").notNullable();
                table.string("email").notNullable();
                table.string("phone_number").notNullable();
            });
        }
    };

    const createReferralAddressTable = async () => {
        const hasTable = await knex.schema.hasTable(
            REFERAL_ADDRESSES_TABLE_NAME
        );

        if (!hasTable) {
            await knex.schema.createTable(
                REFERAL_ADDRESSES_TABLE_NAME,
                (table) => {
                    table.integer("referal_id").notNullable();
                    table.integer("address_id").notNullable();

                    table.primary(["referal_id", "address_id"]);
                    table
                        .foreign("referal_id")
                        .references("id")
                        .inTable("referrals");
                    table
                        .foreign("address_id")
                        .references("id")
                        .inTable("addresses");
                }
            );
        }
    };

    await createAddressesTable();
    await createReferralsTable();
    await createReferralAddressTable();
};

exports.down = async (knex) => {
    const dropReferralAddressesTable = async () => {
        await knex.raw(
            `DROP TABLE IF EXISTS ${REFERAL_ADDRESSES_TABLE_NAME} CASCADE`
        );
    };

    const dropAddressesTable = async () => {
        await knex.raw(`DROP TABLE IF EXISTS ${ADDRESSES_TABLE_NAME} CASCADE`);
    };

    const dropReferralsTable = async () => {
        await knex.raw(`DROP TABLE IF EXISTS ${REFERALLS_TABLE_NAME} CASCADE`);
    };

    await dropReferralAddressesTable();
    await dropAddressesTable();
    await dropReferralsTable();
};
