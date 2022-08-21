import axios from "axios";
import qs from "qs";
import { v4 } from "uuid";

export async function getPricingV1(data) {
  const options = {
    method: "get",
    url: `https://api.aws.thlonline.com/api/2/availability/pricing?sessionId=5bdb266a-67b2-43ec-b4c8-f1cea63de00d&countryCode=${data.countryCode}&checkoutLocationCode=${data.checkoutLocationCode}&checkoutDateTime=${data.checkoutDateTime}&checkinLocationCode=${data.checkinLocationCode}&checkinDateTime=${data.checkinDateTime}&countryOfResidence=${data.countryOfResidence}&numberOfAdults=1&agentCode=${data.agentCode}&isVan=true&isBestBuy=true&isGross=true&isInclusiveProduct=true&promoCode=0630`,
    headers: {
      authority: "api.aws.thlonline.com",
      accept: "application/json, text/plain, */*",
      origin: "https://booking.mightycampers.com",
      referer: "https://booking.mightycampers.com/",
    },
  };
  try {
    const response = await axios(options);
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
    return response;
  } catch (error) {
    console.log(error);
  }
}
