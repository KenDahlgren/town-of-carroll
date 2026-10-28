export const TOWN = {
  name: "Town of Carroll",
  county: "Chautauqua County, New York",
  hamlet: "Frewsburg",
  street: "5 West Main Street",
  mailing: "PO Box 497",
  city: "Frewsburg, NY 14738",
  phone: "716-569-5365",
  fax: "716-569-6331",
  phoneHref: "tel:+17165695365",
} as const;

const ORIGIN = "https://www.townofcarrollny.gov";

export function doc(path: string) {
  return `${ORIGIN}${path}`;
}

export const PAY_TAXES = "https://www.govpaynow.com/gps/user/plc/a0019z";
export const PAY_WATER = "https://water.nyquickpay.com/tcarroll.php";
export const LIHWAP = "https://otda.ny.gov/LIHWAP";

export const MEETING = {
  dateLabel: "November 4, 2026",
  iso: "2026-11-04",
  start: "6:30 PM",
  budget: "7:00 PM",
  moratorium: "7:15 PM",
};

export type AppTo =
  | "/"
  | "/government"
  | "/officials"
  | "/boards"
  | "/committees"
  | "/forms"
  | "/minutes"
  | "/calendar"
  | "/history"
  | "/community"
  | "/events"
  | "/attractions"
  | "/businesses"
  | "/organizations"
  | "/services"
  | "/trails";

export type NavChild = { label: string; to: AppTo };
export type NavItem = { label: string; to: AppTo; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Government",
    to: "/government",
    children: [
      { label: "Officials", to: "/officials" },
      { label: "Boards", to: "/boards" },
      { label: "Committees", to: "/committees" },
      { label: "Forms & publications", to: "/forms" },
    ],
  },
  { label: "Minutes", to: "/minutes" },
  { label: "Calendar", to: "/calendar" },
  { label: "History", to: "/history" },
  {
    label: "Community",
    to: "/community",
    children: [
      { label: "Events", to: "/events" },
      { label: "Attractions", to: "/attractions" },
      { label: "Businesses", to: "/businesses" },
      { label: "Organizations", to: "/organizations" },
      { label: "Local services", to: "/services" },
      { label: "Rails-to-Trails", to: "/trails" },
    ],
  },
];

export const GOV_PATHS = ["/government", "/officials", "/boards", "/committees", "/forms"];
export const COMMUNITY_PATHS = [
  "/community",
  "/events",
  "/attractions",
  "/businesses",
  "/organizations",
  "/services",
  "/trails",
];

export type HourRow = { day: string; hours: string; note?: string };

export const CLERK_HOURS: HourRow[] = [
  { day: "Monday", hours: "9:00 am – 6:00 pm", note: "Closed noon to 1:00 pm" },
  { day: "Tuesday", hours: "9:00 am – 4:30 pm", note: "Closed noon to 1:00 pm" },
  {
    day: "Wednesday",
    hours: "Closed",
    note: "Court sits the second and fourth Wednesdays at 10:00 am",
  },
  { day: "Thursday", hours: "9:00 am – 4:30 pm", note: "Closed noon to 1:00 pm" },
  {
    day: "Friday",
    hours: "9:00 am – 4:30 pm",
    note: "May through September, open 9:00 am to noon only",
  },
  { day: "Saturday", hours: "By appointment", note: "Call the clerk’s office" },
  { day: "Sunday", hours: "Closed" },
];

export type Official = {
  name: string;
  title: string;
  group: string;
  phones?: string[];
  email?: string;
  note?: string;
};

