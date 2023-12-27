console.log('HEY')
window.addEventListener('DOMContentLoaded', () => {
  console.log('HEYO')
  const replaceText = (selector: string, text: string) => {
    const element = document.querySelector<HTMLElement>(selector)
    console.log('element', element)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`#${dependency}-version`, process.versions[dependency] || '')
  }
})
