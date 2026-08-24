(() => {
  const maps = (q) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

  window.TRIP_DATA = {
    days: [
      { id: "all", label: "Tất cả", sticker: "🗺️" },
      {
        id: "1",
        label: "Ngày 1",
        weekday: "Thứ Sáu",
        date: "28/8",
        theme: "Jewel & khách sạn",
        sticker: "✈️",
        tone: "coral"
      },
      {
        id: "2",
        label: "Ngày 2",
        weekday: "Thứ Bảy",
        date: "29/8",
        theme: "Zoo & River",
        sticker: "🦧",
        tone: "amber"
      },
      {
        id: "3",
        label: "Ngày 3",
        weekday: "Chủ Nhật",
        date: "30/8",
        theme: "Gardens & Merlion",
        sticker: "🌳",
        tone: "green"
      },
      {
        id: "4",
        label: "Ngày 4",
        weekday: "Thứ Hai",
        date: "31/8",
        theme: "Oceanarium & biển",
        sticker: "🐠",
        tone: "blue"
      },
      {
        id: "5",
        label: "Ngày 5",
        weekday: "Thứ Ba",
        date: "1/9",
        theme: "Về Sài Gòn",
        sticker: "🛫",
        tone: "plum"
      }
    ],
    types: [
      { id: "all", label: "Tất cả loại", sticker: "✨" },
      { id: "flight", label: "Bay", sticker: "✈️" },
      { id: "attraction", label: "Tham quan", sticker: "🎟️" },
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
        title: "Jewel Changi — ăn trưa sau landing",
        recommend: [
          {
            name: "Yun Nans",
            note: "Tầng 2, #02-217 — sit-down Yunnan. Ưu tiên steam pot chicken soup + rice noodles; món nhẹ sau chuyến bay, hợp bé. Mở 10:00–22:00.",
            maps: maps("Yun Nans Jewel Changi Airport #02-217")
          },
          {
            name: "Shake Shack",
            note: "Cùng tầng 2, #02-256 — chỉ nếu hàng Yun Nans dài hoặc bé cần ăn nhanh.",
            maps: maps("Shake Shack Jewel Changi Airport #02-256")
          },
          {
            name: "FairPrice Finest",
            note: "Mua sữa, snack, nước mang theo.",
            maps: maps("FairPrice Finest Jewel Changi Airport")
          }
        ],
        avoid: "Đừng ăn quá no — tối còn dinner gần hotel.",
        place: "Jewel Changi Airport",
        maps: maps("Jewel Changi Airport Singapore"),
        price: "S$35–60 / nhà"
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
            name: "GRUB",
            note: "Ưu tiên vì bé cần nghỉ sau Mandai. Casual, gần hotel.",
            maps: maps("GRUB 30 Stevens Road #01-06 Novotel Singapore")
          },
          {
            name: "Food Exchange",
            note: "Buffet tầng 2 Novotel. Tối Thứ Bảy hay đông vì LobsterMania.",
            maps: maps("Food Exchange Novotel Singapore on Stevens")
          }
        ],
        avoid: "Không dinner phức tạp sau ngày Zoo.",
        place: "Novotel / Stevens",
        maps: maps("Novotel Singapore on Stevens 28 Stevens Road"),
        price: "S$30–50 / nhà"
      },
      {
        id: "f3-lunch",
        day: "3",
        meal: "Trưa",
        title: "Gardens — The Canopy trước khi về nghỉ",
        recommend: [
          {
            name: "Shake Shack Gardens",
            note: "The Canopy, #03-02/03. Burger/fries, dễ bé. Ăn ~12:15 rồi Grab về hotel.",
            maps: maps("Shake Shack Gardens by the Bay 18 Marina Gardens Drive")
          },
          {
            name: "Snack / kem tại The Canopy",
            note: "Nếu bé chưa đói nhiều — ăn nhẹ, bữa chính để tối Super Loco.",
            maps: maps("The Canopy Gardens by the Bay Singapore")
          }
        ],
        avoid: "Đừng ngồi nhà hàng lâu. 13:00 Grab về Novotel nghỉ — chiều còn Merlion.",
        place: "Gardens by the Bay",
        maps: maps("Shake Shack Gardens by the Bay 18 Marina Gardens Drive"),
        price: "S$25–45 / nhà"
      },
      {
        id: "f3-merlion",
        day: "3",
        meal: "Tối",
        title: "Sau Merlion — sit-down gần bờ vịnh",
        recommend: [
          {
            name: "Super Loco Customs House",
            note: "70 Collyer Quay #01-14. Mexican sit-down, view Marina Bay, có kids menu. Chủ Nhật mở 17:00–23:00. Đi bộ ~5 phút từ tượng. Nên book.",
            maps: maps("Super Loco Customs House 70 Collyer Quay")
          },
          {
            name: "Song Fa Bak Kut Teh Raffles City",
            note: "252 North Bridge Road, B1. Bak kut teh sit-down, nhiều người khen. Máy lạnh, Grab 5 phút hoặc đi bộ ~10 phút.",
            maps: maps("Song Fa Bak Kut Teh Raffles City Singapore")
          },
          {
            name: "Lau Pa Sat satay street",
            note: "18 Raffles Quay. Đi bộ ~10 phút. Satay vỉa hè nổi tiếng từ ~19:00. Hawker, không phải nhà hàng — chọn nếu muốn không khí chợ đêm.",
            maps: maps("Lau Pa Sat 18 Raffles Quay Singapore")
          }
        ],
        avoid: "Không kéo sang Little India sau Merlion (ngược hướng). Peach Garden OCBC tầng 33 sang, bé dễ mệt. Jumbo chilli crab lâu và bẩn tay — để khi không có bé nhỏ.",
        place: "Merlion / Raffles Place",
        maps: maps("Super Loco Customs House 70 Collyer Quay"),
        price: "S$45–80 / nhà"
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
          },
          {
            name: "Ocean Bites",
            note: "Trong Oceanarium — chỉ khi bé đói giữa chừng, ăn nhanh rồi ra WEAVE.",
            maps: maps("Singapore Oceanarium Resorts World Sentosa")
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
            name: "GRUB",
            note: "Tối Thứ Hai, gần hotel. Casual, hợp gia đình.",
            maps: maps("GRUB 30 Stevens Road #01-06 Novotel Singapore")
          },
          {
            name: "Food Exchange",
            note: "Buffet tầng 2 Novotel. Có thể mua snack cho sáng bay.",
            maps: maps("Food Exchange Novotel Singapore on Stevens")
          },
          {
            name: "Orchard food court (shuttle)",
            note: "Nếu bé đã nghỉ và muốn đổi món: shuttle hotel → Wheelock Place / ION, chọn 1 chỗ rồi về sớm.",
            maps: maps("ION Orchard Singapore")
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
        notes: [
          "Landing Changi ~12:20",
          "Immigration + hành lý có thể 30–60 phút",
          "Kích hoạt SIM và test Grab trước khi ra khỏi sân bay"
        ],
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
          "Không mua attraction trả tiền (Canopy Park)",
          "Baby Care Room B2–L4",
          "Ăn trưa: Yun Nans tầng 2 (#02-217) — sit-down, soup gà. Hàng dài thì Shake Shack #02-256",
          "Nếu immigration chậm: chỉ Rain Vortex + lunch, rồi Grab về hotel"
        ],
        eat: "Yun Nans #02-217 (ưu tiên) hoặc Shake Shack #02-256",
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
        place: "~25–40 phút",
        notes: [
          "Thứ Sáu chiều dễ kẹt — chừa buffer",
          "Không MRT/bus ngày đầu: vali + Chilux. Bus 36 từ Changi đi Orchard rồi còn phải đổi"
        ],
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
          "Grab từ Novotel ~25–35 phút · Zoo mở 8:30",
          "Bé <3 FREE — mang hộ chiếu bé",
          "Ưu tiên: Orangutan, tram, KidzWorld. Gấu trúc KHÔNG ở Zoo — nằm River Wonders",
          "Nếu bỏ River: ở lại KidzWorld chơi thêm, về hotel ~14:00",
          "Sáng không MRT/bus: xe M2 Khatib chỉ từ 8:30, trễ cửa Zoo. Chiều về nếu hết Grab: bus 138 từ Zoo (48131) → Springleaf, TEL về Stevens — hoặc M2 → Khatib rồi MRT"
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
          "Mở 10:00 · Giant Panda Forest tới ~18:15",
          "Bé <3 FREE. Chỉ vào nếu bé còn vui sau Zoo",
          "Ưu tiên: Giant Panda (máy lạnh) → ra về. Amazon River Quest nếu hàng ngắn",
          "Mệt → bỏ River, không tiếc vé phụ bằng việc bé quấy"
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
        end: "09:45",
        title: "Novotel pool / Kids Room",
        type: "rest",
        price: 0,
        baby: true,
        prebook: false,
        place: "Novotel Stevens",
        notes: [
          "Chỉ 60–75 phút — 10:00 Grab sang Gardens",
          "Breakfast trong hotel trước khi ra",
          "Backup: shuttle/đi bộ Stevens MRT, TEL thẳng Gardens by the Bay"
        ],
        link: "",
        maps: maps("Novotel Singapore on Stevens")
      },
      {
        id: "d3-gardens",
        day: "3",
        time: "10:15",
        end: "13:00",
        title: "Cloud Forest + Flower Dome + Supertree",
        type: "attraction",
        price: 92,
        baby: true,
        prebook: true,
        place: "Gardens by the Bay",
        notes: [
          "Grab từ Novotel ~20–25 phút — ưu tiên",
          "Backup MRT: shuttle/đi bộ Stevens (TE11) → TEL thẳng Gardens by the Bay (TE22), ~19 phút, không đổi tàu",
          "Backup bus kém hơn MRT: 105/132/190/972 từ 40209 → Orchard, rồi 106 xuống Bayfront Stn Exit B/MBS, đi bộ cầu sang Gardens",
          "Vào Cloud Forest trước (máy lạnh, Jurassic World nếu còn). Bé <3 FREE",
          "Flower Dome tiếp. Supertree Grove đi bộ chụp hình ban ngày — không chờ Rhapsody 19:45 (tối có Merlion)",
          "Children's Garden GBTB: bỏ nếu mệt",
          "~12:15 ăn nhẹ The Canopy rồi 13:00 Grab về hotel"
        ],
        eat: "Shake Shack The Canopy #03-02/03",
        link: "https://www.gardensbythebay.com.sg/",
        maps: maps("Cloud Forest Gardens by the Bay Singapore")
      },
      {
        id: "d3-rest",
        day: "3",
        time: "13:30",
        end: "16:15",
        title: "Nghỉ bắt buộc — Novotel",
        type: "rest",
        price: 0,
        baby: true,
        prebook: false,
        place: "Hotel",
        notes: [
          "Nghỉ sau Gardens — chiều còn Merlion",
          "Ăn trưa nhẹ nếu chưa ăn Canopy · bé ngủ/nằm điều hòa",
          "16:20 Grab → Merlion Park (~20–25 phút từ Stevens) — ưu tiên",
          "Backup bus: 190 từ 40209 (cửa hotel) → Hill St Grand Park City Hall / High St Ctr, đi bộ ~10 phút tới tượng",
          "Backup MRT: DTL Stevens → Downtown, đi bộ tới Merlion"
        ],
        eat: "Snack hotel nếu bé đói",
        link: "",
        maps: maps("Novotel Singapore on Stevens")
      },
      {
        id: "d3-merlion",
        day: "3",
        time: "16:45",
        end: "18:15",
        title: "Merlion Park — chụp hình",
        type: "attraction",
        price: 0,
        baby: true,
        prebook: false,
        place: "Merlion Park, Fullerton Road",
        notes: [
          "Tượng Merlion gốc, free, đẩy Chilux được. Không mua vé",
          "Ánh sáng đẹp ~17:30–19:00 (Chủ Nhật trời còn sáng). Nền Marina Bay Sands",
          "Đứng lan can phía Fullerton / nhìn sang MBS. Tránh đứng sát mép khi đông",
          "10–20 phút là đủ ảnh. Xong đi bộ 5 phút tới Super Loco ăn tối",
          "Tới đây: Grab ưu tiên. Backup bus 190 (40209 → Hill St) hoặc DTL Downtown",
          "Không quay lại Gardens tối — Rhapsody bỏ để kịp dinner"
        ],
        eat: "Tối: Super Loco Customs House (ưu tiên) hoặc Song Fa Raffles City",
        link: "https://www.visitsingapore.com/see-do-singapore/recreation-leisure/viewpoints/merlion-park/",
        maps: maps("Merlion Park Fullerton Road Singapore")
      },
      {
        id: "d3-dinner",
        day: "3",
        time: "18:30",
        end: "20:00",
        title: "Dinner gần Merlion",
        type: "food",
        price: 60,
        baby: true,
        prebook: false,
        place: "Customs House / Raffles Place",
        notes: [
          "Ưu tiên Super Loco — sit-down, kids menu, view vịnh. Chủ Nhật mở 17:00",
          "Muốn món Singapore: Song Fa bak kut teh tại Raffles City",
          "Muốn hawker: Lau Pa Sat satay ~19:00, đi bộ 10 phút",
          "20:15 Grab về Novotel. Backup: bus 190 chiều ngược (Hill St / Eu Tong Sen) xuống Chelsea Gdns 40201, đối diện hotel"
        ],
        eat: "Super Loco #01-14 · Song Fa Raffles City · hoặc Lau Pa Sat satay",
        link: "https://super-loco.com/customshouse",
        maps: maps("Super Loco Customs House 70 Collyer Quay")
      },
      {
        id: "d4-ocean",
        day: "4",
        time: "09:20",
        end: "12:30",
        title: "Singapore Oceanarium",
        type: "attraction",
        price: 110,
        baby: true,
        prebook: true,
        place: "Resorts World Sentosa",
        notes: [
          "Grab ~09:20 từ Novotel — Oceanarium mở 10:00 (đừng đi 8:30, sẽ đứng chờ)",
          "Backup MRT: Stevens TEL → Outram Park đổi NE → HarbourFront, đi bộ/Sentosa Express vào RWS. Ra sớm hơn Grab ~20 phút. Bus 132 từ 40209 tới Bukit Merah, không vào HarbourFront",
          "Bé under 4 FREE · stroller OK · indoor mát",
          "2–3 giờ là đủ. Không mua Dolphin / Pier Adventure",
          "Nếu bé đói sớm: Ocean Bites trong khu Oceanarium"
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
        title: "Palawan Beach — hoặc ở lại máy lạnh",
        type: "attraction",
        price: 0,
        baby: false,
        prebook: false,
        place: "Sentosa / RWS",
        notes: [
          "REST 13:30–14:30 trong RWS trước (máy lạnh)",
          "Palawan 14:30 nắng gắt tháng 8 — chỉ đi nếu bé còn vui, có mũ/nước. Playground + Southernmost Point, không thêm vé",
          "Phương án mát hơn: ngồi WEAVE / khu RWS, kem, rồi Grab về hotel pool",
          "Bé mệt → về luôn, đừng cố beach"
        ],
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
        notes: [
          "Dinner 19:00 gần hotel · ngủ 20:00",
          "Tùy chọn Orchard: shuttle hotel hoặc bus 105 / 132 / 190 / 972 từ 40209 → Scotts/Orchard. Về trước 20:00"
        ],
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
        notes: [
          "Checkout 10:00 — gói đồ tối 31/8",
          "Pool chỉ nếu gói xong. 10:15 Grab → Changi T1 — không MRT/bus (vali). Bus 36 từ Orchard tới T1 quá chậm",
          "Bay 13:25, có mặt ~10:45 là đủ (≥120 phút)"
        ],
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
        title: "Singapore Zoo + tram (2 adults)",
        meta: "Chốt · 29/8 · CoupleDeal Ketnoi hoặc 2 adult Mandai · bé FREE theo ngày sinh",
        price: "₫1.442.000 hoặc ~S$98",
        url: "https://ketnoisingapore.com/bang-gia-ve-tham-quan-singapore"
      },
      {
        id: "t-gardens",
        title: "Flower Dome + Cloud Forest (2 adults)",
        meta: "Chốt · 30/8 sáng · 2 Domes · bé FREE · không kèm Chinatown",
        price: "₫694k × 2 ≈ ₫1.388.000 hoặc ~S$92",
        url: "https://ketnoisingapore.com/bang-gia-ve-tham-quan-singapore"
      },
      {
        id: "t-ocean",
        title: "Singapore Oceanarium (2 adults)",
        meta: "Chốt · 31/8 · combo 2 adults · bé under 4 FREE · stroller OK · không Dolphin/Pier",
        price: "₫1.900.000 hoặc ~S$100–110",
        url: "https://ketnoisingapore.com/bang-gia-ve-tham-quan-singapore"
      },
      {
        id: "t-sim",
        title: "SIM / eSIM tourist",
        meta: "4 vé Zoo+Gardens trên Ketnoi → sim Singtel 100GB tặng. Không thì M1/Singtel ~S$12 tại Changi",
        price: "₫0 hoặc ~S$12",
        url: "https://www.changiairport.com/en/at-changi/facilities-and-services-directory/changi-airport-sim-card-purchase-buy-sim-card-singapore.html"
      },
      {
        id: "t-river",
        title: "River Wonders (2 adults) — tùy",
        meta: "Mua sau nếu bé còn vui hết Zoo · không thuyền · vé đại lý thường không hoàn",
        price: "₫721k × 2 ≈ ₫1.442.000 hoặc ~S$90",
        url: "https://www.mandai.com/en/tickets-and-passes/single-attractions/river-wonders.html",
        optional: true
      }
    ],
    ticketSkip: [
      "Vé trẻ em / FamilyDeal (2 large + 1 child) — bé free theo ngày sinh, không đo chiều cao",
      "USS, Harry Potter, Wings of Time, cáp treo, SkyHelix",
      "Zoo/River + Exploria",
      "Jewel Canopy / lưới / mê cung — Ngày 1 chỉ Rain Vortex free",
      "Dolphin, Pier Adventure, Night Safari, Bird Paradise, Tourist Pass MRT"
    ],
    budget: [
      { id: "hotel", label: "Hotel", amount: 839, note: "Đã trả", group: "fixed" },
      { id: "attractions", label: "Attractions (chốt)", amount: 300, note: "Zoo+Gardens+Ocean, chưa River", group: "tickets" },
      { id: "food", label: "Food", amount: 285, note: "Ước tính mid", group: "daily" },
      { id: "grab", label: "Grab + Sentosa", amount: 150, note: "Transport chính", group: "daily" },
      { id: "mrt", label: "MRT / Bus", amount: 40, note: "Contactless", group: "daily" },
      { id: "sim", label: "SIM", amount: 12, note: "Tourist gói nhỏ", group: "tickets" },
      { id: "misc", label: "Miscellaneous", amount: 100, note: "Buffer", group: "daily" }
    ]
  };
})();
