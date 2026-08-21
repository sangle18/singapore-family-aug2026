(() => {
  const maps = (q) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

  window.TRIP_DATA = {
    days: [
      { id: "all", label: "Tất cả", sticker: "🗺️" },
      {
        id: "1",
        label: "28/8",
        weekday: "Thứ Sáu",
        date: "28/8",
        theme: "Jewel & khách sạn",
        sticker: "✈️"
      },
      {
        id: "2",
        label: "29/8",
        weekday: "Thứ Bảy",
        date: "29/8",
        theme: "Zoo & River",
        sticker: "🦧"
      },
      {
        id: "3",
        label: "30/8",
        weekday: "Chủ Nhật",
        date: "30/8",
        theme: "Bugis & Gardens",
        sticker: "🌳"
      },
      {
        id: "4",
        label: "31/8",
        weekday: "Thứ Hai",
        date: "31/8",
        theme: "Oceanarium & biển",
        sticker: "🐠"
      },
      {
        id: "5",
        label: "1/9",
        weekday: "Thứ Ba",
        date: "1/9",
        theme: "Về Sài Gòn",
        sticker: "🛫"
      }
    ],
    types: [
      { id: "all", label: "Tất cả loại", sticker: "✨" },
      { id: "flight", label: "Bay", sticker: "✈️" },
      { id: "attraction", label: "Attraction", sticker: "🎟️" },
      { id: "food", label: "Ăn uống", sticker: "🍜" },
      { id: "transport", label: "Di chuyển", sticker: "🚗" },
      { id: "rest", label: "Nghỉ", sticker: "😴" },
      { id: "hotel", label: "Khách sạn", sticker: "🏨" }
    ],
    foods: [
      {
        id: "f1-jewel",
        day: "1",
        meal: "Trưa",
        title: "Jewel Changi — ăn nhẹ sau landing",
        recommend: [
          {
            name: "Shake Shack",
            note: "Tầng 2, #02-256 — burger/fries, dễ cho bé. Mở 10:30–22:00.",
            maps: maps("Shake Shack Jewel Changi Airport #02-256")
          },
          {
            name: "Din Tai Fung",
            note: "Tầng 3, #03-214 — xiao long bao nếu muốn món nóng.",
            maps: maps("Din Tai Fung Jewel Changi Airport #03-214")
          },
          {
            name: "FairPrice Finest",
            note: "Mua sữa, snack, nước mang theo.",
            maps: maps("FairPrice Finest Jewel Changi Airport")
          }
        ],
        avoid: "Đừng ăn quá no — tối còn dinner gần hotel. Shake Shack không ở tầng 1.",
        place: "Jewel Changi Airport",
        maps: maps("Jewel Changi Airport Singapore"),
        price: "S$25–45 / nhà"
      },
      {
        id: "f1-dinner",
        day: "1",
        meal: "Tối",
        title: "Gần Novotel — tối ngày đầu",
        recommend: [
          {
            name: "GRUB",
            note: "30 Stevens Road, #01-06 trong khu Novotel. Casual, highchair, hợp gia đình.",
            maps: maps("GRUB 30 Stevens Road #01-06 Novotel Singapore")
          },
          {
            name: "Food Exchange",
            note: "Buffet trong Novotel, tầng 2. Bé mệt thì không cần ra ngoài.",
            maps: maps("Food Exchange Novotel Singapore on Stevens")
          }
        ],
        avoid: "Không kéo bé đi Orchard tối ngày đầu. Soup Spoon không còn cửa hàng ở Stevens.",
        place: "Stevens Road",
        maps: maps("GRUB 30 Stevens Road #01-06 Novotel Singapore"),
        price: "S$30–50 / nhà"
      },
      {
        id: "f2-zoo",
        day: "2",
        meal: "Trưa",
        title: "Trong Singapore Zoo",
        recommend: [
          {
            name: "Ah Meng Restaurant",
            note: "Đối diện Tram Stop 1. Thứ Bảy mở ~10:00–16:30. Có kids menu, diaper facility.",
            maps: maps("Ah Meng Restaurant Singapore Zoo 80 Mandai Lake Road")
          },
          {
            name: "KidzWorld Cafe",
            note: "Nhanh hơn nếu bé đói. Gần khu chơi. Thứ Bảy mở ~10:00–18:00.",
            maps: maps("KidzWorld Cafe Singapore Zoo")
          }
        ],
        avoid: "Đừng chờ quá lâu nếu bé đói — chọn KidzWorld Cafe.",
        place: "Singapore Zoo",
        maps: maps("Ah Meng Restaurant Singapore Zoo 80 Mandai Lake Road"),
        price: "S$30–45 / nhà"
      },
      {
        id: "f2-dinner",
        day: "2",
        meal: "Tối",
        title: "Sau Zoo — về hotel nghỉ rồi ăn",
        recommend: [
          {
            name: "GRUB hoặc Food Exchange",
            note: "Ưu tiên vì bé cần nghỉ sau Mandai. Tối Thứ Bảy Food Exchange hay đông (LobsterMania).",
            maps: maps("GRUB 30 Stevens Road #01-06 Novotel Singapore")
          }
        ],
        avoid: "Không dinner phức tạp sau ngày Zoo.",
        place: "Novotel / Stevens",
        maps: maps("Novotel Singapore on Stevens 28 Stevens Road"),
        price: "S$30–50 / nhà"
      },
      {
        id: "f3-bugis",
        day: "3",
        meal: "Trưa",
        title: "Bugis / Haji Lane / Arab Street",
        recommend: [
          {
            name: "Haji Lane cafes",
            note: "Nhẹ, chụp hình, dễ với Chilux nếu tránh chỗ quá chật.",
            maps: maps("Haji Lane Singapore")
          },
          {
            name: "Arab Street — kebab / Middle Eastern",
            note: "Hummus, flatbread, dễ share. Zam Zam trên North Bridge Rd nếu muốn nasi briyani.",
            maps: maps("Arab Street Singapore Kampong Glam")
          },
          {
            name: "Bugis Junction food",
            note: "Cơm, noodles nhanh. Có Soup Spoon ở Bugis Junction nếu muốn nhẹ.",
            maps: maps("Bugis Junction Singapore food")
          }
        ],
        avoid: "Lau Pa Sat không gần Bugis (nằm khu CBD). Tránh cafe quá đông nếu đẩy Chilux.",
        place: "Bugis · Haji Lane",
        maps: maps("Haji Lane Singapore"),
        price: "S$25–40 / nhà"
      },
      {
        id: "f3-gardens",
        day: "3",
        meal: "Tối",
        title: "Gardens by the Bay — trước Rhapsody",
        recommend: [
          {
            name: "Shake Shack Gardens",
            note: "The Canopy, #03-02/03. Mở ~8:30–21:00. Ăn 18:00–19:15 rồi đi Supertree 19:45.",
            maps: maps("Shake Shack Gardens by the Bay 18 Marina Gardens Drive")
          }
        ],
        avoid: "Hopscotch là cocktail bar ở Bayfront Plaza, lệch tuyến so với Supertree — không chọn trước show.",
        place: "Gardens by the Bay",
        maps: maps("Shake Shack Gardens by the Bay 18 Marina Gardens Drive"),
        price: "S$35–55 / nhà"
      },
      {
        id: "f4-rws",
        day: "4",
        meal: "Trưa",
        title: "Resorts World Sentosa",
        recommend: [
          {
            name: "PUTIEN",
            note: "WEAVE, #01-209. Ẩm thực Phúc Kiến, dễ share. Mở 11:30–22:00.",
            maps: maps("PUTIEN 26 Sentosa Gateway #01-209 Resorts World Sentosa")
          },
          {
            name: "Chatterbox Café",
            note: "WEAVE, #02-207. Cơm gà sit-down (~S$23++), không phải quán nhanh. Lunch tới 15:30.",
            maps: maps("Chatterbox Cafe WEAVE Resorts World Sentosa #02-207")
          }
        ],
        avoid: "JUMBO/seafood lớn nếu bé không ăn được nhiều. Tránh xếp hàng quá lâu sau Oceanarium.",
        place: "Resorts World Sentosa",
        maps: maps("PUTIEN 26 Sentosa Gateway #01-209 Resorts World Sentosa"),
        price: "S$40–70 / nhà"
      },
      {
        id: "f4-dinner",
        day: "4",
        meal: "Tối",
        title: "Về Novotel — tối cuối",
        recommend: [
          {
            name: "GRUB hoặc Food Exchange",
            note: "Tối Thứ Hai, gần hotel. Có thể mua snack cho sáng bay.",
            maps: maps("GRUB 30 Stevens Road #01-06 Novotel Singapore")
          }
        ],
        avoid: "Không ăn quá muộn — mai checkout sớm.",
        place: "Stevens / Orchard",
        maps: maps("Novotel Singapore on Stevens 28 Stevens Road"),
        price: "S$30–50 / nhà"
      },
      {
        id: "f5-airport",
        day: "5",
        meal: "Trưa",
        title: "Changi T1 — trước giờ bay 13:25",
        recommend: [
          {
            name: "Ăn trong T1 sau check-in",
            note: "Khoảng 12:00. Chọn món quen: noodles, rice, cafe. Nước + snack cabin cho bé.",
            maps: maps("Changi Airport Terminal 1 food court Singapore")
          }
        ],
        avoid: "Đừng ra ngoài sân bay ăn rồi vào lại sát giờ.",
        place: "Changi Airport T1",
        maps: maps("Changi Airport Terminal 1 Singapore"),
        price: "S$25–40 / nhà"
      }
    ],
    items: [
      {
        id: "d1-checkin",
        day: "1",
        time: "06:45",
        end: "09:15",
        title: "Tân Sơn Nhất T2 — Scoot check-in",
        type: "flight",
        price: 0,
        baby: false,
        prebook: false,
        place: "SGN Terminal 2",
        notes: [
          "Có mặt 06:45–07:00",
          "Quầy đóng 08:15 (−60 phút)",
          "Tag Chilux + hỏi gate-check",
          "Mang hộ chiếu cả nhà"
        ],
        link: "https://www.flyscoot.com/",
        maps: maps("Tan Son Nhat International Airport Terminal 2")
      },
      {
        id: "d1-flight",
        day: "1",
        time: "09:15",
        end: "12:20",
        title: "Scoot SGN → SIN",
        type: "flight",
        price: 0,
        baby: false,
        prebook: true,
        place: "Chuyến bay đi",
        notes: ["Landing Changi ~12:20", "Sau đó immigration + lấy hành lý"],
        link: "",
        maps: maps("Changi Airport Singapore")
      },
      {
        id: "d1-jewel",
        day: "1",
        time: "13:30",
        end: "15:30",
        title: "Jewel Changi — Rain Vortex & nghỉ nhẹ",
        type: "attraction",
        price: 0,
        baby: true,
        prebook: false,
        place: "Jewel Changi Airport",
        notes: [
          "Không mua attraction trả tiền",
          "Baby Care Room B2–L4",
          "Ăn trưa: Shake Shack tầng 2 (#02-256) hoặc Din Tai Fung tầng 3",
          "Mua SIM tại Arrival nếu chưa có eSIM"
        ],
        eat: "Shake Shack #02-256 hoặc Din Tai Fung #03-214 — dễ cho bé",
        link: "https://www.jewelchangiairport.com/",
        maps: maps("Jewel Changi Airport Singapore")
      },
      {
        id: "d1-grab-hotel",
        day: "1",
        time: "15:30",
        end: "16:00",
        title: "Grab Jewel → Novotel Stevens",
        type: "transport",
        price: 25,
        baby: false,
        prebook: false,
        place: "~20–25 phút",
        notes: ["Không MRT ngày đầu vì vali + Chilux"],
        link: "",
        maps: "https://www.google.com/maps/dir/?api=1&origin=Jewel+Changi+Airport&destination=Novotel+Singapore+on+Stevens"
      },
      {
        id: "d1-hotel",
        day: "1",
        time: "16:00",
        end: "20:30",
        title: "Check-in Novotel + nghỉ + dinner",
        type: "hotel",
        price: 0,
        baby: true,
        prebook: true,
        place: "28 Stevens Road",
        notes: [
          "Đã trả S$839.08 / 4 đêm",
          "17:00–18:30 bé nghỉ",
          "Dinner: GRUB #01-06 hoặc Food Exchange tầng 2"
        ],
        eat: "GRUB Stevens hoặc Food Exchange trong khách sạn",
        link: "https://all.accor.com/hotel/9543/index.en.shtml",
        maps: maps("Novotel Singapore on Stevens 28 Stevens Road")
      },
      {
        id: "d2-zoo",
        day: "2",
        time: "08:15",
        end: "12:00",
        title: "Singapore Zoo",
        type: "attraction",
        price: 98,
        baby: true,
        prebook: true,
        place: "Mandai Wildlife Reserve",
        notes: [
          "Grab từ Novotel ~20–25 phút",
          "Bé <3 FREE — mang hộ chiếu bé",
          "Ưu tiên Orangutan, Panda, KidzWorld",
          "Tram miễn phí trong vé"
        ],
        eat: "Trưa tại Ah Meng hoặc KidzWorld Cafe",
        link: "https://www.mandai.com/en/singapore-zoo.html",
        maps: maps("Singapore Zoo Mandai Lake Road")
      },
      {
        id: "d2-lunch",
        day: "2",
        time: "12:00",
        end: "13:00",
        title: "Lunch Ah Meng / KidzWorld Cafe",
        type: "food",
        price: 40,
        baby: true,
        prebook: false,
        place: "Trong Zoo",
        notes: [
          "Ah Meng: ngồi ổn + diaper facility, đối diện Tram Stop 1",
          "KidzWorld Cafe: nhanh hơn nếu bé đói"
        ],
        eat: "Cơm/noodles đơn giản + nước",
        link: "",
        maps: maps("Ah Meng Restaurant Singapore Zoo 80 Mandai Lake Road")
      },
      {
        id: "d2-river",
        day: "2",
        time: "13:00",
        end: "15:00",
        title: "River Wonders",
        type: "attraction",
        price: 90,
        baby: true,
        prebook: true,
        place: "Mandai",
        notes: [
          "Mở ~10:00",
          "Bé <3 FREE",
          "Nếu mệt → bỏ River, về hotel",
          "Ưu tiên Giant Panda + Amazon area"
        ],
        link: "https://www.mandai.com/en/river-wonders.html",
        maps: maps("River Wonders Singapore Mandai")
      },
      {
        id: "d2-rest",
        day: "2",
        time: "15:30",
        end: "18:00",
        title: "Mandatory rest — Novotel",
        type: "rest",
        price: 0,
        baby: true,
        prebook: false,
        place: "Hotel",
        notes: ["Không đi Orchard", "Dinner ~18:30 gần hotel", "Ngủ sớm"],
        eat: "Dinner nhẹ tại GRUB / Novotel",
        link: "",
        maps: maps("Novotel Singapore on Stevens")
      },
      {
        id: "d3-pool",
        day: "3",
        time: "08:30",
        end: "10:30",
        title: "Novotel pool / Kids Room",
        type: "rest",
        price: 0,
        baby: true,
        prebook: false,
        place: "Novotel Stevens",
        notes: ["Xả năng lượng trước Bugis + Gardens", "Breakfast trong hotel nếu có"],
        link: "",
        maps: maps("Novotel Singapore on Stevens")
      },
      {
        id: "d3-bugis",
        day: "3",
        time: "11:00",
        end: "14:00",
        title: "Bugis · Haji Lane · Arab Street",
        type: "attraction",
        price: 0,
        baby: false,
        prebook: false,
        place: "Bugis / Kampong Glam",
        notes: [
          "Shuttle/bus → Stevens MRT → Bugis",
          "Lunch ~12:00 tại Haji Lane / Arab Street",
          "14:00 Grab sang Gardens — không kéo Chilux bộ dài"
        ],
        eat: "Cafe Haji Lane hoặc món Ả Rập Arab Street",
        link: "",
        maps: maps("Haji Lane Singapore")
      },
      {
        id: "d3-gardens",
        day: "3",
        time: "14:30",
        end: "18:00",
        title: "Cloud Forest + Flower Dome + Supertree",
        type: "attraction",
        price: 92,
        baby: true,
        prebook: true,
        place: "Gardens by the Bay",
        notes: [
          "Cloud Forest #1 cho bé",
          "Jurassic World Experience 2026 trong Cloud Forest",
          "Bé <3 FREE",
          "Có JCB → bundle FD+CF+Observatory ~S$60/adult"
        ],
        eat: "Tối: Shake Shack The Canopy trước show 19:45",
        link: "https://www.gardensbythebay.com.sg/",
        maps: maps("Gardens by the Bay Singapore")
      },
      {
        id: "d3-dinner",
        day: "3",
        time: "18:00",
        end: "19:15",
        title: "Dinner tại Gardens",
        type: "food",
        price: 45,
        baby: false,
        prebook: false,
        place: "Shake Shack The Canopy",
        notes: ["Ưu tiên món đơn giản cho bé", "Xong trước 19:15 để kịp Rhapsody"],
        eat: "Burger/fries tại Shake Shack #03-02/03",
        link: "",
        maps: maps("Shake Shack Gardens by the Bay 18 Marina Gardens Drive")
      },
      {
        id: "d3-rhapsody",
        day: "3",
        time: "19:45",
        end: "20:15",
        title: "Garden Rhapsody (free)",
        type: "attraction",
        price: 0,
        baby: false,
        prebook: false,
        place: "Supertree Grove",
        notes: ["Show 19:45 — không chờ show 2", "20:15 Grab về hotel"],
        link: "",
        maps: maps("Supertree Grove Gardens by the Bay")
      },
      {
        id: "d4-ocean",
        day: "4",
        time: "08:30",
        end: "12:30",
        title: "Singapore Oceanarium",
        type: "attraction",
        price: 110,
        baby: true,
        prebook: true,
        place: "Resorts World Sentosa",
        notes: [
          "Grab từ Novotel",
          "Bé under 4 FREE",
          "Stroller được phép",
          "Không mua Dolphin / Pier Adventure"
        ],
        eat: "Trưa PUTIEN #01-209 hoặc Chatterbox Café #02-207 tại WEAVE",
        link: "https://www.singaporeoceanarium.com/",
        maps: maps("Singapore Oceanarium Resorts World Sentosa")
      },
      {
        id: "d4-lunch",
        day: "4",
        time: "12:30",
        end: "13:30",
        title: "Lunch PUTIEN / Chatterbox",
        type: "food",
        price: 50,
        baby: false,
        prebook: false,
        place: "WEAVE, Resorts World Sentosa",
        notes: ["Ưu tiên PUTIEN với bé", "Chatterbox Café là cơm gà sit-down, không phải quán nhanh"],
        eat: "Món share PUTIEN — soup, noodles, veggies",
        link: "",
        maps: maps("PUTIEN 26 Sentosa Gateway #01-209 Resorts World Sentosa")
      },
      {
        id: "d4-beach",
        day: "4",
        time: "14:30",
        end: "16:30",
        title: "Palawan Beach walk",
        type: "attraction",
        price: 0,
        baby: false,
        prebook: false,
        place: "Sentosa",
        notes: ["REST 13:30–14:30 trước", "Không thêm vé", "Bé mệt → về luôn", "Snack/kem gần beach nếu cần"],
        link: "",
        maps: maps("Palawan Beach Sentosa")
      },
      {
        id: "d4-pool",
        day: "4",
        time: "17:30",
        end: "18:30",
        title: "Novotel pool",
        type: "rest",
        price: 0,
        baby: true,
        prebook: false,
        place: "Hotel",
        notes: ["Dinner 19:00 gần hotel · ngủ 20:00"],
        eat: "Dinner nhẹ — tối cuối trước ngày bay",
        link: "",
        maps: maps("Novotel Singapore on Stevens")
      },
      {
        id: "d5-checkout",
        day: "5",
        time: "07:00",
        end: "10:00",
        title: "Breakfast + pool nhẹ + checkout",
        type: "hotel",
        price: 0,
        baby: true,
        prebook: false,
        place: "Novotel Stevens",
        notes: ["Checkout 10:00", "10:15 Grab → Changi T1"],
        eat: "Breakfast hotel — đủ no trước khi ra sân bay",
        link: "",
        maps: maps("Novotel Singapore on Stevens")
      },
      {
        id: "d5-flight",
        day: "5",
        time: "10:45",
        end: "14:40",
        title: "Changi T1 — Scoot SIN → SGN 13:25",
        type: "flight",
        price: 0,
        baby: false,
        prebook: true,
        place: "Changi Terminal 1",
        notes: [
          "Có mặt ~10:45–11:00",
          "Quầy đóng 12:25",
          "Infant → check-in quầy",
          "Lunch ~12:00 trong T1",
          "Landing SGN T2 ~14:40"
        ],
        eat: "Ăn trong T1 sau check-in",
        link: "https://www.changiairport.com/",
        maps: maps("Changi Airport Terminal 1 Singapore")
      }
    ],
    tickets: [
      {
        id: "t-zoo",
        title: "Singapore Zoo (2 adults)",
        meta: "29/8 · mandai.com · bé FREE",
        price: "≈ S$98",
        url: "https://www.mandai.com/en/tickets-and-passes/single-attractions/singapore-zoo.html"
      },
      {
        id: "t-river",
        title: "River Wonders (2 adults)",
        meta: "29/8 · có thể mua combo với Zoo",
        price: "≈ S$90",
        url: "https://www.mandai.com/en/tickets-and-passes/single-attractions/river-wonders.html"
      },
      {
        id: "t-gardens",
        title: "Flower Dome + Cloud Forest",
        meta: "30/8 · JCB bundle nếu có thẻ",
        price: "≈ S$92",
        url: "https://www.gardensbythebay.com.sg/"
      },
      {
        id: "t-ocean",
        title: "Singapore Oceanarium",
        meta: "31/8 · bé under 4 FREE · stroller OK",
        price: "≈ S$100–110",
        url: "https://www.singaporeoceanarium.com/"
      },
      {
        id: "t-sim",
        title: "SIM / eSIM tourist",
        meta: "M1/StarHub/Singtel · ~100GB / 12–15 ngày",
        price: "S$12–30",
        url: "https://www.changiairport.com/en/at-changi/facilities-and-services-directory/changi-airport-sim-card-purchase-buy-sim-card-singapore.html"
      }
    ],
    budget: [
      { id: "hotel", label: "Hotel", amount: 839, note: "Đã trả", group: "fixed" },
      { id: "attractions", label: "Attractions", amount: 390, note: "Zoo+River+Gardens+Ocean", group: "tickets" },
      { id: "food", label: "Food", amount: 285, note: "Ước tính mid", group: "daily" },
      { id: "grab", label: "Grab + Sentosa", amount: 150, note: "Transport chính", group: "daily" },
      { id: "mrt", label: "MRT / Bus", amount: 40, note: "Contactless", group: "daily" },
      { id: "sim", label: "SIM", amount: 12, note: "Tourist gói nhỏ", group: "tickets" },
      { id: "misc", label: "Miscellaneous", amount: 100, note: "Buffer", group: "daily" }
    ]
  };
})();