export const OFFICIALS: Official[] = [
  {
    group: "Town Board",
    title: "Supervisor",
    name: "Tim Burkett",
    phones: ["716-720-6547"],
    email: "supervisor@townofcarrollny.gov",
  },
  {
    group: "Town Board",
    title: "Deputy Supervisor & Council Member",
    name: "Kenneth Dahlgren",
    phones: ["716-489-1114"],
    email: "kendahlgren@me.com",
  },
  {
    group: "Town Board",
    title: "Council Member",
    name: "Paul Oyer",
    phones: ["716-489-6689"],
    email: "pauloyer8@gmail.com",
  },
  {
    group: "Town Board",
    title: "Council Member",
    name: "John Barber",
    phones: ["716-708-5691"],
    email: "johntbarber@gmail.com",
  },
  {
    group: "Town Board",
    title: "Council Member",
    name: "Justin Lingenfelter",
    phones: ["716-450-7334"],
    email: "justin.lingenfelter25@gmail.com",
  },
  {
    group: "Clerk",
    title: "Town Clerk",
    name: "Susan Rowley",
    phones: ["716-569-5365"],
    email: "clerk@townofcarrollny.gov",
    note: "Fax 716-569-6331",
  },
  {
    group: "Clerk",
    title: "Deputy Town Clerk",
    name: "Julie Burkett",
    phones: ["716-569-5365"],
    email: "deputyclerk@townofcarrollny.gov",
    note: "Fax 716-569-6331",
  },
  {
    group: "Court",
    title: "Town Justice",
    name: "Robert Gray",
    phones: ["716-569-5219"],
    note: "Court clerk Tara Gray. Court on the 2nd and 4th Tuesday at 5:00 pm.",
  },
  {
    group: "Court",
    title: "Town Justice",
    name: "Tamera Kinne-Gustafson",
    phones: ["716-569-5219"],
    note: "Court clerk Wanda Crossley. Court on the 2nd and 4th Wednesday at 10:00 am.",
  },
  {
    group: "Court",
    title: "Town Attorney",
    name: "Andrew Goodell",
    email: "goodell@windstream.net",
  },
  {
    group: "Public safety",
    title: "Police Chief",
    name: "Joshua Ostrander",
    phones: ["716-569-5216", "716-569-5220"],
    email: "policechief@townofcarrollny.gov",
    note: "If no officer is on duty, call the Sheriff at 716-664-3100. Emergencies: 911.",
  },
  {
    group: "Public safety",
    title: "Dog Control Officer",
    name: "Andrew Thies",
    phones: ["716-253-1592"],
    note: "Dispatch 716-664-3100",
  },
  {
    group: "Public works",
    title: "Highway Superintendent",
    name: "Chad Allison",
    phones: ["716-499-6262", "716-569-6161"],
    email: "highway@townofcarrollny.gov",
    note: "Garage 716-569-6161. Highway doors are usually locked — call before you come. 1725 Wahlgren Road.",
  },
  {
    group: "Public works",
    title: "Water Supervisor",
    name: "Tim Ecklund",
    phones: ["716-450-0088"],
    email: "frewsburgwater@townofcarrollny.gov",
    note: "Bradley Long, 716-781-0086. Water department doors are usually locked — call first. 1725 Wahlgren Road.",
  },
  {
    group: "Public works",
    title: "Code Enforcement Officer",
    name: "Alan Gustafson",
    phones: ["716-450-3032", "716-569-5215"],
    email: "codes@townofcarrollny.gov",
    note: "Hours by appointment. Permits are required for new construction, decks, porches, barns, garages, sheds over 120 sq ft, and fences.",
  },
  {
    group: "Public works",
    title: "Assessor",
    name: "Assessor’s office",
    email: "assessor@townofcarrollny.gov",
  },
  {
    group: "History",
    title: "Historian",
    name: "Barbara Cessna",
    phones: ["716-569-5677"],
    email: "historiantownofcarroll@windstream.net",
  },
  {
    group: "History",
    title: "Co-Historian",
    name: "Susan Richards",
    phones: ["716-569-3121"],
    email: "historiantownofcarroll@windstream.net",
  },
];

export const GROUPS = [
  "Town Board",
  "Clerk",
  "Court",
  "Public safety",
  "Public works",
  "History",
] as const;

export type BoardSeat = { role: string; name: string; extra?: string };

