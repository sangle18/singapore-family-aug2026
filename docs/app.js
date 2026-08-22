(() => {
  const data = window.TRIP_DATA;
  const storageKey = "sg-family-tickets-v1";
  const state = {
    day: "all",
    type: "all",
    search: "",
    sort: "time",
    babyOnly: false,
    prebookOnly: false,
    selectedId: null,
    budgetGroup: "all",
    foodDay: "all"
  };

  const typeLabel = {
    flight: "Bay",
    attraction: "Attraction",
    food: "Ăn uống",
    transport: "Di chuyển",
    rest: "Nghỉ",
    hotel: "Khách sạn"
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
    ticketList: document.getElementById("ticketList"),
    ticketProgress: document.getElementById("ticketProgress"),
    resetTickets: document.getElementById("resetTickets"),
    budgetFilter: document.getElementById("budgetFilter"),
    budgetGrid: document.getElementById("budgetGrid"),
    budgetTotal: document.getElementById("budgetTotal"),
    foodDayFilter: document.getElementById("foodDayFilter"),
    foodGrid: document.getElementById("foodGrid"),
    additionalGrid: document.getElementById("additionalGrid")
  };

  function renderChips(container, items, key, onChange) {
    if (!container) return;
    container.innerHTML = "";
    items.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (state[key] === item.id ? " active" : "");
      btn.textContent = item.label;
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

  function renderTimeline() {
    const list = filteredItems();
    els.resultCount.textContent = `${list.length} mục khớp bộ lọc`;
    els.timeline.innerHTML = "";

    if (!list.length) {
      els.timeline.innerHTML = `<p class="detail-empty">Không có mục nào. Thử bỏ bớt filter.</p>`;
      return;
    }

    if (state.selectedId && !list.some((i) => i.id === state.selectedId)) {
      state.selectedId = list[0].id;
    }
    if (!state.selectedId) state.selectedId = list[0].id;

    list.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "item" + (state.selectedId === item.id ? " selected" : "");
      btn.innerHTML = `
        <div class="item-top">
          <span class="item-day">Ngày ${item.day}</span>
          <span class="item-time">${item.time}${item.end ? "–" + item.end : ""}</span>
        </div>
        <p class="item-title">${item.title}</p>
        <div class="item-tags">
          <span class="tag ${item.type}">${typeLabel[item.type] || item.type}</span>
          ${item.baby ? `<span class="tag">Baby facility</span>` : ""}
          ${item.prebook ? `<span class="tag">Mua trước</span>` : ""}
          ${item.maps ? `<span class="tag">Maps</span>` : ""}
          ${item.price > 0 ? `<span class="tag">~S$${item.price}</span>` : `<span class="tag">Free / incl.</span>`}
        </div>
      `;
      btn.addEventListener("click", () => {
        state.selectedId = item.id;
        renderTimeline();
        renderDetail();
      });
      els.timeline.appendChild(btn);
    });

    renderDetail();
  }

  function renderDetail() {
    const item = data.items.find((i) => i.id === state.selectedId);
    if (!item) {
      els.detailPanel.innerHTML = `<p class="detail-empty">Chọn một mục bên trái để xem chi tiết.</p>`;
      return;
    }
    els.detailPanel.innerHTML = `
      <h3>${item.title}</h3>
      <p class="meta-line">Ngày ${item.day} · ${item.time}${item.end ? "–" + item.end : ""} · ${item.place}</p>
      <div class="item-tags" style="margin-bottom:0.75rem">
        <span class="tag ${item.type}">${typeLabel[item.type]}</span>
        ${item.baby ? `<span class="tag">Baby facility</span>` : ""}
        ${item.prebook ? `<span class="tag">Cần mua trước</span>` : ""}
      </div>
      ${item.eat ? `<p class="meta-line"><strong>Nên ăn:</strong> ${item.eat}</p>` : ""}
      <ul>${(item.notes || []).map((n) => `<li>${n}</li>`).join("")}</ul>
      <div class="detail-actions">
        ${item.maps ? `<a class="btn primary small" href="${item.maps}" target="_blank" rel="noopener">Google Maps</a>` : ""}
        ${item.link ? `<a class="btn ghost small" href="${item.link}" target="_blank" rel="noopener">Trang chính thức</a>` : ""}
        <button type="button" class="btn ghost small" id="copyItem">Copy ghi chú</button>
      </div>
    `;
    const copyBtn = document.getElementById("copyItem");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        const text = [
          item.title,
          `Ngày ${item.day} ${item.time}-${item.end || ""}`,
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
  }

  function renderFoodCard(f, extraClass) {
    const dayLabel = f.day === "all" ? "Mọi ngày" : `Ngày ${f.day}`;
    const catLabel =
      f.category === "attraction" ? "Khu chơi thêm" : f.category === "food" ? "Ăn thêm" : "";
    return `
      <article class="food-card ${extraClass || ""}">
        <div class="meal">${dayLabel} · ${f.meal}${catLabel ? ` · ${catLabel}` : ""}</div>
        <h3>${f.title}</h3>
        ${f.subtitle ? `<p class="subtitle-line">${f.subtitle}</p>` : ""}
        ${f.source ? `<p class="source-line">${f.source}</p>` : ""}
        <p class="place-line">${f.place}</p>
        <ul>${f.recommend.map((r) => `<li>${r}</li>`).join("")}</ul>
        ${f.avoid ? `<p class="avoid">Lưu ý: ${f.avoid}</p>` : ""}
        <div class="food-actions">
          <a class="btn primary small" href="${f.maps}" target="_blank" rel="noopener">Google Maps</a>
          <span class="price">${f.price}</span>
        </div>
      </article>`;
  }

  function renderFood() {
    if (!els.foodGrid) return;
    const list = data.foods.filter((f) => state.foodDay === "all" || f.day === state.foodDay);
    els.foodGrid.innerHTML = list.map((f) => renderFoodCard(f)).join("");

    if (els.additionalGrid && data.additionalOptions) {
      const extras = data.additionalOptions.filter(
        (f) => state.foodDay === "all" || f.day === state.foodDay || f.day === "all"
      );
      els.additionalGrid.innerHTML = extras.length
        ? extras.map((f) => renderFoodCard(f, "additional")).join("")
        : `<p class="detail-empty">Không có additional option cho ngày này.</p>`;
    }
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
        <small>${b.note}</small>
      </article>`
      )
      .join("");

    const sum = list.reduce((acc, b) => acc + b.amount, 0);
    const all = data.budget.reduce((acc, b) => acc + b.amount, 0);
    els.budgetTotal.innerHTML = `
      <span>Đang lọc: <strong>S$${sum.toLocaleString("en-SG")}</strong></span>
      <span>Tổng ước tính tại SG: <strong>S$${all.toLocaleString("en-SG")}</strong> ≈ ₫${Math.round(all * 20490).toLocaleString("vi-VN")}</span>
    `;
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
  }

  renderChips(els.dayFilter, data.days, "day", renderTimeline);
  renderChips(els.typeFilter, data.types, "type", renderTimeline);
  renderChips(els.foodDayFilter, data.days, "foodDay", renderFood);
  bind();
  renderTimeline();
  renderFood();
  renderTickets();
  renderBudget();
})();
