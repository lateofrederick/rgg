import fs from 'fs';
import path from 'path';


// this method returns the current name of the base folder
export function baseDirectoryName() {
    return path.basename(process.cwd());
}

// this method checks whether a directory exists
export function directoryExists(filePath) {
    return fs.existsSync(filePath);
}