export const BOARDS: { name: string; note: string; seats: BoardSeat[] }[] = [
  {
    name: "Town Board",
    note: "Second Wednesday of each month at Town Hall, unless a notice says otherwise. The Boards page lists 6:30 pm; the Officials page lists 6:40 pm. The November 4, 2026 notice says 6:30 pm. Call the clerk to confirm.",
    seats: [
      { role: "Supervisor", name: "Tim Burkett", extra: "716-720-6547" },
      { role: "Council Member", name: "John Barber", extra: "716-708-5691" },
      { role: "Council Member", name: "Justin Lingenfelter", extra: "716-450-7334" },
      { role: "Council Member", name: "Paul Oyer", extra: "716-489-6689" },
      { role: "Deputy Supervisor", name: "Kenneth Dahlgren", extra: "716-489-1114" },
    ],
  },
  {
    name: "Fire Commissioners",
    note: "Term-ending year is noted. Two seats are unpublished on the town site. frewsburgfiredistrict@yahoo.com",
    seats: [
      { role: "Commissioner · through 2026", name: "Don Sparling" },
      { role: "Commissioner · through 2027", name: "Bob Price" },
      { role: "Commissioner · through 2028", name: "Cory Lauffenburger" },
      { role: "Commissioner · through 2029", name: "Seat not listed" },
      { role: "Commissioner · through 2030", name: "Seat not listed" },
    ],
  },
  {
    name: "Planning Board",
    note: "Seven-year terms.",
    seats: [
      { role: "Chairman", name: "Randall Sitler" },
      { role: "Member", name: "Tracy Magnuson" },
      { role: "Member", name: "Josh Eckert" },
      { role: "Member", name: "Sherry Jacobson" },
      { role: "Member", name: "Polly Hanson" },
      { role: "Member", name: "Nick Niles" },
      { role: "Member", name: "Vacancy" },
    ],
  },
  {
    name: "Board of Review",
    note: "Assessment review.",
    seats: [
      { role: "Chairman", name: "Jay Eckert" },
      { role: "Member", name: "David Brown" },
      { role: "Member", name: "John Dale" },
      { role: "Member", name: "Mike Peterson" },
      { role: "Member", name: "Jamson Ruhlman" },
    ],
  },
  {
    name: "Zoning Board of Appeals",
    note: "Five-year terms.",
    seats: [
      { role: "Chairman", name: "Trudy Bloomquist" },
      { role: "Member", name: "Janet Black" },
      { role: "Member", name: "Tracy Magnuson" },
      { role: "Member", name: "Dan Terhune" },
      { role: "Member", name: "Vacancy" },
    ],
  },
  {
    name: "Board of Ethics",
    note: "Advisory to the Town Board.",
    seats: [
      { role: "Chairperson", name: "Kelly Norrod" },
      { role: "Member", name: "Brian Gustafson" },
      { role: "Member", name: "Ron Lemon" },
      { role: "Member", name: "Mel McGinnis" },
      { role: "Member", name: "Phil Roushey" },
      { role: "Member", name: "Tim Burkett" },
    ],
  },
];

export const COMMITTEES: { name: string; members: string[] }[] = [
  { name: "Agriculture", members: ["Ben Gauger", "Jack Jones III"] },
  {
    name: "Business District Planning",
    members: ["Ken Dahlgren", "Pat Fuller", "Tracy Magnuson", "Dan Terhune", "Chuck Weber"],
  },
  {
    name: "Community Engagement",
    members: [
      "Ken Dahlgren",
      "Karen Davis",
      "Judy DiGregorio",
      "Polly Hansen",
      "Sherry Jacobson",
      "Kelly Norrod",
      "Russ Payne",
      "Sue Rowley",
    ],
  },
  {
    name: "Comprehensive Planning",
    members: [
      "Ken Dahlgren, Chairman",
      "Trudy Bloomquist",
      "Jason Bussman",
      "Polly Hansen",
      "Randy Sitler",
    ],
  },
  { name: "Economic Development & Tourism", members: ["To be determined"] },
  { name: "Election", members: ["Town Board"] },
  {
    name: "Employee / Labor Management",
    members: ["Russ Payne, Chairman", "Bill Nelson", "Sue Rowley", "Dan Sisson", "Mike Walker"],
  },
  {
    name: "Highway, Streets, Sidewalks, Lighting & Landfill",
    members: ["Mike Walker, Chairman", "Tim Burkett", "Michael Panebianco", "Russ Payne"],
  },
  { name: "Insurance", members: ["Ken Dahlgren, Chairman", "Russ Payne", "Sue Rowley"] },
  {
    name: "Parks & Recreation",
    members: [
      "John Barber, Chairman",
      "Dalton Anthony",
      "Kim Dilts",
      "Russ Payne",
      "Rachel Roushey",
      "Mike Walker",
    ],
  },
  {
    name: "Public Safety, Civil Defence & Welfare",
    members: [
      "Bill Nelson, Chairman",
      "Dalton Anthony",
      "Tim Ecklund",
      "Brad Long",
      "Russ Payne",
      "Dan Sisson",
    ],
  },
  { name: "Records Management", members: ["Ken Dahlgren, Chairman", "Russ Payne", "Sue Rowley"] },
  {
    name: "Town Hall & Buildings",
    members: ["Mike Walker, Chairman", "John Barber", "Russ Payne", "Dan Sisson"],
  },
  {
    name: "Water",
    members: ["Dan Sisson, Chairman", "Ken Dahlgren", "Tim Ecklund", "Brad Long", "Russ Payne"],
  },
];

