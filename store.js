const bull = s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#cc0000"/><circle cx="12" cy="12" r="7" fill="#fff"/><circle cx="12" cy="12" r="3.5" fill="#cc0000"/></svg>`;
const S = STORES[document.body.dataset.store];
const offers = S.offers.map(([k, pct, t, c, m, x]) => ({
  b: S.name,
  s: S.domain,
  l: S.site,
  k,
  pct,
  t,
  c,
  type: c ? "code" : "deal",
  ...m,
  tags: [c ? "code" : "deal", ...(m.v ? ["verified"] : []), ...(x || [])]
}));
window.LISTS = {
  t: offers
};
const tabs = [
  ["all", "All"],
  ["code", "Codes"],
  ["deal", "Deals"],
  ["verified", "Verified"],
  ["new", "New"],
  ["ship", "Free shipping"],
  ["first", "First order discount"]
];
let cur = "all";
const tabsEl = $("tabs"),
  listEl = $("offers");
const cnt = k => k === "all" ? offers.length : offers.filter(o => o.tags.includes(k)).length;

function draw() {
  tabsEl.innerHTML = tabs.map(([k, l]) => `<button class="${k===cur?"on":""}" data-k="${k}" ${cnt(k)?"":"disabled"}>${l}</button>`).join("");
  const rows = offers.map((o, i) => [o, i]).filter(([o]) => cur === "all" || o.tags.includes(cur));
  listEl.innerHTML = rows.map(([o, i]) => `<article class="of"><div class="of-top"><div class="disc">${o.pct}%<small>OFF</small></div>
 <div class="of-mid"><div class="kind"><i class="dot" style="background:${S.color}"></i> ${o.k}${o.v?` &middot; <b>${o.v}</b>`:""}</div><h3>${o.t}</h3><div class="meta">${o.u||""}${o.e?` &nbsp;&middot;&nbsp; Ends ${o.e}`:""}</div></div>
 <div class="of-act"><button class="show ${o.c?"":"deal"}" data-list="t" data-i="${i}">${o.c?`Show code<i>${o.c.slice(-3)}</i>`:"Get deal"}</button>${o.terms?'<div class="terms-note">*see terms</div>':""}</div></div>
 <div class="of-bar"><button class="det" aria-expanded="false" data-d="${i}">Details &#9662;</button><span>${o.n?o.n+" verifications":""}</span></div>
 <div class="of-det" id="d${i}">${o.c?"Click Show code, copy the code and paste it into the promo box at checkout on "+S.domain+". Terms and exclusions may apply.":"Click Get deal to open this offer on "+S.domain+". No code is needed."}</div></article>`).join("");
}
tabsEl.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b && !b.disabled) {
    cur = b.dataset.k;
    draw()
  }
});
listEl.addEventListener("click", e => {
  const b = e.target.closest(".det");
  if (!b) return;
  const p = $("d" + b.dataset.d),
    o = p.classList.toggle("open");
  b.setAttribute("aria-expanded", o)
});
$("today").textContent = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric"
});
$("total").textContent = offers.length;
$("stats").innerHTML = [
  ["Coupon codes", cnt("code")],
  ["Best coupon", Math.max(...offers.map(o => o.pct)) + "% Off"],
  ["Verified codes", cnt("verified")],
  ["Last updated", new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })]
].map(([a, b]) => `<div class="stat"><span>${a}:</span><span>${b}</span></div>`).join("");
$("wm").innerHTML = (S.target ? bull(60) + "<br>" : "") + S.name;
$("wm").style.color = S.color;
$("logoLink").href = S.site;
$("shop").href = S.site;
$("pol").innerHTML = S.pol.map(([a, b]) => `<li><b>${a}</b>${b}</li>`).join("");
$("pay").innerHTML = S.pay.map(p => `<span>${p}</span>`).join("");
document.querySelectorAll(".sn").forEach(e => e.textContent = S.name);
let on = false;
const fol = $("follow");
fol.onclick = () => {
  on = !on;
  fol.classList.toggle("on", on);
  fol.innerHTML = on ? "&#10003; Following" : "&#9825; Follow"
};
draw();
