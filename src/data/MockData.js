export const MData = {
  users: [
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
  ],
  ships: [
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
  ],
  components: [
    {
      id: "c1",
      shipId: "s1",
      name: "Main Engine",
      serialNumber: "ME-1234",
      installDate: "2024-11-10",
      lastMaintenanceDate: "2024-01-10"
    },
    {
      id: "c2",
      shipId: "s1",
      name: "Radar System",
      serialNumber: "RAD-5678",
      installDate: "2024-12-15",
      lastMaintenanceDate: "2024-01-15"
    },
    {
      id: "c3",
      shipId: "s1",
      name: "Propeller",
      serialNumber: "PR-1111",
      installDate: "2025-01-22",
      lastMaintenanceDate: "2024-02-10"
    },
    {
      id: "c4",
      shipId: "s2",
      name: "Navigation System",
      serialNumber: "NAV-2222",
      installDate: "2024-11-20",
      lastMaintenanceDate: "2024-01-20"
    },
    {
      id: "c5",
      shipId: "s2",
      name: "Anchor System",
      serialNumber: "AN-3333",
      installDate: "2024-12-28",
      lastMaintenanceDate: "2024-01-25"
    },
    {
      id: "c6",
      shipId: "s2",
      name: "Lifeboat System",
      serialNumber: "LB-4444",
      installDate: "2025-01-15",
      lastMaintenanceDate: "2024-02-15"
    },
    {
      id: "c7",
      shipId: "s3",
      name: "Fire Suppression",
      serialNumber: "FS-5555",
      installDate: "2024-12-01",
      lastMaintenanceDate: "2024-02-20"
    },
    {
      id: "c8",
      shipId: "s3",
      name: "Communication System",
      serialNumber: "COM-6666",
      installDate: "2025-01-20",
      lastMaintenanceDate: "2024-03-15"
    },
    {
      id: "c9",
      shipId: "s3",
      name: "Ballast System",
      serialNumber: "BS-7777",
      installDate: "2025-02-15",
      lastMaintenanceDate: "2025-03-15"
    },
    {
      id: "c10",
      shipId: "s4",
      name: "Steering Gear",
      serialNumber: "SG-8888",
      installDate: "2024-11-25",
      lastMaintenanceDate: "2024-12-25"
    },
    {
      id: "c11",
      shipId: "s4",
      name: "Generator",
      serialNumber: "GEN-9999",
      installDate: "2024-12-30",
      lastMaintenanceDate: "2025-01-30"
    },
    {
      id: "c12",
      shipId: "s4",
      name: "Fuel Pump",
      serialNumber: "FP-1010",
      installDate: "2025-01-10",
      lastMaintenanceDate: "2025-02-10"
    },
    {
      id: "c13",
      shipId: "s5",
      name: "Main Engine",
      serialNumber: "ME-2345",
      installDate: "2024-12-10",
      lastMaintenanceDate: "2025-01-10"
    },
    {
      id: "c14",
      shipId: "s5",
      name: "Radar System",
      serialNumber: "RAD-6789",
      installDate: "2025-01-25",
      lastMaintenanceDate: "2025-02-25"
    },
    {
      id: "c15",
      shipId: "s5",
      name: "Propeller",
      serialNumber: "PR-2222",
      installDate: "2025-02-10",
      lastMaintenanceDate: "2025-03-10"
    },
    {
      id: "c16",
      shipId: "s6",
      name: "Navigation System",
      serialNumber: "NAV-3333",
      installDate: "2024-11-15",
      lastMaintenanceDate: "2024-12-15"
    },
    {
      id: "c17",
      shipId: "s6",
      name: "Anchor System",
      serialNumber: "AN-4444",
      installDate: "2024-12-10",
      lastMaintenanceDate: "2025-01-10"
    },
    {
      id: "c18",
      shipId: "s6",
      name: "Lifeboat System",
      serialNumber: "LB-5555",
      installDate: "2025-01-20",
      lastMaintenanceDate: "2025-02-20"
    },
    {
      id: "c19",
      shipId: "s7",
      name: "Fire Suppression",
      serialNumber: "FS-6666",
      installDate: "2024-12-05",
      lastMaintenanceDate: "2025-01-05"
    },
    {
      id: "c20",
      shipId: "s7",
      name: "Communication System",
      serialNumber: "COM-7777",
      installDate: "2025-01-15",
      lastMaintenanceDate: "2025-02-15"
    },
    {
      id: "c21",
      shipId: "s7",
      name: "Ballast System",
      serialNumber: "BS-8888",
      installDate: "2025-02-10",
      lastMaintenanceDate: "2025-03-10"
    },
    {
      id: "c22",
      shipId: "s8",
      name: "Steering Gear",
      serialNumber: "SG-9999",
      installDate: "2024-11-18",
      lastMaintenanceDate: "2024-12-18"
    },
    {
      id: "c23",
      shipId: "s8",
      name: "Generator",
      serialNumber: "GEN-1010",
      installDate: "2024-12-28",
      lastMaintenanceDate: "2025-01-28"
    },
    {
      id: "c24",
      shipId: "s8",
      name: "Fuel Pump",
      serialNumber: "FP-2020",
      installDate: "2025-01-12",
      lastMaintenanceDate: "2025-02-12"
    },
    {
      id: "c25",
      shipId: "s9",
      name: "Main Engine",
      serialNumber: "ME-3456",
      installDate: "2024-12-20",
      lastMaintenanceDate: "2025-01-20"
    },
    {
      id: "c26",
      shipId: "s9",
      name: "Radar System",
      serialNumber: "RAD-7890",
      installDate: "2025-01-25",
      lastMaintenanceDate: "2025-02-25"
    },
    {
      id: "c27",
      shipId: "s9",
      name: "Propeller",
      serialNumber: "PR-3333",
      installDate: "2025-02-10",
      lastMaintenanceDate: "2025-03-10"
    },
    {
      id: "c28",
      shipId: "s10",
      name: "Navigation System",
      serialNumber: "NAV-4444",
      installDate: "2024-11-22",
      lastMaintenanceDate: "2024-12-22"
    },
    {
      id: "c29",
      shipId: "s10",
      name: "Anchor System",
      serialNumber: "AN-5555",
      installDate: "2024-12-15",
      lastMaintenanceDate: "2025-01-15"
    },
    {
      id: "c30",
      shipId: "s10",
      name: "Lifeboat System",
      serialNumber: "LB-6666",
      installDate: "2025-01-25",
      lastMaintenanceDate: "2025-02-25"
    }
  ],
  jobs: [
    {
      id: "j1",
      componentId: "c1",
      shipId: "s1",
      type: "Inspection",
      priority: "High",
      status: "In Progress",
      assignedEngineerId: "3",
      scheduledDate: "2024-11-15",
      completedDate: null
    },
    {
      id: "j2",
      componentId: "c1",
      shipId: "s1",
      type: "Maintenance",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "4",
      scheduledDate: "2024-12-10",
      completedDate: "2024-12-12"
    },
    {
      id: "j3",
      componentId: "c2",
      shipId: "s1",
      type: "Inspection",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "5",
      scheduledDate: "2025-01-05",
      completedDate: "2025-01-07"
    },
    {
      id: "j4",
      componentId: "c2",
      shipId: "s1",
      type: "Maintenance",
      priority: "Low",
      status: "In Progress",
      assignedEngineerId: "6",
      scheduledDate: "2025-01-15",
      completedDate: null
    },
    {
      id: "j5",
      componentId: "c3",
      shipId: "s1",
      type: "Inspection",
      priority: "High",
      status: "Completed",
      assignedEngineerId: "10",
      scheduledDate: "2025-02-10",
      completedDate: "2025-02-12"
    },
    {
      id: "j6",
      componentId: "c3",
      shipId: "s1",
      type: "Repair",
      priority: "Medium",
      status: "Open",
      assignedEngineerId: "11",
      scheduledDate: "2025-02-20",
      completedDate: null
    },
    {
      id: "j7",
      componentId: "c4",
      shipId: "s2",
      type: "Inspection",
      priority: "High",
      status: "Completed",
      assignedEngineerId: "3",
      scheduledDate: "2024-11-20",
      completedDate: "2024-11-22"
    },
    {
      id: "j8",
      componentId: "c4",
      shipId: "s2",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "4",
      scheduledDate: "2024-12-15",
      completedDate: null
    },
    {
      id: "j9",
      componentId: "c5",
      shipId: "s2",
      type: "Inspection",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "5",
      scheduledDate: "2025-01-10",
      completedDate: "2025-01-12"
    },
    {
      id: "j10",
      componentId: "c5",
      shipId: "s2",
      type: "Repair",
      priority: "High",
      status: "Open",
      assignedEngineerId: "6",
      scheduledDate: "2025-01-20",
      completedDate: null
    },
    {
      id: "j11",
      componentId: "c6",
      shipId: "s2",
      type: "Inspection",
      priority: "Low",
      status: "Completed",
      assignedEngineerId: "10",
      scheduledDate: "2025-02-15",
      completedDate: "2025-02-17"
    },
    {
      id: "j12",
      componentId: "c6",
      shipId: "s2",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "11",
      scheduledDate: "2025-02-25",
      completedDate: null
    },
    {
      id: "j13",
      componentId: "c7",
      shipId: "s3",
      type: "Inspection",
      priority: "High",
      status: "Completed",
      assignedEngineerId: "3",
      scheduledDate: "2024-12-01",
      completedDate: "2024-12-03"
    },
    {
      id: "j14",
      componentId: "c7",
      shipId: "s3",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "4",
      scheduledDate: "2025-01-10",
      completedDate: null
    },
    {
      id: "j15",
      componentId: "c8",
      shipId: "s3",
      type: "Inspection",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "5",
      scheduledDate: "2025-02-15",
      completedDate: "2025-02-17"
    },
    {
      id: "j16",
      componentId: "c8",
      shipId: "s3",
      type: "Repair",
      priority: "High",
      status: "Open",
      assignedEngineerId: "6",
      scheduledDate: "2025-02-25",
      completedDate: null
    },
    {
      id: "j17",
      componentId: "c9",
      shipId: "s3",
      type: "Inspection",
      priority: "Low",
      status: "Completed",
      assignedEngineerId: "10",
      scheduledDate: "2025-03-10",
      completedDate: "2025-03-12"
    },
    {
      id: "j18",
      componentId: "c9",
      shipId: "s3",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "11",
      scheduledDate: "2025-03-20",
      completedDate: null
    },
    {
      id: "j19",
      componentId: "c10",
      shipId: "s4",
      type: "Inspection",
      priority: "High",
      status: "Completed",
      assignedEngineerId: "3",
      scheduledDate: "2024-11-25",
      completedDate: "2024-11-27"
    },
    {
      id: "j20",
      componentId: "c10",
      shipId: "s4",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "4",
      scheduledDate: "2024-12-20",
      completedDate: null
    },
    {
      id: "j21",
      componentId: "c11",
      shipId: "s4",
      type: "Inspection",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "5",
      scheduledDate: "2025-01-15",
      completedDate: "2025-01-17"
    },
    {
      id: "j22",
      componentId: "c11",
      shipId: "s4",
      type: "Repair",
      priority: "High",
      status: "Open",
      assignedEngineerId: "6",
      scheduledDate: "2025-01-25",
      completedDate: null
    },
    {
      id: "j23",
      componentId: "c12",
      shipId: "s4",
      type: "Inspection",
      priority: "Low",
      status: "Completed",
      assignedEngineerId: "10",
      scheduledDate: "2025-02-10",
      completedDate: "2025-02-12"
    },
    {
      id: "j24",
      componentId: "c12",
      shipId: "s4",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "11",
      scheduledDate: "2025-02-20",
      completedDate: null
    },
    {
      id: "j25",
      componentId: "c13",
      shipId: "s5",
      type: "Inspection",
      priority: "High",
      status: "Completed",
      assignedEngineerId: "3",
      scheduledDate: "2024-12-10",
      completedDate: "2024-12-12"
    },
    {
      id: "j26",
      componentId: "c13",
      shipId: "s5",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "4",
      scheduledDate: "2024-01-10",
      completedDate: null
    },
    {
      id: "j27",
      componentId: "c14",
      shipId: "s5",
      type: "Inspection",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "5",
      scheduledDate: "2024-02-15",
      completedDate: "2024-02-17"
    },
    {
      id: "j28",
      componentId: "c14",
      shipId: "s5",
      type: "Repair",
      priority: "High",
      status: "Open",
      assignedEngineerId: "6",
      scheduledDate: "2024-02-25",
      completedDate: null
    },
    {
      id: "j29",
      componentId: "c15",
      shipId: "s5",
      type: "Inspection",
      priority: "Low",
      status: "Completed",
      assignedEngineerId: "10",
      scheduledDate: "2024-03-10",
      completedDate: "2024-03-12"
    },
    {
      id: "j30",
      componentId: "c15",
      shipId: "s5",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "11",
      scheduledDate: "2024-03-20",
      completedDate: null
    },
    {
      id: "j31",
      componentId: "c16",
      shipId: "s6",
      type: "Inspection",
      priority: "High",
      status: "Completed",
      assignedEngineerId: "3",
      scheduledDate: "2023-11-15",
      completedDate: "2023-11-17"
    },
    {
      id: "j32",
      componentId: "c16",
      shipId: "s6",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "4",
      scheduledDate: "2023-12-10",
      completedDate: null
    },
    {
      id: "j33",
      componentId: "c17",
      shipId: "s6",
      type: "Inspection",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "5",
      scheduledDate: "2024-01-05",
      completedDate: "2024-01-07"
    },
    {
      id: "j34",
      componentId: "c17",
      shipId: "s6",
      type: "Repair",
      priority: "High",
      status: "Open",
      assignedEngineerId: "6",
      scheduledDate: "2024-01-15",
      completedDate: null
    },
    {
      id: "j35",
      componentId: "c18",
      shipId: "s6",
      type: "Inspection",
      priority: "Low",
      status: "Completed",
      assignedEngineerId: "10",
      scheduledDate: "2024-02-10",
      completedDate: "2024-02-12"
    },
    {
      id: "j36",
      componentId: "c18",
      shipId: "s6",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "11",
      scheduledDate: "2024-02-20",
      completedDate: null
    },
    {
      id: "j37",
      componentId: "c19",
      shipId: "s7",
      type: "Inspection",
      priority: "High",
      status: "Completed",
      assignedEngineerId: "3",
      scheduledDate: "2023-12-05",
      completedDate: "2023-12-07"
    },
    {
      id: "j38",
      componentId: "c19",
      shipId: "s7",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "4",
      scheduledDate: "2024-01-10",
      completedDate: null
    },
    {
      id: "j39",
      componentId: "c20",
      shipId: "s7",
      type: "Inspection",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "5",
      scheduledDate: "2024-02-15",
      completedDate: "2024-02-17"
    },
    {
      id: "j40",
      componentId: "c20",
      shipId: "s7",
      type: "Repair",
      priority: "High",
      status: "Open",
      assignedEngineerId: "6",
      scheduledDate: "2024-02-25",
      completedDate: null
    },
    {
      id: "j41",
      componentId: "c21",
      shipId: "s7",
      type: "Inspection",
      priority: "Low",
      status: "Completed",
      assignedEngineerId: "10",
      scheduledDate: "2024-03-10",
      completedDate: "2024-03-12"
    },
    {
      id: "j42",
      componentId: "c21",
      shipId: "s7",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "11",
      scheduledDate: "2024-03-20",
      completedDate: null
    },
    {
      id: "j43",
      componentId: "c22",
      shipId: "s8",
      type: "Inspection",
      priority: "High",
      status: "Completed",
      assignedEngineerId: "3",
      scheduledDate: "2023-11-18",
      completedDate: "2023-11-20"
    },
    {
      id: "j44",
      componentId: "c22",
      shipId: "s8",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "4",
      scheduledDate: "2023-12-18",
      completedDate: null
    },
    {
      id: "j45",
      componentId: "c23",
      shipId: "s8",
      type: "Inspection",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "5",
      scheduledDate: "2024-01-28",
      completedDate: "2024-01-30"
    },
    {
      id: "j46",
      componentId: "c23",
      shipId: "s8",
      type: "Repair",
      priority: "High",
      status: "Open",
      assignedEngineerId: "6",
      scheduledDate: "2024-02-05",
      completedDate: null
    },
    {
      id: "j47",
      componentId: "c24",
      shipId: "s8",
      type: "Inspection",
      priority: "Low",
      status: "Completed",
      assignedEngineerId: "10",
      scheduledDate: "2024-02-12",
      completedDate: "2024-02-14"
    },
    {
      id: "j48",
      componentId: "c24",
      shipId: "s8",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "11",
      scheduledDate: "2024-02-22",
      completedDate: null
    },
    {
      id: "j49",
      componentId: "c25",
      shipId: "s9",
      type: "Inspection",
      priority: "High",
      status: "Completed",
      assignedEngineerId: "3",
      scheduledDate: "2023-12-20",
      completedDate: "2023-12-22"
    },
    {
      id: "j50",
      componentId: "c25",
      shipId: "s9",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "4",
      scheduledDate: "2024-01-20",
      completedDate: null
    },
    {
      id: "j51",
      componentId: "c26",
      shipId: "s9",
      type: "Inspection",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "5",
      scheduledDate: "2024-02-25",
      completedDate: "2024-02-27"
    },
    {
      id: "j52",
      componentId: "c26",
      shipId: "s9",
      type: "Repair",
      priority: "High",
      status: "Open",
      assignedEngineerId: "6",
      scheduledDate: "2024-03-05",
      completedDate: null
    },
    {
      id: "j53",
      componentId: "c27",
      shipId: "s9",
      type: "Inspection",
      priority: "Low",
      status: "Completed",
      assignedEngineerId: "10",
      scheduledDate: "2024-03-10",
      completedDate: "2024-03-12"
    },
    {
      id: "j54",
      componentId: "c27",
      shipId: "s9",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "11",
      scheduledDate: "2024-03-20",
      completedDate: null
    },
    {
      id: "j55",
      componentId: "c28",
      shipId: "s10",
      type: "Inspection",
      priority: "High",
      status: "Completed",
      assignedEngineerId: "3",
      scheduledDate: "2023-11-22",
      completedDate: "2023-11-24"
    },
    {
      id: "j56",
      componentId: "c28",
      shipId: "s10",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "4",
      scheduledDate: "2023-12-22",
      completedDate: null
    },
    {
      id: "j57",
      componentId: "c29",
      shipId: "s10",
      type: "Inspection",
      priority: "Medium",
      status: "Completed",
      assignedEngineerId: "5",
      scheduledDate: "2024-01-15",
      completedDate: "2024-01-17"
    },
    {
      id: "j58",
      componentId: "c29",
      shipId: "s10",
      type: "Repair",
      priority: "High",
      status: "Open",
      assignedEngineerId: "6",
      scheduledDate: "2024-01-25",
      completedDate: null
    },
    {
      id: "j59",
      componentId: "c30",
      shipId: "s10",
      type: "Inspection",
      priority: "Low",
      status: "Completed",
      assignedEngineerId: "10",
      scheduledDate: "2024-02-25",
      completedDate: "2024-02-27"
    },
    {
      id: "j60",
      componentId: "c30",
      shipId: "s10",
      type: "Maintenance",
      priority: "Medium",
      status: "In Progress",
      assignedEngineerId: "11",
      scheduledDate: "2024-03-05",
      completedDate: null
    }
  ]
}; 