export type Publication = { label: string; href: string; detail: string };

export const PUBLICATIONS: Publication[] = [
  {
    label: "2026 adopted budget",
    detail: "Town of Carroll adopted budget",
    href: doc("/uploads/1/2/7/4/127469110/town_of_carroll_2026_adopted_budget.pdf"),
  },
  {
    label: "2026 tax roll",
    detail: "Carroll assessment roll",
    href: doc("/uploads/1/2/7/4/127469110/carroll_roll_2026.pdf"),
  },
  {
    label: "June 2022 audit report",
    detail: "Town financial audit",
    href: doc("/uploads/1/2/7/4/127469110/carroll-2022-20.pdf"),
  },
  {
    label: "NYS Police Reform",
    detail: "Carroll police reform report",
    href: doc("/uploads/1/2/7/4/127469110/police_reform.pdf"),
  },
  {
    label: "2025 drinking water quality report",
    detail: "Annual water quality report (Word document)",
    href: doc("/uploads/1/2/7/4/127469110/awqr_2025_carroll.docx"),
  },
  {
    label: "Online payment fees",
    detail: "GovPayNet fee schedule",
    href: doc("/uploads/1/2/7/4/127469110/govpaynet_fee_schedule_v._gpp_3.pdf"),
  },
  {
    label: "Comprehensive plan",
    detail: "Town of Carroll Comprehensive Plan, 2019",
    href: doc("/uploads/1/2/7/4/127469110/carrollcompplan2019.pdf"),
  },
  {
    label: "Town history",
    detail: "Historical Society history booklet",
    href: doc("/uploads/1/2/7/4/127469110/history.pdf"),
  },
  {
    label: "2020 Resolution 1A",
    detail: "Resolution filed on the town site",
    href: doc("/uploads/1/2/7/4/127469110/2020_town_of_carroll_resolution_1a.pdf"),
  },
  {
    label: "Boil-water checklist",
    detail: "What residents should do during a boil-water notice",
    href: doc("/uploads/1/2/7/4/127469110/boil_water_checklist_for_residents.pdf"),
  },
  {
    label: "Posted agenda",
    detail: "The minutes page calls this the current agenda. The file is dated September 9, 2026.",
    href: doc("/uploads/1/2/7/4/127469110/2026-9-09_september_agenda.pdf"),
  },
];

