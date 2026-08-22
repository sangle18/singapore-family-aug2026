(() => {
  const data = window.TRIP_DATA;
  const storageKey = "sg-family-tickets-v1";
  const doneKey = "sg-family-done-v1";
  const state = {
    day: "all",
    type: "all",
    search: "",
    sort: "time",
    babyOnly: false,
    prebookOnly: false,
    selectedId: null,
    sheetOpen: false,
    budgetGroup: "all",
    foodDay: "all",
    fx: { sgdVnd: 20490, at: null, source: "ước tính" }
  };

  const typeLabel = {
    flight: "Bay",
    attraction: "Tham quan",
    food: "Ăn uống",
    transport: "Di chuyển",
    rest: "Nghỉ",
    hotel: "Khách sạn"
  };

  const typeSticker = {
    flight: "✈️",
    attraction: "🎟️",
    food: "🍜",
    transport: "🚗",
    rest: "😴",
    hotel: "🏨"
  };

  const els = {
    dayFilter: document.getElementById("dayFilter"),
    typeFilter: document.getElementById("typeFilter"),
    searchInput: document.getElementById("searchInput"),
    sortSelect: document.getElementById("sortSelect"),
    babyOnly: document.getElementById("babyOnly"),
    prebookOnly: document.getElementById("prebookOnly"),
    resultCount: document.getElementById("resultCount"),
    timeline: document.getElementById("timeline"),
    detailPanel: document.getElementById("detailPanel"),
    detailBackdrop: document.getElementById("detailBackdrop"),
    ticketList: document.getElementById("ticketList"),
    ticketSkip: document.getElementById("ticketSkip"),
    ticketProgress: document.getElementById("ticketProgress"),
    resetTickets: document.getElementById("resetTickets"),
    budgetFilter: document.getElementById("budgetFilter"),
    budgetGrid: document.getElementById("budgetGrid"),
    budgetTotal: document.getElementById("budgetTotal"),
    fxStrip: document.getElementById("fxStrip"),
    foodDayFilter: document.getElementById("foodDayFilter"),
    foodGrid: document.getElementById("foodGrid")
  };

  function dayById(id) {
    return (
      data.days.find((d) => d.id === id) || {
        id,
        label: id,
        sticker: "📍",
        weekday: "",
        date: "",
        theme: "",
        tone: ""
      }
    );
  }

  function dayLine(id) {
    const d = dayById(id);
    if (d.weekday && d.date) return `Ngày ${d.id} · ${d.weekday} ${d.date}`;
    return d.label || id;
  }

  function clusterHeadHtml(meta, compact, progress) {
    const num = meta.id && meta.id !== "all" ? `Ngày ${meta.id}` : "";
    const prog = progress
      ? `<p class="day-progress">${progress.done}/${progress.total} đã xong</p>`
      : "";
    return `
      <header class="day-cluster-head${compact ? " compact" : ""}${meta.tone ? " tone-" + meta.tone : ""}">
        <span class="sticker" aria-hidden="true">${meta.sticker || "📍"}</span>
        <div>
          ${num ? `<p class="day-num">${num}</p>` : ""}
          <p class="day-kicker">${meta.weekday || ""} · ${meta.date || meta.label}</p>
          <h3>${meta.theme || meta.label}</h3>
          ${prog}
        </div>
      </header>
    `;
  }

  function groupByDay(list) {
    const order = [];
    const grouped = new Map();
    list.forEach((item) => {
      if (!grouped.has(item.day)) {
        grouped.set(item.day, []);
        order.push(item.day);
      }
      grouped.get(item.day).push(item);
    });
    return order.map((day) => ({
      day,
      meta: dayById(day),
      items: grouped.get(day)
    }));
  }

  function renderChips(container, items, key, onChange) {
    if (!container) return;
    container.innerHTML = "";
    items.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "chip" +
        (state[key] === item.id ? " active" : "") +
        (item.tone ? ` tone-${item.tone}` : "");
      const caption =
        item.date && item.id !== "all" ? `${item.label} · ${item.date}` : item.label;
      btn.setAttribute("aria-label", caption);
      const visual =
        item.date && item.id !== "all"
          ? `${item.label} <span class="chip-date">· ${item.date}</span>`
          : item.label;
      btn.innerHTML = item.sticker
        ? `<span class="chip-sticker" aria-hidden="true">${item.sticker}</span><span>${visual}</span>`
        : visual;
      btn.addEventListener("click", () => {
        state[key] = item.id;
        renderChips(container, items, key, onChange);
        onChange();
      });
      container.appendChild(btn);
    });
  }

  function filteredItems() {
    const q = state.search.trim().toLowerCase();
    let list = data.items.filter((item) => {
      if (state.day !== "all" && item.day !== state.day) return false;
      if (state.type !== "all" && item.type !== state.type) return false;
      if (state.babyOnly && !item.baby) return false;
      if (state.prebookOnly && !item.prebook) return false;
      if (q) {
        const hay = `${item.title} ${item.place} ${(item.notes || []).join(" ")} ${item.eat || ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    list = list.slice().sort((a, b) => {
      if (state.sort === "day") {
        return a.day.localeCompare(b.day) || a.time.localeCompare(b.time);
      }
      if (state.sort === "price") {
        return b.price - a.price || a.time.localeCompare(b.time);
      }
      return a.day.localeCompare(b.day) || a.time.localeCompare(b.time);
    });
    return list;
  }

  function loadDoneState() {
    try {
      return JSON.parse(localStorage.getItem(doneKey) || "{}");
    } catch {
      return {};
    }
  }

  function saveDoneState(map) {
    localStorage.setItem(doneKey, JSON.stringify(map));
  }

  function isDone(id) {
    return !!loadDoneState()[id];
  }

  function setDone(id, value) {
    const next = loadDoneState();
    next[id] = value;
    saveDoneState(next);
  }

  function renderItemRow(item) {
    const done = isDone(item.id);
    const row = document.createElement("article");
    row.className =
      "item" +
      (state.selectedId === item.id ? " selected" : "") +
      (done ? " completed" : "");
    row.innerHTML = `
      <label class="item-check">
        <input type="checkbox" ${done ? "checked" : ""} aria-label="Đánh dấu đã xong: ${item.title}" />
      </label>
      <button type="button" class="item-body">
        <div class="item-top">
          <span class="item-time">${item.time}${item.end ? "–" + item.end : ""}</span>
          <span class="sticker-mini" title="${typeLabel[item.type] || item.type}">${typeSticker[item.type] || "📍"}</span>
        </div>
        <p class="item-title">${item.title}</p>
        <div class="item-tags">
          <span class="tag ${item.type}">${typeLabel[item.type] || item.type}</span>
          ${item.baby ? `<span class="tag">Baby facility</span>` : ""}
          ${item.prebook ? `<span class="tag">Mua trước</span>` : ""}
          ${item.maps ? `<span class="tag">Maps</span>` : ""}
          ${item.price > 0 ? `<span class="tag">~S$${item.price}</span>` : `<span class="tag">Free / incl.</span>`}
        </div>
      </button>
    `;
    const checkbox = row.querySelector("input");
    checkbox.addEventListener("click", (e) => e.stopPropagation());
    checkbox.addEventListener("change", () => {
      setDone(item.id, checkbox.checked);
      renderTimeline();
    });
    row.querySelector(".item-body").addEventListener("click", () => {
      state.selectedId = item.id;
      if (isMobileLayout()) state.sheetOpen = true;
      renderTimeline();
    });
    return row;
  }

  function renderTimeline() {
    const list = filteredItems();
    const doneMap = loadDoneState();
    const doneCount = list.filter((i) => doneMap[i.id]).length;
    els.resultCount.textContent = `${list.length} mục khớp bộ lọc · ${doneCount} đã xong`;
    els.timeline.innerHTML = "";

    if (!list.length) {
      els.timeline.innerHTML = `<p class="detail-empty">Không có mục nào. Thử bỏ bớt filter.</p>`;
      renderDetail();
      return;
    }

    if (state.selectedId && !list.some((i) => i.id === state.selectedId)) {
      state.selectedId = isMobileLayout() ? null : list[0].id;
      if (!state.selectedId) state.sheetOpen = false;
    }
    if (!state.selectedId && !isMobileLayout()) state.selectedId = list[0].id;

    groupByDay(list).forEach((group) => {
      const cluster = document.createElement("section");
      cluster.className = "day-cluster" + (group.meta.tone ? ` tone-${group.meta.tone}` : "");
      const progress = {
        done: group.items.filter((i) => doneMap[i.id]).length,
        total: group.items.length
      };
      cluster.innerHTML = clusterHeadHtml(group.meta, false, progress);
      const holder = document.createElement("div");
      holder.className = "day-cluster-items";
      group.items.forEach((item) => holder.appendChild(renderItemRow(item)));
      cluster.appendChild(holder);
      els.timeline.appendChild(cluster);
    });

    renderDetail();
  }

  function isMobileLayout() {
    return window.matchMedia("(max-width: 860px)").matches;
  }

  function clearSheetPin() {
    [els.detailPanel, els.detailBackdrop].forEach((el) => {
      if (!el) return;
      el.style.top = "";
      el.style.left = "";
      el.style.right = "";
      el.style.bottom = "";
      el.style.width = "";
      el.style.height = "";
      el.style.maxHeight = "";
    });
  }

  function parkDetailNodes() {
    const split = document.querySelector(".layout-split");
    const panel = document.querySelector(".filters-panel");
    if (!els.detailPanel) return;
    if (isMobileLayout()) {
      if (els.detailBackdrop) document.body.appendChild(els.detailBackdrop);
      document.body.appendChild(els.detailPanel);
    } else if (split) {
      split.appendChild(els.detailPanel);
      if (els.detailBackdrop && panel) panel.appendChild(els.detailBackdrop);
      clearSheetPin();
    }
  }

  function pinSheetToView() {
    if (!isMobileLayout() || !state.sheetOpen || !els.detailPanel) {
      if (!isMobileLayout()) clearSheetPin();
      return;
    }
    const vv = window.visualViewport;
    if (!vv) {
      els.detailPanel.style.bottom = "0px";
      els.detailPanel.style.maxHeight = "78dvh";
      return;
    }
    const fromBottom = Math.max(0, window.innerHeight - vv.offsetTop - vv.height);
    els.detailPanel.style.left = `${vv.offsetLeft + 10}px`;
    els.detailPanel.style.right = `${Math.max(10, window.innerWidth - vv.offsetLeft - vv.width + 10)}px`;
    els.detailPanel.style.bottom = `${fromBottom}px`;
    els.detailPanel.style.top = "auto";
    els.detailPanel.style.maxHeight = `${Math.min(vv.height * 0.78, 580)}px`;
    if (els.detailBackdrop) {
      els.detailBackdrop.style.top = `${vv.offsetTop}px`;
      els.detailBackdrop.style.left = `${vv.offsetLeft}px`;
      els.detailBackdrop.style.width = `${vv.width}px`;
      els.detailBackdrop.style.height = `${vv.height}px`;
      els.detailBackdrop.style.right = "auto";
      els.detailBackdrop.style.bottom = "auto";
    }
  }

  function lockPageScroll(lock) {
    if (lock) {
      if (document.body.dataset.lockScroll === "1") return;
      document.body.dataset.lockScroll = "1";
      document.body.dataset.scrollY = String(window.scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${document.body.dataset.scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else if (document.body.dataset.lockScroll === "1") {
      const y = Number(document.body.dataset.scrollY || 0);
      delete document.body.dataset.lockScroll;
      delete document.body.dataset.scrollY;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
    }
  }

  function closeDetailSheet() {
    state.sheetOpen = false;
    syncDetailSheet();
  }

  function syncDetailSheet() {
    parkDetailNodes();
    const open = isMobileLayout() && state.sheetOpen && !!state.selectedId;
    els.detailPanel.classList.toggle("is-open", open);
    els.detailPanel.setAttribute("aria-modal", open ? "true" : "false");
    if (els.detailBackdrop) {
      els.detailBackdrop.hidden = !open;
      els.detailBackdrop.classList.toggle("is-open", open);
    }
    document.body.classList.toggle("sheet-open", open);
    lockPageScroll(open);
    pinSheetToView();
  }

  function renderDetail() {
    const item = data.items.find((i) => i.id === state.selectedId);
    if (!item) {
      els.detailPanel.classList.remove("completed", "is-open");
      els.detailPanel.innerHTML = `<p class="detail-empty">Chọn một mục bên trái để xem chi tiết.</p>`;
      syncDetailSheet();
      return;
    }
    const meta = dayById(item.day);
    const done = isDone(item.id);
    els.detailPanel.classList.toggle("completed", done);
    els.detailPanel.innerHTML = `
      <button type="button" class="detail-close" id="closeDetail" aria-label="Đóng chú thích">Đóng</button>
      <span class="sticker detail-sticker" aria-hidden="true">${meta.sticker || typeSticker[item.type] || "📍"}</span>
      ${meta.id && meta.id !== "all" ? `<p class="day-num tone-${meta.tone || ""}">Ngày ${meta.id}</p>` : ""}
      <h3>${item.title}</h3>
      <p class="meta-line">${dayLine(item.day)} · ${item.time}${item.end ? "–" + item.end : ""} · ${item.place}</p>
      <div class="item-tags" style="margin-bottom:0.75rem">
        <span class="tag ${item.type}">${typeLabel[item.type]}</span>
        ${item.baby ? `<span class="tag">Baby facility</span>` : ""}
        ${item.prebook ? `<span class="tag">Cần mua trước</span>` : ""}
        ${done ? `<span class="tag">Đã xong</span>` : ""}
      </div>
      ${item.eat ? `<p class="meta-line"><strong>Nên ăn:</strong> ${item.eat}</p>` : ""}
      <ul>${(item.notes || []).map((n) => `<li>${n}</li>`).join("")}</ul>
      <div class="detail-actions">
        <label class="toggle">
          <input type="checkbox" id="detailDone" ${done ? "checked" : ""} />
          <span>${done ? "Đã check-in" : "Check-in / đánh dấu xong"}</span>
        </label>
        ${item.maps ? `<a class="btn primary small" href="${item.maps}" target="_blank" rel="noopener">Google Maps</a>` : ""}
        ${item.link ? `<a class="btn ghost small" href="${item.link}" target="_blank" rel="noopener">Trang chính thức</a>` : ""}
        <button type="button" class="btn ghost small" id="copyItem">Copy ghi chú</button>
      </div>
    `;
    const doneBox = document.getElementById("detailDone");
    if (doneBox) {
      doneBox.addEventListener("change", () => {
        setDone(item.id, doneBox.checked);
        renderTimeline();
      });
    }
    const copyBtn = document.getElementById("copyItem");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        const text = [
          item.title,
          `${dayLine(item.day)} ${item.time}-${item.end || ""}`,
          item.place,
          item.eat ? `Nên ăn: ${item.eat}` : "",
          ...(item.notes || []).map((n) => `- ${n}`),
          item.maps || ""
        ]
          .filter(Boolean)
          .join("\n");
        try {
          await navigator.clipboard.writeText(text);
          copyBtn.textContent = "Đã copy";
          setTimeout(() => (copyBtn.textContent = "Copy ghi chú"), 1200);
        } catch {
          copyBtn.textContent = "Copy thủ công";
        }
      });
    }
    const closeBtn = document.getElementById("closeDetail");
    if (closeBtn) closeBtn.addEventListener("click", closeDetailSheet);
    syncDetailSheet();
  }

  function recHtml(r, linkNames) {
    if (typeof r === "string") return `<li>${r}</li>`;
    const name = r.maps && linkNames
      ? `<a class="place-link" href="${r.maps}" target="_blank" rel="noopener">${r.name}</a>`
      : `<strong>${r.name}</strong>`;
    return `<li><span class="rec-copy">${name}${r.note ? ` — ${r.note}` : ""}</span></li>`;
  }

  function renderFood() {
    if (!els.foodGrid) return;
    const list = data.foods.filter((f) => state.foodDay === "all" || f.day === state.foodDay);
    els.foodGrid.innerHTML = groupByDay(list)
      .map(
        (group) => `
      <section class="food-cluster${group.meta.tone ? " tone-" + group.meta.tone : ""}">
        ${clusterHeadHtml(group.meta, true)}
        <div class="food-cluster-grid">
          ${group.items
            .map((f) => {
              const multi = f.recommend.length > 1;
              return `
            <article class="food-card">
              <div class="meal"><span class="sticker-mini">${f.meal === "Tối" ? "🌙" : "☀️"}</span>${f.meal}</div>
              <h3>${f.title}</h3>
              <p class="place-line">${f.place}</p>
              <ul>${f.recommend.map((r) => recHtml(r, multi)).join("")}</ul>
              ${f.avoid ? `<p class="avoid">Lưu ý: ${f.avoid}</p>` : ""}
              <div class="food-actions">
                ${
                  multi
                    ? ""
                    : `<a class="btn primary small" href="${f.maps}" target="_blank" rel="noopener">Google Maps</a>`
                }
                <span class="price">${f.price}</span>
              </div>
            </article>`;
            })
            .join("")}
        </div>
      </section>`
      )
      .join("");
  }

  function loadTicketState() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "{}");
    } catch {
      return {};
    }
  }

  function saveTicketState(map) {
    localStorage.setItem(storageKey, JSON.stringify(map));
  }

  function renderTickets() {
    const map = loadTicketState();
    els.ticketList.innerHTML = "";
    let done = 0;
    data.tickets.forEach((t) => {
      if (map[t.id]) done += 1;
      const li = document.createElement("li");
      if (map[t.id]) li.classList.add("done");
      if (t.optional) li.classList.add("optional");
      li.innerHTML = `
        <input type="checkbox" id="${t.id}" ${map[t.id] ? "checked" : ""} />
        <label for="${t.id}">
          <strong>${t.title}</strong>
          <span>${t.meta}${t.url ? ` · <a href="${t.url}" target="_blank" rel="noopener">mua</a>` : ""}</span>
        </label>
        <div class="ticket-price">${t.price}</div>
      `;
      const checkbox = li.querySelector("input");
      checkbox.addEventListener("change", () => {
        const next = loadTicketState();
        next[t.id] = checkbox.checked;
        saveTicketState(next);
        renderTickets();
      });
      els.ticketList.appendChild(li);
    });
    els.ticketProgress.textContent = `${done}/${data.tickets.length} đã xong`;
    if (els.ticketSkip && data.ticketSkip) {
      els.ticketSkip.innerHTML = `
        <h3>Không mua</h3>
        <ul>${data.ticketSkip.map((n) => `<li>${n}</li>`).join("")}</ul>
      `;
    }
  }

  function formatVnd(sgd) {
    return "₫" + Math.round(sgd * state.fx.sgdVnd).toLocaleString("vi-VN");
  }

  function formatRate(n) {
    return Math.round(Number(n) || 0).toLocaleString("vi-VN");
  }

  function formatFxWhen(at) {
    if (!at) return "vừa lấy";
    const d = new Date(at);
    if (Number.isNaN(d.getTime())) return String(at);
    return d.toLocaleString("vi-VN", { dateStyle: "short", timeStyle: "short" });
  }

  function readCachedFx() {
    try {
      const raw = JSON.parse(localStorage.getItem("sg-family-fx-v1") || "null");
      if (!raw || !raw.sgdVnd || !raw.savedAt) return null;
      if (Date.now() - raw.savedAt > 6 * 60 * 60 * 1000) return null;
      return raw;
    } catch {
      return null;
    }
  }

  async function fetchJson(url) {
    const ctrl = new AbortController();
    const t = window.setTimeout(() => ctrl.abort(), 7000);
    try {
      const res = await fetch(url, { signal: ctrl.signal });
      if (!res.ok) throw new Error("fx http");
      return await res.json();
    } finally {
      window.clearTimeout(t);
    }
  }

  async function loadFx() {
    const cached = readCachedFx();
    if (cached) {
      state.fx = { sgdVnd: cached.sgdVnd, at: cached.at, source: cached.source };
      renderBudget();
    }

    const apply = (sgdVnd, at, source) => {
      if (!sgdVnd || sgdVnd < 1000) return false;
      state.fx = { sgdVnd, at, source };
      localStorage.setItem(
        "sg-family-fx-v1",
        JSON.stringify({ sgdVnd, at, source, savedAt: Date.now() })
      );
      renderBudget();
      return true;
    };

    try {
      const d = await fetchJson("https://open.er-api.com/v6/latest/SGD");
      if (apply(d.rates && d.rates.VND, d.time_last_update_utc || "", "open.er-api.com")) return;
    } catch {
      /* thử nguồn phụ */
    }
    try {
      const d = await fetchJson(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/sgd.min.json"
      );
      const n = d.sgd && d.sgd.vnd;
      if (apply(n, d.date || "", "currency-api")) return;
    } catch {
      /* giữ cache hoặc ước tính */
    }
    if (!cached) renderBudget();
  }

  function renderBudget() {
    const groups = [
      { id: "all", label: "Tất cả" },
      { id: "fixed", label: "Đã cố định" },
      { id: "tickets", label: "Vé / SIM" },
      { id: "daily", label: "Chi tiêu ngày" }
    ];
    renderChips(els.budgetFilter, groups, "budgetGroup", renderBudget);

    const list = data.budget.filter(
      (b) => state.budgetGroup === "all" || b.group === state.budgetGroup
    );
    els.budgetGrid.innerHTML = list
      .map(
        (b) => `
      <article class="budget-card">
        <h3>${b.label}</h3>
        <p>S$${b.amount.toLocaleString("en-SG")}</p>
        <span class="vnd">${formatVnd(b.amount)}</span>
        <small>${b.note}</small>
      </article>`
      )
      .join("");

    const sum = list.reduce((acc, b) => acc + b.amount, 0);
    const all = data.budget.reduce((acc, b) => acc + b.amount, 0);
    els.budgetTotal.innerHTML = `
      <span>Đang lọc: <strong>S$${sum.toLocaleString("en-SG")}</strong> · ${formatVnd(sum)}</span>
      <span>Tổng ước tính tại SG: <strong>S$${all.toLocaleString("en-SG")}</strong> · ${formatVnd(all)}</span>
    `;

    if (els.fxStrip) {
      const when = formatFxWhen(state.fx.at);
      const live = state.fx.source !== "ước tính";
      els.fxStrip.innerHTML = `
        <p class="fx-kicker">${live ? "Tỉ giá trực tiếp" : "Tỉ giá tạm"} · SGD → VND</p>
        <p class="fx-rate">1 SGD = <strong>${formatRate(state.fx.sgdVnd)} ₫</strong></p>
        <p class="fx-examples">10 SGD ≈ ${formatVnd(10)} · 50 SGD ≈ ${formatVnd(50)} · 100 SGD ≈ ${formatVnd(100)}</p>
        <p class="fx-meta">Cập nhật: ${when}${live ? " · " + state.fx.source : " · dùng mức ước tính nếu mạng lỗi"}</p>
      `;
    }
  }

  function overlaps(a, b, pad) {
    return !(
      a.right + pad < b.left ||
      a.left - pad > b.right ||
      a.bottom + pad < b.top ||
      a.top - pad > b.bottom
    );
  }

  function placeHeroStickers() {
    const field = document.querySelector(".sticker-field");
    const copy = document.querySelector(".hero-copy");
    if (!field || !copy) return;

    const all = Array.from(field.querySelectorAll(".float-sticker"));
    const fieldRect = field.getBoundingClientRect();
    const copyRect = copy.getBoundingClientRect();
    const size = all[0] ? all[0].offsetWidth || 50 : 50;
    const wide = fieldRect.width >= 640;
    const slots = wide
      ? [
          { x: [0.03, 0.11], y: [0.05, 0.14] },
          { x: [0.84, 0.93], y: [0.04, 0.13] },
          { x: [0.58, 0.70], y: [0.05, 0.14] },
          { x: [0.86, 0.94], y: [0.30, 0.44] },
          { x: [0.80, 0.90], y: [0.58, 0.70] }
        ]
      : [
          { x: [0.04, 0.12], y: [0.04, 0.12] },
          { x: [0.80, 0.90], y: [0.04, 0.12] },
          { x: [0.82, 0.92], y: [0.22, 0.34] }
        ];
    const rots = wide ? [10, -12, 7, -8, 14] : [9, -11, 8];
    const stickers = all.slice().sort(() => Math.random() - 0.5);

    all.forEach((el) => el.classList.remove("is-placed"));

    stickers.forEach((el, i) => {
      const slot = slots[i];
      if (!slot) return;
      let placed = false;
      for (let n = 0; n < 8; n += 1) {
        const x = (slot.x[0] + Math.random() * (slot.x[1] - slot.x[0])) * (fieldRect.width - size);
        const y = (slot.y[0] + Math.random() * (slot.y[1] - slot.y[0])) * (fieldRect.height - size);
        const abs = {
          left: fieldRect.left + x,
          top: fieldRect.top + y,
          right: fieldRect.left + x + size,
          bottom: fieldRect.top + y + size
        };
        if (overlaps(abs, copyRect, 28)) continue;
        const rot = (rots[i] || 8) + (Math.random() * 6 - 3);
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.right = "auto";
        el.style.bottom = "auto";
        el.style.transform = `rotate(${rot.toFixed(1)}deg)`;
        el.classList.add("is-placed");
        placed = true;
        break;
      }
      if (!placed) el.classList.remove("is-placed");
    });
  }

  function bind() {
    els.searchInput.addEventListener("input", () => {
      state.search = els.searchInput.value;
      renderTimeline();
    });
    els.sortSelect.addEventListener("change", () => {
      state.sort = els.sortSelect.value;
      renderTimeline();
    });
    els.babyOnly.addEventListener("change", () => {
      state.babyOnly = els.babyOnly.checked;
      renderTimeline();
    });
    els.prebookOnly.addEventListener("change", () => {
      state.prebookOnly = els.prebookOnly.checked;
      renderTimeline();
    });
    els.resetTickets.addEventListener("click", () => {
      localStorage.removeItem(storageKey);
      renderTickets();
    });
    if (els.detailBackdrop) {
      els.detailBackdrop.addEventListener("click", closeDetailSheet);
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && state.sheetOpen) closeDetailSheet();
    });
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", pinSheetToView);
      window.visualViewport.addEventListener("scroll", pinSheetToView);
    }
  }

  renderChips(els.dayFilter, data.days, "day", renderTimeline);
  renderChips(els.typeFilter, data.types, "type", renderTimeline);
  renderChips(els.foodDayFilter, data.days, "foodDay", renderFood);
  bind();
  renderTimeline();
  renderFood();
  renderTickets();
  renderBudget();
  loadFx();
  window.requestAnimationFrame(placeHeroStickers);
  window.addEventListener("resize", () => {
    window.clearTimeout(placeHeroStickers._t);
    placeHeroStickers._t = window.setTimeout(placeHeroStickers, 180);
    syncDetailSheet();
  });
})();
