const fs = require('fs');

const users = [
          {
            id: "1",
            role: "Admin",
            email: "admin@entnt.in",
            password: "admin123",
            name: "AdminEntnt"
          },
          {
            id: "2",
            role: "Inspector",
            email: "inspector@entnt.in",
            password: "inspect123",
            name: "InspectorEntnt"
          },
          {
            id: "3",
            role: "Engineer",
            email: "engineer@entnt.in",
            password: "engine123",
            name: "EngineerEntnt"
          },
          {
            id: "4",
            role: "Engineer",
            email: "eng2@entnt.in",
            password: "engine234",
            name: "Alice Johnson"
          },
          {
            id: "5",
            role: "Engineer",
            email: "eng3@entnt.in",
            password: "engine345",
            name: "Bob Smith"
          },
          {
            id: "6",
            role: "Engineer",
            email: "eng4@entnt.in",
            password: "engine456",
            name: "Carlos Lee"
          },
          {
            id: "7",
            role: "Inspector",
            email: "insp2@entnt.in",
            password: "inspect234",
            name: "Diana Patel"
          },
          {
            id: "8",
            role: "Inspector",
            email: "insp3@entnt.in",
            password: "inspect345",
            name: "Ethan Brown"
          },
          {
            id: "9",
            role: "Admin",
            email: "admin2@entnt.in",
            password: "admin234",
            name: "Fiona Green"
          },
          {
            id: "10",
            role: "Engineer",
            email: "eng5@entnt.in",
            password: "engine567",
            name: "Grace Kim"
          },
          {
            id: "11",
            role: "Engineer",
            email: "eng6@entnt.in",
            password: "engine678",
            name: "Henry Ford"
          },
          {
            id: "12",
            role: "Inspector",
            email: "insp4@entnt.in",
            password: "inspect456",
            name: "Ivy Chen"
          }
];
const ships = [
    {
        id: "s1",
        name: "Ever Given",
        imo: "9811000",
        flag: "Panama",
        status: "Active"
      },
      {
        id: "s2",
        name: "Maersk Alabama",
        imo: "9164263",
        flag: "USA",
        status: "Under Maintenance"
      },
      {
        id: "s3",
        name: "Queen Mary 2",
        imo: "9241061",
        flag: "UK",
        status: "Active"
      },
      {
        id: "s4",
        name: "Symphony of the Seas",
        imo: "9744001",
        flag: "Bahamas",
        status: "Active"
      },
      {
        id: "s5",
        name: "MSC Oscar",
        imo: "9703291",
        flag: "Liberia",
        status: "Inactive"
      },
      {
        id: "s6",
        name: "HMM Algeciras",
        imo: "9863297",
        flag: "Panama",
        status: "Active"
      },
      {
        id: "s7",
        name: "CMA CGM Jacques Saade",
        imo: "9839179",
        flag: "France",
        status: "Active"
      },
      {
        id: "s8",
        name: "OOCL Hong Kong",
        imo: "9776171",
        flag: "Hong Kong",
        status: "Under Maintenance"
      },
      {
        id: "s9",
        name: "AIDAnova",
        imo: "9781865",
        flag: "Italy",
        status: "Active"
      },
      {
        id: "s10",
        name: "Costa Smeralda",
        imo: "9781889",
        flag: "Italy",
        status: "Active"
      }
];

function randomDate(start, end) {
  const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return d.toISOString().slice(0, 10);
}

const components = [];
const jobs = [];
const overdueCount = 9;
const compNames = [
  "Main Engine", "Radar System", "Propeller", "Navigation System", "Anchor System", "Lifeboat System",
  "Fire Suppression", "Communication System", "Ballast System", "Steering Gear", "Generator", "Fuel Pump"
];
let compId = 1, jobId = 1;
for (let s = 0; s < ships.length; s++) {
  for (let c = 0; c < 3; c++) {
    const idx = (s * 3 + c);
    const overdue = idx < overdueCount;
    const installDate = randomDate(new Date('2024-11-01'), new Date('2025-05-31'));
    const lastMaintenanceDate = overdue
      ? randomDate(new Date('2024-11-01'), new Date('2024-11-30'))
      : randomDate(new Date('2024-12-01'), new Date('2025-05-31'));
    const comp = {
      id: `c${compId}`,
      shipId: ships[s].id,
      name: compNames[(idx) % compNames.length],
      serialNumber: `${compNames[(idx) % compNames.length].slice(0,2).toUpperCase()}-${1000 + idx}`,
      installDate,
      lastMaintenanceDate
    };
    components.push(comp);

    for (let j = 0; j < 2; j++) {
      const scheduledDate = randomDate(new Date('2024-11-01'), new Date('2025-05-31'));
      const completed = Math.random() > 0.3;
      const completedDate = completed ? randomDate(new Date(scheduledDate), new Date('2025-05-31')) : null;
      const status = completed ? "Completed" : (Math.random() > 0.5 ? "In Progress" : "Open");
      jobs.push({
        id: `j${jobId++}`,
        componentId: comp.id,
        shipId: ships[s].id,
        type: ["Inspection", "Maintenance", "Repair"][Math.floor(Math.random()*3)],
        priority: ["High", "Medium", "Low"][Math.floor(Math.random()*3)],
        status,
        assignedEngineerId: `${3 + (jobId % 9)}`,
        scheduledDate,
        completedDate
      });
    }
    compId++;
  }
}

const hashLogic = `
function simpleHash(str) {
  let hash = 0, i, chr;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
}

const MOCKDATA_HASH = simpleHash(JSON.stringify(MData));

if (typeof localStorage !== 'undefined') {
  if (localStorage.getItem('MOCKDATA_HASH') !== String(MOCKDATA_HASH)) {
    localStorage.clear();
    localStorage.setItem('MOCKDATA_HASH', String(MOCKDATA_HASH));
  }
}

`

const out = `
export const MData = {
  users: ${JSON.stringify(users, null, 2)},
  ships: ${JSON.stringify(ships, null, 2)},
  components: ${JSON.stringify(components, null, 2)},
  jobs: ${JSON.stringify(jobs, null, 2)}
};\n

${hashLogic}
`;

fs.writeFileSync('MockData.js', out);
console.log('MockData.js generated!');