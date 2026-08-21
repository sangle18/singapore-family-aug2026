window.TRIP_DATA = {
  days: [
    { id: "all", label: "Tất cả" },
    { id: "1", label: "Ngày 1 · 28/8" },
    { id: "2", label: "Ngày 2 · 29/8" },
    { id: "3", label: "Ngày 3 · 30/8" },
    { id: "4", label: "Ngày 4 · 31/8" },
    { id: "5", label: "Ngày 5 · 1/9" }
  ],
  types: [
    { id: "all", label: "Tất cả loại" },
    { id: "flight", label: "Bay" },
    { id: "attraction", label: "Attraction" },
    { id: "food", label: "Ăn uống" },
    { id: "transport", label: "Di chuyển" },
    { id: "rest", label: "Nghỉ" },
    { id: "hotel", label: "Khách sạn" }
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
      link: "https://www.flyscoot.com/"
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
      link: ""
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
        "Ăn trưa + diaper change",
        "Mua SIM tại Arrival nếu chưa có eSIM"
      ],
      link: "https://www.jewelchangiairport.com/"
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
      link: ""
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
        "Dinner: Novotel hoặc GRUB Stevens"
      ],
      link: "https://all.accor.com/hotel/9543/index.en.shtml"
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
        "Tram miễn phí trong vé",
        "Nursing: Main Entrance, KidzWorld, Reptile Kingdom"
      ],
      link: "https://www.mandai.com/en/singapore-zoo.html"
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
      notes: ["Ah Meng có diaper-changing facility"],
      link: ""
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
      link: "https://www.mandai.com/en/river-wonders.html"
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
      notes: ["Không đi Orchard", "Dinner ~18:30", "Ngủ sớm"],
      link: ""
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
      notes: ["Xả năng lượng trước Bugis + Gardens"],
      link: ""
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
        "Lunch ~12:00",
        "14:00 Grab sang Gardens — không kéo Chilux bộ dài"
      ],
      link: ""
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
        "Có JCB → bundle FD+CF+Observatory ~S$60/adult",
        "Nursing trong Cloud Forest / Canopy / Children’s Garden"
      ],
      link: "https://www.gardensbythebay.com.sg/"
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
      place: "Shake Shack / Hopscotch",
      notes: ["Ưu tiên món đơn giản cho bé"],
      link: ""
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
      link: ""
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
      link: "https://www.singaporeoceanarium.com/"
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
      place: "Resorts World Sentosa",
      notes: ["Ưu tiên PUTIEN với bé"],
      link: ""
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
      notes: ["REST 13:30–14:30 trước", "Không thêm vé", "Bé mệt → về luôn"],
      link: ""
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
      notes: ["Dinner 19:00 · ngủ 20:00"],
      link: ""
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
      link: ""
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
        "Landing SGN T2 ~14:40"
      ],
      link: "https://www.changiairport.com/"
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