export const MINUTE_YEARS: { label: string; href: string }[] = [
  { label: "2026", href: "https://www.dropbox.com/scl/fo/e4vbrtyh2n3b8sgchf1at/AAab2LakFyh54MGs8o38dFg?rlkey=karwdx1x1oyyrqftw4j6iboug&dl=0" },
  { label: "2025", href: "https://www.dropbox.com/scl/fo/oiry5n0hx3kqjhubafqjo/AHepxvWWBE1491eBLrkmaiI?rlkey=2okk5odn0fa2uydca82x8z0ep&dl=0" },
  { label: "2024", href: "https://www.dropbox.com/scl/fo/xk76cuxx7hiwe2g843hiw/h?rlkey=1nudz3eltr3ko5wanpulmsllz&dl=0" },
  { label: "2023", href: "https://www.dropbox.com/scl/fo/xn274454d2kgtgvragyoh/h?dl=0&rlkey=1abr9wj6w2lp244tczwicc8xc" },
  { label: "2022", href: "https://www.dropbox.com/scl/fo/eagyn7o7sftur9g9f0l2c/h?dl=0&rlkey=106b0bg9oovya6mf2rqae51wi" },
  { label: "2021", href: "https://www.dropbox.com/scl/fo/9potyahwp5telsrqnqlq4/h?dl=0&rlkey=5t3ofztgojk5btfc9kek1fhil" },
  { label: "2020", href: "https://www.dropbox.com/scl/fo/o8l458vfhe6kslgk1g2e0/h?dl=0&rlkey=p0qep872fegwvkx7dspmrusmi" },
  { label: "2019", href: "https://www.dropbox.com/scl/fo/ry1n28w5by4iqnccxw7x3/h?dl=0&rlkey=365wxcdqa5mj7842yidd1j0oe" },
  { label: "2018", href: "https://www.dropbox.com/scl/fo/zapfr19ajm4ef7p1aa4sk/h?dl=0&rlkey=hnwggcg89swwdt9ptwv7wi4lq" },
  { label: "2017", href: "https://www.dropbox.com/scl/fo/n7x1fw7saulm9mbafv789/h?dl=0&rlkey=0g80c5q4o5383jada2lveqgbc" },
  { label: "2016", href: "https://www.dropbox.com/scl/fo/1u4nd0861kzgj8q4yonpx/h?dl=0&rlkey=odz64k56sory8pj4j30un8g2b" },
  { label: "2015", href: "https://www.dropbox.com/scl/fo/d1o5cb2087amv97j1vzm3/h?dl=0&rlkey=ocvtqawz0uuy9ztils62q0sye" },
  { label: "2014", href: "https://www.dropbox.com/scl/fo/we7bemhqp0s04tj3c2puu/h?dl=0&rlkey=0mnz0izye7zztcg2k7xsvcgpq" },
  { label: "2013", href: "https://www.dropbox.com/scl/fo/i34nz6w879lrvn0tvyoh6/h?dl=0&rlkey=ldtibcydwlnbxw41fbzxscfri" },
  { label: "2012", href: "https://www.dropbox.com/scl/fo/0x3crwphnmdp1dwmgcf63/h?dl=0&rlkey=f6qathmpvrbf6noo8wk8rlc7l" },
  { label: "2011", href: "https://www.dropbox.com/scl/fo/eym46dj4naak0h3rhbob1/h?rlkey=o6hx056dji6czjc34tedttcvj&dl=0" },
  { label: "2010", href: "https://www.dropbox.com/scl/fo/u8u8vqq91013osmdaaxtt/h?rlkey=cavmmhg7eerygudus4jyiycgz&dl=0" },
  { label: "2009", href: "https://www.dropbox.com/scl/fo/b7ggxvtlgdfaw05dw3zrh/h?rlkey=xtrehe655qfe3lxkd9ojegoiy&dl=0" },
  { label: "2008", href: "https://www.dropbox.com/scl/fo/htcbx6x2hbreu431uo0pb/h?rlkey=6vb8a10z8jsuxvnmk0jom8cq6&dl=0" },
];

export type Business = { name: string; address?: string; phone?: string; href?: string };

