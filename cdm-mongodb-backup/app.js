const { spawn } = require("child_process");
const path = require("path");
const cron = require("node-cron");
const { MongoClient } = require("mongodb");

const DB_NAME = "test";
const ARCHIVE_PATH = path.join(__dirname, "mongodbbackup", `${DB_NAME}.gzip`);
const MONGO_URI =
  "mongodb+srv://21522343:hoangminhdeptrai@cluster0.06mhzjg.mongodb.net/";

// Backup schedule: every 5 seconds
const BACKUP_INTERVAL = "*/5 * * * * *";

// Monitoring schedule: every 10 seconds
const CHECK_INTERVAL = "*/10 * * * * *";

// Schedule the backup job
cron.schedule(BACKUP_INTERVAL, () => backupMongoDB());

// Schedule the monitoring job
cron.schedule(CHECK_INTERVAL, () => monitorDatabase());

async function backupMongoDB() {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();

    const adminDb = client.db().admin();
    const listDatabases = await adminDb.listDatabases();

    const dbExists = listDatabases.databases.some((db) => db.name === DB_NAME);
    if (!dbExists) {
      console.log(`Database ${DB_NAME} not found. Skipping backup.`);
    } else {
      const child = spawn("mongodump", [
        `--uri=${MONGO_URI}`,
        `--db=${DB_NAME}`,
        `--archive=${ARCHIVE_PATH}`,
        "--gzip",
      ]);

      child.stdout.on("data", (data) => {
        console.log("Backup stdout:\n", data);
      });
      child.stderr.on("data", (data) => {
        console.log("Backup stderr:\n", Buffer.from(data).toString());
      });
      child.on("error", (error) => {
        console.log("Backup error:\n", error);
      });
      child.on("exit", (code, signal) => {
        if (code) console.log("Backup process exit with code:", code);
        else if (signal)
          console.log("Backup process killed with signal:", signal);
        else console.log("Backup is successful ✅");
      });
    }

    await client.close();
  } catch (error) {
    console.error("Error during backup process:", error);
  }
}

async function monitorDatabase() {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();

    const adminDb = client.db().admin();
    const listDatabases = await adminDb.listDatabases();

    const dbExists = listDatabases.databases.some((db) => db.name === DB_NAME);
    if (!dbExists) {
      console.log(`Database ${DB_NAME} not found, triggering restore.`);
      restoreMongoDB();
    } else {
      console.log(`Database ${DB_NAME} is present.`);
    }

    await client.close();
  } catch (error) {
    console.error("Error checking database status:", error);
    restoreMongoDB(); // Trigger restore in case of an error (e.g., connection issues)
  }
}

function restoreMongoDB() {
  const child = spawn("mongorestore", [
    `--uri=${MONGO_URI}`,
    `--archive=${ARCHIVE_PATH}`,
    "--gzip",
    `--nsInclude=${DB_NAME}.*`,
  ]);

  child.stdout.on("data", (data) => {
    console.log("Restore stdout:\n", data);
  });
  child.stderr.on("data", (data) => {
    console.log("Restore stderr:\n", Buffer.from(data).toString());
  });
  child.on("error", (error) => {
    console.log("Restore error:\n", error);
  });
  child.on("exit", (code, signal) => {
    if (code) console.log("Restore process exit with code:", code);
    else if (signal) console.log("Restore process killed with signal:", signal);
    else console.log("Restore is successful ✅");
  });
}
