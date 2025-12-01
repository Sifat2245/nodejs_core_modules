const fs = require("fs");
const path = require("path");

// Define paths for messy (source) and organized (destination) directories
const sourceDir = path.join(__dirname, "output", "messy-files");
const organizedDir = path.join(__dirname, "output", "organized");

// File categories mapped to extensions
const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};

// Files to auto-generate inside messy folder (for demo/testing)
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

// Create messy and organized directories and populate test files
const initializeDirectories = () => {
  // Create messy directory if not exists
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });

    // Create sample files for testing
    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`);
    });
  }

  console.log("messy dir files are created");

  // Create main organized folder
  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
  }

  // Create subfolders for each category
  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizedDir, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });
};

// Detect category based on file extension
const getCategory = (fileName) => {
  const ext = path.extname(fileName).toLowerCase();

  // Loop through categories and check matching extension
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    }
  }

  // If no match, put into "others"
  return "others";
};

// Organize files by copying them into categorized folders
const organizeFiles = () => {
  console.log("file organizer \n");
  console.log("source:", sourceDir);
  console.log("destination", organizedDir);
  console.log("\n" + "-".repeat(50) + "\n");

  const files = fs.readdirSync(sourceDir);

  // No files found — skip operation
  if (files.length === 0) {
    console.log("no files to work on!");
    return;
  }

  console.log(`found ${files.length} file to organize \n`);

  const stats = {
    total: 0,
    byCategory: {},
  };

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath);

    // Ignore directories inside messy folder
    if (stat.isDirectory()) {
      return;
    }

    const category = getCategory(file);
    const destDir = path.join(organizedDir, category);
    const destPath = path.join(destDir, file);

    // Copy file to appropriate category folder
    fs.copyFileSync(sourcePath, destPath);

    // Update statistics
    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

    // Logging
    console.log(`${file}`);
    console.log(`${category}`);
    console.log(`${stat.size}`);
  });
};

// Display help/usage instructions in terminal
const showHelp = () => {
  console.log(`
    file organizer - usage:

    commands:
    init      - create messy directory + test files
    organize  - organize files into categorized folders

    examples:
    node file-organizer init
    node file-organizer organize
  `);
};

// Read command from CLI arguments
const command = process.argv[2];

// Execute based on user input
switch (command) {
  case "init":
    initializeDirectories();
    break;

  case "organize":
    organizeFiles();
    break;

  default:
    showHelp();
    break;
}
