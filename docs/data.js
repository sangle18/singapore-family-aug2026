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
  foods: [
    {
      id: "f1-jewel",
      day: "1",
      meal: "Trưa",
      title: "Jewel Changi — ăn nhẹ sau landing",
      recommend: [
        "Shake Shack (L1) — burger/fries, dễ cho bé",
        "Din Tai Fung — xiao long bao nếu muốn món nóng",
        "FairPrice Finest / convenience — sữa, snack, nước"
      ],
      avoid: "Đừng ăn quá no — tối còn dinner gần hotel",
      place: "Jewel Changi Airport",
      maps: "https://maps.google.com/?q=Jewel+Changi+Airport+Singapore",
      price: "S$25–45 / nhà"
    },
    {
      id: "f1-dinner",
      day: "1",
      meal: "Tối",
      title: "Gần Novotel — tối ngày đầu",
      recommend: [
        "GRUB Stevens Road — casual, gần hotel",
        "Food Exchange (trong Novotel) — buffet/à la carte, bé mệt thì không cần đi xa",
        "Soup spoon / cafe quanh Stevens nếu muốn nhẹ"
      ],
      avoid: "Không kéo bé đi Orchard tối ngày đầu",
      place: "Stevens Road",
      maps: "https://maps.google.com/?q=GRUB+Stevens+Road+Singapore",
      price: "S$30–50 / nhà"
    },
    {
      id: "f2-zoo",
      day: "2",
      meal: "Trưa",
      title: "Trong Singapore Zoo",
      recommend: [
        "Ah Meng Restaurant — ngồi ổn, có diaper facility",
        "KidzWorld Cafe — nhanh, gần khu chơi bé",
        "Uống nước / trái cây mang theo trong balo"
      ],
      avoid: "Đừng chờ quá lâu nếu bé đói — chọn KidzWorld Cafe",
      place: "Singapore Zoo",
      maps: "https://maps.google.com/?q=Ah+Meng+Restaurant+Singapore+Zoo",
      price: "S$30–45 / nhà"
    },
    {
      id: "f2-dinner",
      day: "2",
      meal: "Tối",
      title: "Sau Zoo — về hotel nghỉ rồi ăn",
      recommend: [
        "Ăn tại Novotel / GRUB — ưu tiên vì bé cần nghỉ sau Mandai",
        "Nếu còn sức: Orchard food court (via shuttle) — chọn 1 chỗ rồi về sớm"
      ],
      avoid: "Không dinner phức tạp sau ngày Zoo",
      place: "Novotel / Stevens",
      maps: "https://maps.google.com/?q=Novotel+Singapore+on+Stevens",
      price: "S$30–50 / nhà"
    },
    {
      id: "f3-bugis",
      day: "3",
      meal: "Trưa",
      title: "Bugis / Haji Lane / Arab Street",
      recommend: [
        "Lau Pa Sat gần hơn nếu lệch tuyến — nhưng ưu tiên khu Bugis",
        "Haji Lane cafes — nhẹ, chụp hình, dễ với bé",
        "Arab Street: Turkish / Middle Eastern — kebab, hummus, flatbread",
        "Bugis Street / food courts — cơm, noodles nhanh"
      ],
      avoid: "Tránh cafe quá đông/chật nếu đẩy Chilux",
      place: "Bugis · Haji Lane",
      maps: "https://maps.google.com/?q=Haji+Lane+Singapore",
      price: "S$25–40 / nhà"
    },
    {
      id: "f3-gardens",
      day: "3",
      meal: "Tối",
      title: "Gardens by the Bay — trước Rhapsody",
      recommend: [
        "Shake Shack Gardens — nhanh, quen miệng bé",
        "Hopscotch — nếu muốn ngồi thoải hơn",
        "Ăn xong ~19:15 → đi chỗ xem Garden Rhapsody 19:45"
      ],
      avoid: "Đừng book nhà hàng fine-dining — dễ trễ show",
      place: "Gardens by the Bay",
      maps: "https://maps.google.com/?q=Shake+Shack+Gardens+by+the+Bay",
      price: "S$35–55 / nhà"
    },
    {
      id: "f4-rws",
      day: "4",
      meal: "Trưa",
      title: "Resorts World Sentosa",
      recommend: [
        "PUTIEN — ẩm thực Phúc Kiến, dễ share, hợp gia đình",
        "Chatterbox Café — nhanh hơn nếu bé mệt",
        "Tránh xếp hàng quá lâu sau Oceanarium"
      ],
      avoid: "JUMBO/seafood lớn nếu bé không ăn được nhiều",
      place: "Resorts World Sentosa",
      maps: "https://maps.google.com/?q=PUTIEN+Resorts+World+Sentosa",
      price: "S$40–70 / nhà"
    },
    {
      id: "f4-dinner",
      day: "4",
      meal: "Tối",
      title: "Về Novotel — tối cuối",
      recommend: [
        "Dinner gần hotel / Orchard đơn giản",
        "Có thể mua snack cho sáng bay (1/9)"
      ],
      avoid: "Không ăn quá muộn — mai checkout sớm",
      place: "Stevens / Orchard",
      maps: "https://maps.google.com/?q=Novotel+Singapore+on+Stevens",
      price: "S$30–50 / nhà"
    },
    {
      id: "f5-airport",
      day: "5",
      meal: "Trưa",
      title: "Changi T1 — trước giờ bay 13:25",
      recommend: [
        "Ăn sớm trong T1 sau check-in (~12:00)",
        "Chọn món quen: noodles, rice, cafe",
        "Nước + snack cabin cho bé"
      ],
      avoid: "Đừng ra ngoài sân bay ăn rồi vào lại sát giờ",
      place: "Changi Airport T1",
      maps: "https://maps.google.com/?q=Changi+Airport+Terminal+1",
      price: "S$25–40 / nhà"
    }
  ],
  additionalOptions: [
    {
      id: "ao-mama-panda",
      day: "2",
      meal: "Trưa",
      category: "food",
      source: "Plan Singapore (tham khảo)",
      title: "Mama Panda Kitchen",
      subtitle: "Additional · thay hoặc bổ sung Ah Meng / KidzWorld",
      recommend: [
        "Nằm khu Mandai — rất hợp ngày Zoo + River Wonders",
        "Đồ ăn theme gấu trúc, dễ cho bé",
        "Nếu Ah Meng đông → ưu tiên đây"
      ],
      avoid: "Vẫn ưu tiên nghỉ sớm chiều — đừng kéo dài lunch",
      place: "River Wonders / Mandai Wildlife Reserve",
      maps: "https://maps.google.com/?q=Mama+Panda+Kitchen+Singapore+Zoo",
      price: "S$30–50 / nhà"
    },
    {
      id: "ao-good-old-days",
      day: "4",
      meal: "Trưa",
      category: "food",
      source: "Plan Singapore (tham khảo)",
      title: "Good Old Days",
      subtitle: "Additional · thay PUTIEN sau Oceanarium",
      recommend: [
        "Sentosa — món Singapore đơn giản, gia đình",
        "Gần RWS, ít áp lực hơn seafood/JUMBO",
        "Hợp nếu bé mệt sau Oceanarium"
      ],
      avoid: "Không book set menu phức tạp — ăn nhanh rồi nghỉ",
      place: "Resorts World Sentosa / Sentosa",
      maps: "https://maps.google.com/?q=Good+Old+Days+Sentosa+Singapore",
      price: "S$35–55 / nhà"
    },
    {
      id: "ao-218-coffee",
      day: "all",
      meal: "Sáng",
      category: "food",
      source: "Plan Singapore (tham khảo)",
      title: "218 Coffee — Kaya Toast & Kopi",
      subtitle: "Additional · breakfast kiểu Singapore",
      recommend: [
        "Kaya toast + trứng + kopi — bé ăn bánh/mì được",
        "Chọn buổi sáng còn sức, trước ngày đi xa (Zoo/Sentosa)",
        "Grab từ Novotel — không cần đi riêng một ngày"
      ],
      avoid: "Không tranh giờ checkout / sáng bay 1/9",
      place: "218 Coffee (nhiều chi nhánh — check gần Stevens)",
      maps: "https://maps.google.com/?q=218+Coffee+Singapore",
      price: "S$15–25 / nhà"
    },
    {
      id: "ao-lau-pa-sat",
      day: "3",
      meal: "Tối",
      category: "food",
      source: "Plan Singapore (tham khảo)",
      title: "Lau Pa Sat",
      subtitle: "Additional · chỉ nếu bé ngủ sớm / không mệt",
      recommend: [
        "Satay + hawker nổi tiếng — trải nghiệm SG cho bố mẹ",
        "Gần Marina — có thể gộp nếu lệch từ Gardens (không khuyên mặc định)"
      ],
      avoid: "Ngoài trời, đông, khó Chilux — bỏ nếu bé quá tải",
      place: "Lau Pa Sat, CBD",
      maps: "https://maps.google.com/?q=Lau+Pa+Sat+Singapore",
      price: "S$30–50 / nhà"
    },
    {
      id: "ao-merlion",
      day: "1",
      meal: "Chiều",
      category: "attraction",
      source: "Plan Singapore (tham khảo)",
      title: "Merlion Park + Marina Bay walk",
      subtitle: "Additional · bỏ nếu ngày 1 đã mệt",
      recommend: [
        "Chụp Merlion + đi bộ Marina — icon Singapore",
        "Chỉ thêm nếu Jewel xong sớm và bé còn sức"
      ],
      avoid: "Nắng + đi bộ xa — ngày 1 em vẫn khuyên về hotel nghỉ",
      place: "Merlion Park",
      maps: "https://maps.google.com/?q=Merlion+Park+Singapore",
      price: "Free"
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
      maps: "https://maps.google.com/?q=Tan+Son+Nhat+International+Airport+Terminal+2"
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
      maps: "https://maps.google.com/?q=Changi+Airport+Singapore"
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
        "Ăn trưa: Shake Shack / Din Tai Fung",
        "Mua SIM tại Arrival nếu chưa có eSIM"
      ],
      eat: "Shake Shack L1 hoặc Din Tai Fung — dễ cho bé",
      link: "https://www.jewelchangiairport.com/",
      maps: "https://maps.google.com/?q=Jewel+Changi+Airport+Singapore"
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
      maps: "https://www.google.com/maps/dir/Jewel+Changi+Airport/Novotel+Singapore+on+Stevens"
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
        "Dinner: Novotel Food Exchange hoặc GRUB Stevens"
      ],
      eat: "GRUB Stevens hoặc ăn trong khách sạn",
      link: "https://all.accor.com/hotel/9543/index.en.shtml",
      maps: "https://maps.google.com/?q=Novotel+Singapore+on+Stevens+28+Stevens+Road"
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
      maps: "https://maps.google.com/?q=Singapore+Zoo+Mandai"
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
        "Ah Meng: ngồi ổn + diaper facility",
        "KidzWorld Cafe: nhanh hơn nếu bé đói",
        "Additional option: Mama Panda Kitchen (khu Mandai)"
      ],
      eat: "Chính: Ah Meng / KidzWorld · Additional: Mama Panda Kitchen",
      link: "",
      maps: "https://maps.google.com/?q=Ah+Meng+Restaurant+Singapore+Zoo"
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
      maps: "https://maps.google.com/?q=River+Wonders+Singapore"
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
      maps: "https://maps.google.com/?q=Novotel+Singapore+on+Stevens"
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
      maps: "https://maps.google.com/?q=Novotel+Singapore+on+Stevens"
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
      maps: "https://maps.google.com/?q=Haji+Lane+Singapore"
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
      eat: "Tối: Shake Shack / Hopscotch trước show 19:45",
      link: "https://www.gardensbythebay.com.sg/",
      maps: "https://maps.google.com/?q=Gardens+by+the+Bay+Singapore"
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
      notes: ["Ưu tiên món đơn giản cho bé", "Xong trước 19:15 để kịp Rhapsody"],
      eat: "Burger/fries hoặc món share nhẹ",
      link: "",
      maps: "https://maps.google.com/?q=Shake+Shack+Gardens+by+the+Bay"
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
      maps: "https://maps.google.com/?q=Supertree+Grove+Gardens+by+the+Bay"
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
      eat: "Trưa PUTIEN hoặc Chatterbox tại RWS",
      link: "https://www.singaporeoceanarium.com/",
      maps: "https://maps.google.com/?q=Singapore+Oceanarium+Resorts+World+Sentosa"
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
      notes: [
        "Ưu tiên PUTIEN với bé",
        "Chatterbox nếu muốn nhanh",
        "Additional option: Good Old Days (Sentosa)"
      ],
      eat: "Chính: PUTIEN / Chatterbox · Additional: Good Old Days",
      link: "",
      maps: "https://maps.google.com/?q=PUTIEN+Resorts+World+Sentosa"
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
      maps: "https://maps.google.com/?q=Palawan+Beach+Sentosa"
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
      maps: "https://maps.google.com/?q=Novotel+Singapore+on+Stevens"
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
      maps: "https://maps.google.com/?q=Novotel+Singapore+on+Stevens"
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
      maps: "https://maps.google.com/?q=Changi+Airport+Terminal+1"
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
