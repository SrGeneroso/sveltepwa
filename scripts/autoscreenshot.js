import puppeteer from 'puppeteer'
import { spawn } from 'child_process'

let viteProcess

// Function to start Vite server ** from: https://stackoverflow.com/questions/28070796/node-js-killing-sub-processes-of-childprocessspawn
function startViteServer() {
	viteProcess = spawn('npm', ['run', 'dev'], {
		stdio: ['ignore', 'pipe', 'pipe'],
		detached: true
	})

	viteProcess.stdout.pipe(process.stdout)
	viteProcess.stderr.pipe(process.stderr)

	viteProcess.stdout.on('data', data => {
		const output = data.toString()

		// Extract port number from the Vite server output
		const portMatch = output.match(/Local:\s+http:\/\/localhost:(\d+)/)
		if (portMatch) {
			const port = portMatch[1]
			runPuppeteerScript(port)
		}
	})

	// Listen for exit event of the child process
	viteProcess.on('exit', () => process.exit(0))
}

async function runPuppeteerScript(port) {
	// Set dark or light mode for the screenshots
	const colorScheme = !process.argv.length < 3 && process.argv[2] === 'light' ? 'light' : 'dark'
	//Set Path to save image into
	const path = !process.argv.length < 4 ? process.argv[3] : ''

	const browser = await puppeteer.launch({ headless: 'new' })
	const page = await browser.newPage()

	await page.emulateMediaFeatures([
		{
			name: 'prefers-color-scheme',
			value: colorScheme
		}
	])

	await page.goto(`http://localhost:${port}`)

	await page.setViewport({ width: 1920, height: 1080 })
	await page.screenshot({ path: `${path}/screenshot1.png` })
	await page.setViewport({ width: 1080, height: 1920 })
	await page.screenshot({ path: `${path}/screenshot2.png` })

	// Close Puppeteer and terminate the spawned process
	await browser.close()
	console.log('\n-- Screenshots Ready --\n')
	if (viteProcess) {
		process.kill(-viteProcess.pid)
	}
}

// Start the Vite server
startViteServer()
