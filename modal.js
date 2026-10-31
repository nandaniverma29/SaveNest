const $ = id => document.getElementById(id);
const ov = $("overlay");

function openModal(d) {
  const deal = d.type === "deal";
  const link = d.l || "https://" + d.s;
  if (deal) {
    window.open(link, "_blank", "noopener");
    return
  }
  $("mBrand").textContent = d.b;
  $("mTitle").textContent = d.t;
  $("mCode").textContent = d.c;
  $("msg").textContent = "";
  $("copy").textContent = "Copy";
  $("mLink").href = link;
  $("mLink").textContent = "Continue to " + d.s;
  $("terms").classList.remove("open");
  ov.classList.add("open");
  document.body.style.overflow = "hidden";
  $("copy").focus();
}

function closeModal() {
  ov.classList.remove("open");
  document.body.style.overflow = ""
}

document.addEventListener("click", e => {
  const b = e.target.closest(".show");
  if (b) openModal(window.LISTS[b.dataset.list][b.dataset.i]);
});
$("close").onclick = closeModal;
$("ok").onclick = closeModal;
ov.addEventListener("click", e => {
  if (e.target === ov) closeModal()
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal()
});
$("termsBtn").onclick = () => $("terms").classList.toggle("open");
$("copy").onclick = async () => {
  const code = $("mCode").textContent;
  try {
    await navigator.clipboard.writeText(code)
  } catch (_) {
    const r = document.createRange();
    r.selectNode($("mCode"));
    getSelection().removeAllRanges();
    getSelection().addRange(r);
    document.execCommand("copy")
  }
  $("copy").textContent = "Copied";
  $("msg").textContent = "Code copied to clipboard";
};
