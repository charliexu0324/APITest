import axios from "axios";
import qs from "qs";
import { v4 } from "uuid";

export async function getPricing() {
  const options = {
    method: "get",
    url: `https://api.aws.thlonline.com/api/2/availability/pricing?sessionId=5bdb266a-67b2-43ec-b4c8-f1cea63de00d&countryCode=NZ&checkoutLocationCode=AKL&checkoutDateTime=2023-09-01T11:00&checkinLocationCode=AKL&checkinDateTime=2023-09-30T12:00&countryOfResidence=NZ&numberOfAdults=1&agentCode=B2CNZ&isVan=true&isBestBuy=true&isGross=true&isInclusiveProduct=true&promoCode=0630`,
    headers: {
      authority: "api.aws.thlonline.com",
      accept: "application/json, text/plain, */*",
      "accept-language":
        "en-NZ,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5",
      origin: "https://booking.mightycampers.com",
      referer: "https://booking.mightycampers.com/",
      "sec-ch-ua":
        '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
      Cookie:
        "connect.sid=s%3A4SocoOI2gczgHMqARlG85TyFET_tLMuZ.B6CsNZ4M78hpHKFiLLL6CRLDKNTiTtEW4rZ36pVJJWc",
    },
  };

  try {
    const response = await axios(options);
    console.log(JSON.stringify(response.data));
    return response;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}
