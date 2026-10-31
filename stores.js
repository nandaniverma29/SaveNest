const C = (pct, t, c, m, x) => ["Code", pct, t, c, m || {}, x];
const P = (pct, t, m) => ["Promo", pct, t, "", m || {}];
const STORES = {
  amazon: {
    name: "Amazon",
    site: "https://www.amazon.com",
    domain: "amazon.com",
    color: "#e47911",
    pol: [
      ["Free Shipping", "Free shipping on eligible orders over $35, and fast free delivery for Prime members."],
      ["Returns", "Most items can be returned within 30 days. Some items qualify for free returns."],
      ["Prime Membership", "Prime adds fast delivery, streaming and member-only deals."],
      ["Gift Cards", "Amazon gift cards can be applied at checkout."]
    ],
    pay: ["Credit or Debit Card", "Amazon Gift Card", "Amazon Store Card", "Affirm"],
    offers: [C(20, "20% Off Select Home & Kitchen Items", "AMZHOME20", {
      u: "Used 4h ago",
      n: 62,
      terms: 1
    }), C(10, "10% Off Your Eligible Order", "AMZSAVE10", {
      v: "Verified 3d ago",
      n: 40
    }), C(15, "15% Off Select Electronics", "AMZTECH15", {
      u: "Used 9h ago",
      n: 31
    }), C(5, "5% Off Your First App Order", "AMZAPP5", {
      v: "Verified"
    }), P(40, "Up to 40% Off Daily Lightning Deals", {
      u: "Used 2h ago",
      e: "Oct 8, 2026"
    }), P(30, "Save Up to 30% on Fall Fashion", {
      u: "Used 1d ago",
      e: "Oct 12, 2026"
    })]
  },
  stubhub: {
    name: "StubHub",
    site: "https://www.stubhub.com",
    domain: "stubhub.com",
    color: "#3f1d74",
    pol: [
      ["Ticket Guarantee", "Orders are backed by the FanProtect guarantee: get valid tickets or your money back."],
      ["Delivery", "Tickets are delivered digitally, usually by email or in the StubHub app."],
      ["Pricing", "Prices are set by sellers. Fees and taxes are shown before you pay."],
      ["Selling Tickets", "Fans can list tickets they can no longer use and get paid after the event."]
    ],
    pay: ["Credit or Debit Card", "PayPal", "Apple Pay", "Google Pay"],
    offers: [C(10, "10% Off Your First Ticket Order", "STUBNEW10", {
      v: "Verified",
      terms: 1
    }), C(15, "15% Off Select Concert Tickets", "STUBLIVE15", {
      n: 22
    }), C(8, "8% Off Sports Tickets", "STUBGAME8", {
      n: 18
    }), P(20, "Up to 20% Off Last-Minute Event Tickets", {
      e: "Oct 14, 2026"
    }), P(25, "Save Up to 25% on Fall Theater Shows", {
      e: "Oct 20, 2026"
    })]
  },
  seatgeek: {
    name: "SeatGeek",
    site: "https://seatgeek.com",
    domain: "seatgeek.com",
    color: "#ff5b49",
    pol: [
      ["Buyer Guarantee", "Tickets are backed by a guarantee: get valid tickets or your money back."],
      ["Delivery", "Tickets are delivered digitally in the SeatGeek app or by email."],
      ["Deal Score", "Every listing gets a score so you can quickly spot the best-value seats."],
      ["Selling Tickets", "Fans can list tickets they can no longer use and get paid after the event."]
    ],
    pay: ["Credit or Debit Card", "PayPal", "Apple Pay", "Google Pay"],
    offers: [C(20, "20% Off Your First Ticket Order", "SEATNEW20", {
      u: "Used 3h ago",
      n: 71,
      terms: 1
    }), C(10, "10% Off Concert Tickets", "SEATLIVE10", {
      v: "Verified 1d ago",
      n: 52
    }), C(15, "15% Off Sports Tickets", "SEATGAME15", {
      u: "Used 10h ago",
      n: 29
    }), C(8, "8% Off Your Order", "SEATSAVE8", {
      v: "Verified"
    }), P(25, "Up to 25% Off Last-Minute Event Tickets", {
      u: "Used 1h ago",
      e: "Nov 7, 2026"
    }), P(20, "Save Up to 20% on Fall Theater Shows", {
      u: "Used 6h ago",
      e: "Nov 10, 2026"
    })]
  },
  vividseats: {
    name: "Vivid Seats",
    site: "https://www.vividseats.com",
    domain: "vividseats.com",
    color: "#1f5fd6",
    pol: [
      ["100% Buyer Guarantee", "Get valid tickets in time for the event or your money back."],
      ["Rewards", "Earn Vivid Seats Rewards on every order and use them on future purchases."],
      ["Delivery", "Tickets are delivered digitally by email or in the Vivid Seats app."],
      ["Selling Tickets", "Fans can list tickets they can no longer use and get paid after the event."]
    ],
    pay: ["Credit or Debit Card", "PayPal", "Apple Pay", "Google Pay"],
    offers: [C(20, "20% Off Your First Order", "VIVIDNEW20", {
      u: "Used 5h ago",
      n: 66,
      terms: 1
    }), C(10, "10% Off Your Ticket Order", "VIVIDSAVE10", {
      v: "Verified 1d ago",
      n: 41
    }), C(15, "15% Off Concert Tickets", "VIVIDLIVE15", {
      u: "Used 9h ago",
      n: 28
    }), C(5, "5% Off Sports Tickets", "VIVIDGAME5", {
      v: "Verified"
    }), P(30, "Up to 30% Off Last-Minute Event Tickets", {
      u: "Used 3h ago",
      e: "Nov 8, 2026"
    }), P(20, "Save Up to 20% on Comedy Shows", {
      u: "Used 1d ago",
      e: "Nov 11, 2026"
    })]
  },
  axs: {
    name: "AXS",
    site: "https://www.axs.com",
    domain: "axs.com",
    color: "#111111",
    pol: [
      ["Mobile Tickets", "Tickets are delivered to the AXS app and can be shown on your phone at the venue."],
      ["Official Tickets", "AXS is the official ticketing partner for many major venues and live events."],
      ["Fees", "Service fees and taxes are shown before you complete your order."],
      ["Ticket Resale", "Fans can resell tickets they can no longer use through AXS Presents Ticket Marketplace."]
    ],
    pay: ["Credit or Debit Card", "PayPal", "Apple Pay", "Google Pay"],
    offers: [C(15, "15% Off Your First Ticket Order", "AXSNEW15", {
      u: "Used 4h ago",
      n: 69,
      terms: 1
    }), C(10, "10% Off Concert Tickets", "AXSLIVE10", {
      v: "Verified 2d ago",
      n: 43
    }), C(20, "20% Off Select Festival Passes", "AXSFEST20", {
      u: "Used 10h ago",
      n: 30
    }), C(5, "5% Off Your Order", "AXSSAVE5", {
      v: "Verified"
    }), P(25, "Up to 25% Off Last-Minute Event Tickets", {
      u: "Used 2h ago",
      e: "Nov 6, 2026"
    }), P(20, "Save Up to 20% on Sports & Theater", {
      u: "Used 1d ago",
      e: "Nov 12, 2026"
    })]
  },
  ebay: {
    name: "eBay",
    site: "https://www.ebay.com",
    domain: "ebay.com",
    color: "#e53238",
    pol: [
      ["Money Back Guarantee", "Get the item you ordered or your money back on eligible purchases."],
      ["Returns", "Return policies are set by each seller. Many offer free returns."],
      ["Shipping", "Shipping costs and delivery times vary by seller."],
      ["Authenticity Guarantee", "Eligible sneakers, watches and trading cards are authenticated before delivery."]
    ],
    pay: ["Credit or Debit Card", "PayPal", "Apple Pay", "Google Pay"],
    offers: [C(15, "15% Off Select Electronics", "EBAYTECH15", {
      u: "Used 7h ago",
      n: 44,
      terms: 1
    }), C(10, "10% Off Fashion Orders", "EBAYSTYLE10", {
      v: "Verified 2d ago",
      n: 38
    }), C(20, "20% Off Your Order", "EBAYSAVE20", {
      u: "Used 12h ago",
      n: 27
    }), C(8, "8% Off Eligible Orders", "EBAYFALL8", {
      v: "Verified"
    }), P(50, "Up to 50% Off Refurbished Devices", {
      u: "Used 5h ago",
      e: "Oct 9, 2026"
    }), P(25, "Save Up to 25% on Collectibles", {
      u: "Used 1d ago",
      e: "Oct 11, 2026"
    })]
  },
  walmart: {
    name: "Walmart",
    site: "https://www.walmart.com",
    domain: "walmart.com",
    color: "#0071ce",
    pol: [
      ["Free Shipping", "Free shipping on eligible orders of $35 or more."],
      ["Pickup & Delivery", "Free store pickup and same-day delivery in select areas."],
      ["Returns", "Most items can be returned within 90 days. Some categories differ."],
      ["Walmart+", "A paid membership with free delivery and member perks."]
    ],
    pay: ["Credit or Debit Card", "Walmart Gift Card", "Affirm", "Apple Pay", "SNAP EBT"],
    offers: [C(10, "10% Off Your Online Order", "WMTSAVE10", {
      u: "Used 5h ago",
      n: 58,
      terms: 1
    }), C(15, "15% Off Select Grocery Items", "WMTFOOD15", {
      v: "Verified 2d ago",
      n: 36
    }), C(20, "20% Off Home Essentials", "WMTHOME20", {
      u: "Used 14h ago",
      n: 33
    }), C(5, "5% Off Your First Pickup Order", "WMTPICK5", {
      v: "Verified"
    }), P(40, "Up to 40% Off Rollbacks", {
      u: "Used 3h ago",
      e: "Oct 9, 2026"
    }), P(25, "Save Up to 25% on Toys", {
      u: "Used 1d ago",
      e: "Oct 13, 2026"
    })]
  },
  target: {
    name: "Target",
    site: "https://www.target.com",
    domain: "target.com",
    color: "#cc0000",
    target: 1,
    pol: [
      ["Free Shipping", "Free standard shipping on orders of $35 or more, or free 2-day shipping on eligible items with a Target Circle Card."],
      ["Free Returns", "Most unopened items in new condition can be returned within 90 days."],
      ["Curbside Pickup", "Free Drive Up and Order Pickup via the Target app."],
      ["Loyalty Program", "Target Circle offers deals at checkout, personalized bonuses and rewards."],
      ["Price Matching", "Target matches prices from Target.com and Target stores when requested at purchase."],
      ["Price Adjustment", "If an item goes on sale within 14 days of purchase, you can request an adjustment."],
      ["Special Discounts", "Military, teacher, student and birthday offers are available through Target Circle."],
      ["Gift Cards", "Target offers physical and eGiftCards."]
    ],
    pay: ["Credit or Debit Card", "PayPal", "Affirm", "Apple Pay", "Target GiftCard", "SNAP EBT"],
    offers: [C(25, "Extra 25% Off Your Eligible Order", "TGT25STYLE", {
      u: "Used 9h ago",
      n: 50,
      terms: 1
    }), C(20, "20% Off Target Orders", "TGTSAVE20", {
      u: "Used 11h ago",
      n: 55
    }), C(5, "5% Off Sitewide", "TGTSAVE5", {
      v: "Verified 1wk ago",
      e: "Oct 3, 2026",
      n: 48,
      terms: 1
    }), C(10, "Target Coupon Code - 10% Off", "TGTFALL823", {
      v: "Verified"
    }), C(45, "Target Coupon Code: Save 45%", "TGTBIG520", {
      v: "Verified"
    }), C(25, "Target Promotional Code - 25% Off", "TGTSAVENOW", {
      u: "Used 12h ago",
      n: 45
    }), C(15, "15% Off Selected Office & School Supplies", "TGTSCHOOL", {
      n: 26
    }), C(25, "25% Off All Orders Via The Mobile App", "TGTAPPGO", {
      u: "Used 18h ago",
      n: 4
    }), P(60, "Up to 60% Off Gift Ideas for Mom", {
      u: "Used 6h ago",
      e: "Oct 10, 2026"
    }), P(45, "Enjoy Up to 45% Off Encanto Toys, Clothing, and More", {
      u: "Used 2d ago",
      e: "Oct 6, 2026"
    }), P(75, "Up to 75% Off Apple iPhones, iPads, and Watches", {
      u: "Used 20h ago",
      e: "Oct 6, 2026"
    }), P(15, "Enjoy Up to 15% Off Just-dropped Items", {
      u: "Used 1wk ago",
      e: "Oct 6, 2026"
    })]
  },
  bestbuy: {
    name: "Best Buy",
    site: "https://www.bestbuy.com",
    domain: "bestbuy.com",
    color: "#0046be",
    pol: [
      ["Free Shipping", "Free shipping on eligible orders over $35."],
      ["Store Pickup", "Free in-store pickup on many items, often within an hour."],
      ["Returns", "Most items can be returned within a limited window. Membership tiers may extend it."],
      ["My Best Buy", "Members earn rewards and get member-only prices."],
      ["Geek Squad", "Installation and tech support services are available."]
    ],
    pay: ["Credit or Debit Card", "PayPal", "Apple Pay", "Best Buy Gift Card", "Affirm"],
    offers: [C(10, "10% Off Select Laptops", "BBYLAP10", {
      u: "Used 6h ago",
      n: 47,
      terms: 1
    }), C(15, "15% Off Open-Box Electronics", "BBYOPEN15", {
      v: "Verified 2d ago",
      n: 34
    }), C(20, "20% Off Select Headphones", "BBYAUDIO20", {
      u: "Used 11h ago",
      n: 25
    }), C(5, "5% Off Your First Order", "BBYNEW5", {
      v: "Verified"
    }), P(50, "Up to 50% Off Top Deals of the Week", {
      u: "Used 2h ago",
      e: "Oct 8, 2026"
    }), P(30, "Save Up to 30% on Smart Home", {
      u: "Used 1d ago",
      e: "Oct 12, 2026"
    })]
  }
};
