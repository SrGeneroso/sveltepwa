import puppeteer from 'puppeteer'
import { spawn } from 'child_process'


let viteProcess

// Function to start Vite server
function startViteServer() {
  viteProcess = spawn('npm', ['run', 'dev']) // Replace with your Vite start command

  viteProcess.stdout.on('data', (data) => {
    const output = data.toString()
    console.log(output) // Log Vite output to the console

    // Extract port number from the Vite server output
    const portMatch = output.match(/Local:\s+http:\/\/localhost:(\d+)/)
    if (portMatch) {
      const port = portMatch[1]
      console.log(`Vite server running on port ${port}`)
      runPuppeteerScript(port)
    }
  })

  // Listen for exit event of the child process
  viteProcess.on('exit', (code, signal) => {
    console.log(
      `Vite server process exited with code ${code} and signal ${signal}`
    )
  })
}

async function runPuppeteerScript(port) {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()

  //Set browser to dark mode
  await page.emulateMediaFeatures([
    {
      name: 'prefers-color-scheme',
      value: 'dark'
    }
  ])

  // Navigate to the URL served by Vite
  await page.goto(`http://localhost:${port}`)

  // Take a screenshot or perform interactions with the page
  await page.setViewport({ width: 1920, height: 1080 })
  await page.screenshot({ path: 'public/screenshot1.png' })

  await page.setViewport({ width: 1080, height: 1920 })
  await page.screenshot({ path: 'public/screenshot2.png' })

  // Close Puppeteer and terminate the spawned process
  await browser.close()
  console.log('-- Screenshots Ready --')
  if (viteProcess) {
    console.log('Killing Vite Now')
    viteProcess.kill('SIGINT') // Send SIGINT signal to terminate Vite server
  }
}

// Start the Vite server
startViteServer()
