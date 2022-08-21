import { getPricing } from "../api/pricing";
jest.setTimeout(30000);

describe("api test suite", () => {
  it("valid pricing should return 200", async () => {
    const result = await getPricing();
    expect(result.status).toBe(200);
  });
});