export const BUSINESSES: Business[] = [
  { name: "Acorn Embroidery", address: "590 Oak Hill Road", phone: "716-569-3515" },
  { name: "Anderson's Tavern", address: "2 East Main Street" },
  { name: "Angel Hair", address: "2 East Main Street", phone: "716-569-2446", href: "https://www.bestprosintown.com/ny/frewsburg/angel-hair-/" },
  { name: "Anthony's Supper Club", address: "174 Ivory Street", phone: "716-569-4351" },
  { name: "Bloomquist Landscaping", address: "1391 Busti-Stillwater Road", phone: "716-405-0473" },
  { name: "C & R Construction", address: "50 White Drive", phone: "716-569-3574", href: "http://candrny.com/" },
  { name: "Casella Transfer Station", address: "29 Railroad Avenue", phone: "716-952-4492", href: "https://local.casella.com/Dumpster-Rental/NY/Jamestown-NY/Frewsburg-NY" },
  { name: "Colburn's AC & Heating", address: "17 White Drive", phone: "716-569-3695", href: "https://www.colburnsacr.com/" },
  { name: "CPU Unlimited", address: "26 West Main Street", phone: "716-569-4633", href: "http://www.cpuunlimited.com/" },
  { name: "Dinner Bell Restaurant", address: "15 Center Street", phone: "716-569-5165" },
  { name: "Frewsburg Lanes", address: "18 West Main Street", phone: "716-569-3553", href: "http://www.frewsburglanes.com/" },
  { name: "Frewsburg Post Office", address: "21 East Main Street", phone: "716-569-6545" },
  { name: "Frewsburg Rest Home", address: "106 West Main Street", phone: "716-569-3095", href: "https://www.tanglewood-group.com/facilities/the-magnolia/" },
  { name: "Frewsburg Wine & Spirits", address: "22 West Main Street", phone: "716-922-9037" },
  { name: "Frewsburger Ice Cream", address: "17 West Main Street", phone: "716-569-3756" },
  { name: "Frewsburger Pizza", address: "11 West Main Street", phone: "716-569-5200", href: "http://www.frewsburgerpizzashop.com/" },
  { name: "Frew Run Gravel Products", address: "Frew Run Road", phone: "716-569-4712", href: "http://www.jamestownmacadam.com/" },
  { name: "GNU 2 EWE", address: "26 West Main Street", phone: "716-569-2221" },
  { name: "Great Lakes Insurance", address: "2 Center Street", phone: "716-569-4311", href: "https://www.greatlakesins.com/" },
  { name: "Green Thumb Landscaping", address: "133 Frew Run Road", phone: "716-569-2333" },
  { name: "J High Acres", address: "287 Robbin Hill Road", phone: "716-569-2179" },
  { name: "Jamestown Industrial Trucks", address: "52 South Pearl Street", phone: "716-569-2410", href: "https://www.jitny.com/" },
  { name: "Jay Eckert Construction", address: "Engstrom Coss Road", phone: "716-569-6955", href: "https://www.jayeckertconstruction.com/" },
  { name: "John Curtiss Designs", address: "169 Wheeler Hill Road", phone: "716-569-6398" },
  { name: "Kingdom Financial", address: "125 West Main Street", phone: "716-569-6726", href: "https://www.ameripriseadvisors.com/team/kingdom-financial-group" },
  { name: "Kit N' Kaboodle", address: "54 West Main Street" },
  { name: "Kwik Fill", address: "36 West Main Street", phone: "716-569-6227", href: "https://www.kwikfill.com/" },
  { name: "M.O. Metal Products", address: "27 White Drive", phone: "716-569-5322" },
  { name: "Mackie's Appliances", address: "60 West Main Street", phone: "716-569-2800", href: "https://www.gregmackie.com/" },
  { name: "Magnum Graphics", address: "7 Water Street", phone: "716-569-3648" },
  { name: "Main Street Collectibles", address: "18 Main Street" },
  { name: "Memories Restaurant", address: "109 West Main Street", phone: "716-569-3460" },
  { name: "Mike Peterson Auction", address: "84 Ivory Street" },
  { name: "Miller's Grove", address: "64 Old Fentonville Road", phone: "716-569-2212" },
  { name: "Monarch Plastics", address: "225 Falconer Street", phone: "716-569-2175" },
  { name: "Nelson Brothers", address: "233 North Pearl Street", phone: "716-569-4655" },
  { name: "Nichols Recycling", address: "120 West Main Street", phone: "716-569-3644" },
  { name: "Peterson Funeral Home", address: "12 North Pearl Street", phone: "716-569-5405", href: "http://www.petersonfh.net/" },
  { name: "Sherry Bjork Law Office", address: "16 West Main Street" },
  { name: "Spectacular Sports", address: "125 West Main Street", phone: "716-569-5114" },
  { name: "Strong Trucking", address: "236 North Pearl Street", phone: "716-569-6900" },
  { name: "Sun Tech Patio Enclosures", address: "1078 Ivory Road", phone: "716-569-4292" },
  { name: "Ted's Auto Service", address: "203 North Pearl Street", phone: "716-569-2369" },
  { name: "TLC Pet Kennel", address: "1014 Oak Hill Road", phone: "716-569-2461" },
  { name: "TOPS Friendly Market", address: "20 Center Street" },
  { name: "Town Historical Society", address: "5 West Main Street" },
  { name: "VKS Emporium", address: "54 West Main Street", phone: "716-569-6547" },
];

export const ORGANIZATIONS: { name: string; href?: string }[] = [
  { name: "4-H Club" },
  { name: "Carroll Masonic Lodge #1147 F & AM" },
  { name: "Carroll-Frewsburg American Legion" },
  { name: "Carroll-Frewsburg Rod & Gun Club" },
  { name: "Frewsburg Lions Club", href: "https://www.lionsclubs.org/en" },
  { name: "Frewsburg PTA" },
  { name: "Lake Erie Beagle Club" },
  { name: "Veterans of Foreign Wars" },
];

export type Service = { name: string; detail: string; phone?: string; href?: string };

