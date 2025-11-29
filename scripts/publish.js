const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectRoot = path.join(__dirname, '..'); // Go up one level from scripts to blog/

function runCommand(command, options = {}) {
  console.log(`Executing: ${command}`);
  try {
    execSync(command, { stdio: 'inherit', cwd: projectRoot, ...options });
  } catch (error) {
    console.error(`Command failed: ${command}`);
    process.exit(1);
  }
}

async function publish() {
  console.log('Starting publish process...');

  // 1. Run build
  console.log('\nBuilding project...');
  runCommand('npm run build');
  console.log('Project built successfully.');

  // 2. Check for changes and commit automatically
  console.log('\nChecking for changes...');
  const statusOutput = execSync('git status --porcelain', { cwd: projectRoot }).toString().trim();

  if (statusOutput) {
    console.log('Changes detected. Staging and committing...');
    runCommand('git add .');
    runCommand('git commit -m "chore: Automated build and deploy"');
    console.log('Changes committed.');
  } else {
    console.log('No changes detected. Skipping commit.');
  }

  // 3. Push to main branch
  console.log('\nPushing to GitHub...');
  runCommand('git push origin main');
  console.log('Pushed to GitHub.');

  // 4. Deploy to Netlify
  console.log('\nDeploying to Netlify...');
  runCommand('netlify deploy --prod --dir=dist');
  console.log('Deployed to Netlify.');

  console.log('\nPublish process completed successfully!');
  console.log('Your site should be deploying on Netlify shortly.');
}

publish();
