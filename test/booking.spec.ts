import { getPricingV1 } from "../api/pricing";
import bookingData from "../testData/booking.json";

jest.setTimeout(30000);

describe("api test suite", () => {
  it("Valid pricing should return 200", async () => {
    const result = await getPricingV1(bookingData[0]);

    expect(result.status).toBe(200);
    expect(result.data.length).not.toBe(0);
  });

  it("Invalid pricing should return no data", async () => {
    const result = await getPricingV1(bookingData[1]);

    expect(result.status).toBe(200);
    expect(result.data.length).toBe(0);
  });
});
