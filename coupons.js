const tick = '<svg viewBox="0 0 24 24" fill="none" stroke="#1f9d55" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>';
// code = coupon code, site = domain, link = your affiliate/redirect URL. Use type:"deal" for no-code offers.
const trending = [{
  b: "Alexander Wang",
  t: "25% Off Select Styles",
  c: "friends25",
  s: "alexanderwang.com",
  v: "Verified 2d ago",
  l: "https://www.dontpayfull.com/hop/coupon/133246053?p=1&s=popup"
}, {
  b: "Olive and Cocoa",
  t: "10% Off Storewide",
  c: "OCSZ",
  s: "oliveandcocoa.com",
  v: "Verified"
}, {
  b: "Aporro",
  t: "10% Off Sitewide",
  c: "APORRO10",
  s: "aporro.com",
  v: "Verified"
}, {
  b: "Sim Local",
  t: "20% Off All Orders",
  c: "SIM20",
  s: "simlocal.com",
  v: "Verified 2h ago"
}, {
  b: "Mirador",
  t: "Up to 30% Off 111S Pergola on Early Labor Day Sale",
  type: "deal",
  s: "mirador.com",
  v: "Verified"
}, {
  b: "Bed Bath & Beyond",
  t: "15% Off Your Order",
  c: "15OFF",
  s: "bedbathandbeyond.com",
  v: "Verified 6h ago"
}, {
  b: "Qatar Airways",
  t: "10% Off Your Next Qatar Airways Flight",
  c: "QROC",
  s: "qatarairways.com",
  v: "Verified"
}, {
  b: "Bookmap",
  t: "30% Off Global Annual & Global Plus Annual Subscriptions",
  c: "ANNUAL30",
  s: "bookmap.com",
  v: "Verified 6h ago"
}, {
  b: "Performance Golf",
  t: "30% Off Storewide",
  c: "PG30",
  s: "performancegolf.com",
  v: "Verified"
}, {
  b: "Sally Beauty",
  t: "20% Off Storewide",
  c: "SALLY20",
  s: "sallybeauty.com",
  v: "Verified"
}, {
  b: "Costco",
  t: "Free $40 Digital Costco Shop Card when you Join as a New Executive Member",
  c: "EXECBR",
  s: "costco.com",
  v: "Verified 6h ago"
}, {
  b: "Merach",
  t: "10% Off Sitewide",
  c: "MERACH10",
  s: "merach.com",
  v: "Verified 4d ago"
}, {
  b: "American Home Shield",
  t: "50% Off Select Categories Plans",
  c: "AHS50",
  s: "ahs.com",
  v: "Verified"
}, {
  b: "ELEHEAR",
  t: "$30 Off Storewide",
  c: "ELE30",
  s: "elehear.com",
  v: "Verified 1wk ago"
}, {
  b: "Spirit Jersey",
  t: "10% Off Sitewide",
  c: "SPIRIT10",
  s: "spiritjersey.com",
  v: "Verified 1wk ago"
}, {
  b: "Minnow",
  t: "15% Off Your Order",
  c: "MINNOW15",
  s: "minnow.com",
  v: "Verified"
}, {
  b: "JD Sports",
  t: "$15 Off $150 Orders",
  c: "JD15",
  s: "jdsports.com",
  v: "Verified 7h ago"
}];
const fall = [{
  b: "Mirador",
  t: "14% Off Outdoor Furniture Collection",
  c: "OUTDOORNG",
  s: "mirador.com",
  v: "Verified 1wk ago"
}, {
  b: "NEXT",
  t: "$20 Off Your First $100+ Order Via The App",
  type: "deal",
  s: "next.co.uk",
  v: ""
}, {
  b: "MeasureUp",
  t: "15% Off Your Order + Extra 60% Off Back to Certs",
  c: "CERTSBF",
  s: "measureup.com",
  v: "Verified"
}, {
  b: "SpringWell Water",
  t: "Up to 50% Off Whole Home Water Filter Systems",
  type: "deal",
  s: "springwellwater.com",
  v: "Verified"
}, {
  b: "Xlaserlab",
  t: "5% Off Sitewide",
  c: "XLASERF5",
  s: "xlaserlab.com",
  v: "Verified 2h ago"
}, {
  b: "Crocs",
  t: "$20 Off $100 Purchases",
  c: "CROCS20",
  s: "crocs.com",
  v: "Verified 15h ago"
}, {
  b: "CUCKOO America",
  t: "10% Off Electronics & Kitchen Appliances",
  c: "CUCKOO10",
  s: "cuckooamerica.com",
  v: "Verified 6d ago"
}, {
  b: "Mezlan",
  t: "10% Off All Orders",
  c: "MEZLAN10",
  s: "mezlan.com",
  v: "Verified"
}, {
  b: "Saris",
  t: "15% Off Sitewide",
  c: "SARIS15",
  s: "saris.com",
  v: "Verified"
}];
const stores = [
  ["amazon", "#f90"],
  ["StubHub", "#3f1d74"],
  ["SeatGeek", "#ff5b49"],
  ["Vivid Seats", "#1f5fd6"],
  ["AXS", "#111"],
  ["ebay", "#e53238"],
  ["Walmart", "#0071ce"],
  ["target", "#cc0000"],
  ["BEST BUY", "#0046be"]
];

$("stores").innerHTML = stores.map(s => `<a class="store" href="${s[0].toLowerCase().replace(/[^a-z]/g,"")}.html" style="color:${s[1]}">${s[0]==="target"?'<svg width="30" height="30" viewBox="0 0 24 24" style="margin-right:6px"><circle cx="12" cy="12" r="11" fill="#cc0000"/><circle cx="12" cy="12" r="7" fill="#fff"/><circle cx="12" cy="12" r="3.5" fill="#cc0000"/></svg>':""}${s[0]}</a>`).join("");

function render(list, el) {
  $(el).innerHTML = list.map((d, i) => {
    const deal = d.type === "deal";
    const tail = deal ? "" : d.c.slice(-3);
    return `<article class="card">
      <div class="logo">${d.b}</div>
      <div class="body">
        <div class="brand">${d.b}</div>
        <div class="title">${d.t}</div>
        <div class="foot">
          <span class="ver">${d.v?tick+d.v:""}</span>
          <button class="show ${deal?"deal":""}" data-list="${el}" data-i="${i}">${deal?"Get deal":`Show code<i>${tail}</i>`}</button>
        </div>
      </div></article>`;
  }).join("");
}
render(trending, "trending");
render(fall, "fall");
window.LISTS = {
  trending,
  fall
};