export const SERVICE_GROUPS: { name: string; items: Service[] }[] = [
  {
    name: "Town & safety",
    items: [
      { name: "Frewsburg Fire Company", detail: "88 West Main Street", phone: "716-569-3505", href: "https://www.facebook.com/FrewsburgFireDepartment/" },
      { name: "Police Department", detail: "5 West Main Street. The services page also lists 716-569-5365; the chief’s lines are on Officials.", phone: "716-569-5216" },
      { name: "Justice Court", detail: "5 West Main Street", phone: "716-569-5219" },
      { name: "Highway Department", detail: "1725 Wahlgren Road. Call before you come — the door is usually locked.", phone: "716-569-6161" },
      { name: "Frewsburg Water Department", detail: "1725 Wahlgren Road. Call the superintendent at 716-450-0088 before you come.", phone: "716-450-0088" },
      { name: "US Postal Service", detail: "21 East Main Street", phone: "716-569-6545", href: "http://www.postallocations.com/ny/frewsburg/frewsburg" },
    ],
  },
  {
    name: "Youth, schools & park",
    items: [
      { name: "Community Youth Center", detail: "Summer recreation, and the Relief Zone.", href: "http://www.thereliefzone.org/" },
      { name: "Youth programs", detail: "Little League, Boy Scouts, Cub Scouts, Girl Scouts, swim program, Little Hoopers basketball, midget football." },
      { name: "Frewsburg Central School", detail: "Frewsburg Central High School and Robert H. Jackson Elementary.", href: "https://www.frewsburgcsd.org/" },
      { name: "Town Park pavilion", detail: "Residents can reserve the pavilion for parties and family gatherings. Call the Town Clerk." },
    ],
  },
  {
    name: "Congregations",
    items: [
      { name: "Fentonville Methodist Church", detail: "Fentonville", href: "https://www.facebook.com/Fentonville.UMC/" },
      { name: "First Baptist Church", detail: "Frewsburg", href: "https://firstbaptistchurchfrewsburg.org/" },
      { name: "Ivory Baptist Church", detail: "Ivory", href: "https://www.facebook.com/pages/Ivory-Baptist-Church/114002618630004" },
      { name: "Koinonia Christian Fellowship", detail: "Frewsburg", href: "https://www.facebook.com/KCFellowship/" },
      { name: "Siolam Fellowship", detail: "Listed under that spelling on the town site." },
      { name: "Trinity United Methodist Church", detail: "Frewsburg", href: "https://www.tumcfrewsburg.com/" },
      { name: "Zion Lutheran Church", detail: "Frewsburg", href: "http://www.zionfrewsburg.com/" },
    ],
  },
];

export const ATTRACTIONS: { name: string; detail: string }[] = [
  {
    name: "Three lakes within an easy drive",
    detail:
      "Chautauqua Lake is about 8 miles northwest, Kinzua Lake about 14 miles east, and Lake Erie about 35 miles north. Motels, campgrounds, and primitive sites sit around all three.",
  },
  {
    name: "Allegany State Park",
    detail:
      "About 36 miles away: picnic areas, two lakes, and cabins that rent year-round. The park borders the Seneca Nation, with gaming and hotels nearby.",
  },
  {
    name: "Audubon Community Nature Center",
    detail:
      "1600 Riverside Road, about 3 miles south of Frewsburg. Walk the trails or visit Liberty, the American bald eagle.",
  },
  {
    name: "Town Historical Society",
    detail:
      "Behind Town Hall at 5 West Main Street. Saturdays, May through September, 2:00–4:00 pm. Also by appointment at 716-489-1114. Admission is free. Meetings the third Monday, March through November, at 6:30 pm.",
  },
  {
    name: "Jamestown, six miles north",
    detail:
      "Home of Lucille Ball. The Lucy Desi Museum and the Lucille Ball Little Theatre are dedicated to her life and work.",
  },
  {
    name: "Roger Tory Peterson Institute",
    detail: "311 Curtis Street, Jamestown, about nine miles north. Wildlife art and the collection of Dr. Roger Tory Peterson.",
  },
  {
    name: "Martz Observatory",
    detail: "176 Robbin Hill Road, about six miles northeast.",
  },
  {
    name: "Y-B Normal Alpacas",
    detail: "473 Dodge Road, about four miles northeast of town.",
  },
  {
    name: "Infinity Performing Arts",
    detail: "A Jamestown youth company dedicated to the arts.",
  },
];

export const EVENTS: { when: string; title: string; detail: string }[] = [
  {
    when: "March / April",
    title: "Easter egg hunt",
    detail:
      "The Saturday before Easter, on the Frewsburg Central High School football field if the weather holds. If it doesn’t, the hunt moves into the high-school gym.",
  },
  {
    when: "June",
    title: "Community-wide lawn sales",
    detail:
      "The second weekend in June. Maps are at the clerk’s office and in local shops. To get a sale on the map, call the Town Clerk. Some organizations sell hot dogs and drinks during the weekend.",
  },
  {
    when: "Summer",
    title: "Library, fire company, Relief Zone",
    detail:
      "Summer also brings the Myers Memorial Library book sale, the Frewsburg Fire Company dice run, and events at the Relief Zone.",
  },
  {
    when: "November / December",
    title: "Santa parade and craft show",
    detail:
      "The Saturday after Thanksgiving is the Old Fashioned Santa Parade, with horse-drawn displays. The fire department building at the firemen’s grounds hosts a craft show.",
  },
];

