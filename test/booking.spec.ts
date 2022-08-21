import { getPricingV1 } from "../api/pricing";
import bookingData from "../testData/booking.json";

describe("api test on pricing", () => {
  for (let data of bookingData) {
    it(`${data.countryCode} ${data.comment}`, async () => {
      const result = await getPricingV1(data);

      expect(result.status).toBe(data.responseCode);
      expect(result.data.length).toBeGreaterThanOrEqual(data.responseLength);
    });
  }
});
