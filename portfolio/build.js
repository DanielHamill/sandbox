import { execSync } from 'child_process';

// Generate timestamp in the format YYYYMMDD-HHMMSS
const now = new Date();
const timestamp = now.getFullYear().toString() +
  (now.getMonth() + 1).toString().padStart(2, '0') +
  now.getDate().toString().padStart(2, '0') +
  '-' +
  now.getHours().toString().padStart(2, '0') +
  now.getMinutes().toString().padStart(2, '0') +
  now.getSeconds().toString().padStart(2, '0');

const imageTag = `danielhamill/portfolio:${timestamp}`;
const latestTag = 'danielhamill/portfolio:latest';

console.log(`Building with timestamp: ${timestamp}`);

try {
  // Run TypeScript compilation
  console.log('Running TypeScript compilation...');
  execSync('tsc -b', { stdio: 'inherit' });

  // Run Vite build
  console.log('Running Vite build...');
  execSync('vite build', { stdio: 'inherit' });

  // Build Docker image with timestamp and latest tags
  console.log('Building Docker image...');
  execSync(`docker buildx build --platform linux/amd64 -t ${imageTag} -t ${latestTag} .`, { stdio: 'inherit' });

  // Push timestamped image
  console.log(`Pushing ${imageTag}...`);
  execSync(`docker push ${imageTag}`, { stdio: 'inherit' });

  // Push latest image
  console.log(`Pushing ${latestTag}...`);
  execSync(`docker push ${latestTag}`, { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
