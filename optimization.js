import express from "express";
import request from "supertest";

const app = express();
app.use(express.json());

/* ---------- PRODUCTION-READY ROUTE ---------- */
app.get("/", (req, res) => {
  res.status(200).json({ status: "API running" });
});

/* ---------- SIMPLE HEALTH CHECK (DEPLOYMENT USE) ---------- */
app.get("/health", (req, res) => {
  res.status(200).json({ uptime: process.uptime() });
});

/* ---------- TEST CASES ---------- */
describe("API Tests", () => {
  test("GET / should return API status", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("API running");
  });

  test("GET /health returns uptime", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.uptime).toBeDefined();
  });
});

/* ---------- CLOUD DEPLOYMENT READY ---------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server deployed on port ${PORT}`)
);
