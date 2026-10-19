document.querySelectorAll("[data-news-toggle]").forEach((button) => {
  const table = document.getElementById(button.getAttribute("aria-controls"));
  const olderRows = table?.querySelectorAll("[data-news-extra]");
  if (!olderRows?.length) return;

  // Keep all updates readable when JavaScript is unavailable.
  olderRows.forEach((row) => {
    row.hidden = true;
  });
  button.hidden = false;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(expanded));
    olderRows.forEach((row) => {
      row.hidden = !expanded;
    });
    button.textContent = expanded ? button.dataset.showLess : `${button.dataset.showMore} (${button.dataset.newsCount})`;
  });
});
