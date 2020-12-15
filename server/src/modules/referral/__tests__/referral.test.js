const request = require("supertest");
const { knex } = require("../../../db");
const { app } = require("../../../app");

describe("referral module", () => {
  const agent = request.agent(app);

  afterAll(() => {
    knex.destroy();
  });

  describe("creating a referral", () => {
    test("it should not create a referral if it is missing givenName", (done) => {
      return agent
        .post("/api/referrals")
        .send({
          surname: "Test",
          email: "liam@gmail.com",
          phoneNumber: "12345678",
        })
        .expect(400)
        .end((err, res) => {
          expect(err).toBeDefined();

          const { body } = res;

          expect(res.body).toHaveProperty("errors");

          const { errors } = body;
          expect(errors).toBeInstanceOf(Array);
          expect(
            errors.find((error) => error.param === "givenName")
          ).toBeTruthy();

          done();
        });
    });

    test("it should not create a referral if it is missing surname", (done) => {
      return agent
        .post("/api/referrals")
        .send({
          givenName: "Liam",
          email: "liam@gmail.com",
          phoneNumber: "12345678",
        })
        .expect(400)
        .end((err, res) => {
          expect(err).toBeDefined();

          const { body } = res;

          expect(res.body).toHaveProperty("errors");

          const { errors } = body;
          expect(errors).toBeInstanceOf(Array);
          expect(
            errors.find((error) => error.param === "surname")
          ).toBeTruthy();

          done();
        });
    });

    test("it should not create a referral if it is missing email", (done) => {
      return agent
        .post("/api/referrals")
        .send({
          givenName: "Liam",
          surname: "test",
          phoneNumber: "12345678",
        })
        .expect(400)
        .end((err, res) => {
          expect(err).toBeDefined();

          const { body } = res;

          expect(res.body).toHaveProperty("errors");

          const { errors } = body;
          expect(errors).toBeInstanceOf(Array);
          expect(errors.find((error) => error.param === "email")).toBeTruthy();

          done();
        });
    });

    test("it should not create a referral if it is missing phoneNumber", (done) => {
      return agent
        .post("/api/referrals")
        .send({
          givenName: "Liam",
          surname: "Test",
          email: "liam@gmail.com",
        })
        .expect(400)
        .end((err, res) => {
          expect(err).toBeDefined();

          const { body } = res;

          expect(res.body).toHaveProperty("errors");

          const { errors } = body;
          expect(errors).toBeInstanceOf(Array);
          expect(
            errors.find((error) => error.param === "phoneNumber")
          ).toBeTruthy();

          done();
        });
    });

    test("it should create a referral and return the object", (done) => {
      return agent
        .post("/api/referrals")
        .send({
          givenName: "Liam",
          surname: "Test",
          email: "liam@gmail.com",
          phoneNumber: "12345678",
        })
        .expect(200)
        .end((err, res) => {
          expect(err).toBeNull();

          const { body } = res;

          expect(res.body).toHaveProperty("referral");

          const { referral } = body;
          expect(referral).toHaveProperty("id");
          expect(referral).toHaveProperty("givenName", "Liam");
          expect(referral).toHaveProperty("surname", "Test");
          expect(referral).toHaveProperty("email", "liam@gmail.com");
          expect(referral).toHaveProperty("phoneNumber", "12345678");

          done();
        });
    });
  });

  describe("Getting all referrals", () => {
    test("it should get all referrals", (done) => {
      return agent
        .get("/api/referrals")
        .expect(200)
        .end((err, res) => {
          expect(err).toBeNull();

          const { body } = res;

          expect(res.body).toHaveProperty("referrals");

          const { referrals } = body;
          expect(referrals).toBeInstanceOf(Array);

          const [referral] = referrals;
          expect(referral).toHaveProperty("id");
          expect(referral).toHaveProperty("givenName");
          expect(referral).toHaveProperty("surname");
          expect(referral).toHaveProperty("email");
          expect(referral).toHaveProperty("phoneNumber");

          done();
        });
    });
  });
});
