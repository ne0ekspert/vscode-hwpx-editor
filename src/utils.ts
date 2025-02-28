import { useLogger } from 'reactive-vscode'
import { displayName } from './generated/meta'
import { unzipSync } from 'fflate';

export function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

export async function unzipToMemory(zipData: Uint8Array) {
	// Unzip the file in memory
	const decompressed = unzipSync(new Uint8Array(zipData));
  
	// Convert to string (if files are text-based)
	const files: {[key: string]: Uint8Array} = {};
	for (const [filename, content] of Object.entries(decompressed)) {
	  files[filename] = content // Convert Uint8Array to string
	}
  
	return files; // { "file1.txt": "content", "image.png": Uint8Array([...]) }
  }

export const logger = useLogger(displayName)