export type Task = {
  title: string;
  detail: string;
  keys: string;
  href?: string;
  to?: AppTo;
  anchor?: string;
};

export const TASKS: Task[] = [
  { title: "Pay property taxes", detail: "GovPayNow. A fee schedule is posted with the documents.", keys: "tax taxes property pay online", href: PAY_TAXES },
  { title: "Pay a water bill", detail: "NY Quick Pay for the Town of Carroll.", keys: "water bill pay utility", href: PAY_WATER },
  { title: "Water-bill help", detail: "New York LIHWAP. Applications are at Town Hall. Freshwater Future: 231-348-8200.", keys: "water help assistance lihwap past due", href: LIHWAP },
  { title: "Clerk’s hours", detail: "Window hours, lunch closure, and Friday summer hours.", keys: "hours clerk office open window", anchor: "/#hours" },
  { title: "November 4 meeting", detail: "Board at 6:30 pm. Budget hearing at 7:00. Moratorium hearing at 7:15.", keys: "meeting board hearing budget moratorium november calendar", to: "/calendar" },
  { title: "Highway department", detail: "Call first. Garage 716-569-6161. Superintendent 716-499-6262.", keys: "highway road snow plow garage", to: "/officials" },
  { title: "Dog control", detail: "Andrew Thies, 716-253-1592. Dispatch 716-664-3100.", keys: "dog animal control", to: "/officials" },
  { title: "Building permit", detail: "Code enforcement by appointment, 716-450-3032.", keys: "permit building code shed fence deck zoning", to: "/officials" },
  { title: "Town documents", detail: "Budget, tax roll, water report, comprehensive plan.", keys: "budget tax roll pdf document plan audit", to: "/forms" },
  { title: "Meeting minutes", detail: "Dropbox folders from 2008 through 2026.", keys: "minutes agenda meeting notes", to: "/minutes" },
  { title: "Park pavilion", detail: "Residents reserve it through the Town Clerk.", keys: "park pavilion reserve party", to: "/services" },
  { title: "Find a business", detail: "Main Street shops, trades, and services in town.", keys: "business pizza restaurant shop store", to: "/businesses" },
];

export function telHref(display: string) {
  const digits = display.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `tel:+${digits}`;
  return `tel:${digits}`;
}

export function clerkStatus(now: Date): { open: boolean; label: string } {
  const day = now.getDay();
  const month = now.getMonth();
  const mins = now.getHours() * 60 + now.getMinutes();
  const lunch = mins >= 12 * 60 && mins < 13 * 60;
  const within = (start: number, end: number) => mins >= start && mins < end;

  if (day === 0) return { open: false, label: "Closed Sunday" };
  if (day === 6) return { open: false, label: "Saturday — call for an appointment" };
  if (day === 3) return { open: false, label: "Clerk’s window closed · court may be in session" };

  if (day === 1) {
    if (lunch) return { open: false, label: "Closed for lunch · back at 1:00 pm" };
    if (within(9 * 60, 18 * 60)) return { open: true, label: "Open now · until 6:00 pm" };
    return { open: false, label: "Closed · opens Monday at 9:00 am" };
  }

  const summerFriday = day === 5 && month >= 4 && month <= 8;
  if (summerFriday) {
    if (within(9 * 60, 12 * 60)) return { open: true, label: "Open now · Friday hours end at noon" };
    return { open: false, label: "Closed · May–September Fridays end at noon" };
  }

  if (day === 2 || day === 4 || day === 5) {
    if (lunch) return { open: false, label: "Closed for lunch · back at 1:00 pm" };
    if (within(9 * 60, 16 * 60 + 30)) return { open: true, label: "Open now · until 4:30 pm" };
  }

  return { open: false, label: "Closed" };
}

export function daysUntil(iso: string, now: Date) {
  const [y, m, d] = iso.split("-").map(Number);
  const target = new Date(y, m - 1, d);
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((target.getTime() - start.getTime()) / 86_400_000);
}
