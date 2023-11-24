import puppeteer from 'puppeteer'
import { spawn } from 'child_process'

//Spawn node process
const viteProcess = spawn('npm', ['run', 'dev'])

//Check for availability of dev server
viteProcess.stdout.on('data', (data) => {
  const output = data.toString()
  console.log(output) // Log Vite output to the console
  const portMatch = output.match(/Local:\s+http:\/\/localhost:(\d+)/)

  if (portMatch) {
    const port = portMatch[1]
    console.log(`Vite server running on port ${port}`)
    console.log('-- Taking screenshots --')
    runPuppeteerScript(port)
  
    console.log('Screenshots created in public folder')
    process.exit(0)
  }
  // Check if Vite has started by searching for a specific message in the output
  // if (output.includes('use --host to expose')) {
  //   // Vite server is ready, proceed with Puppeteer
  //   console.log('-- Taking screenshots --')
  //   runPuppeteerScript(port)
  //   viteProcess.kill('SIGINT')
  //   console.log('Screenshots created in public folder')
  //   process.exit(0)
  // }
})

//Take the screenshots
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
  // if (viteProcess) {
  //   viteProcess.kill('SIGINT') // Send SIGINT signal to terminate Vite server
  // }
}
