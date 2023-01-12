function transformationLinck(linkWebsite: string) {
  const arr = []
  for (let i = 0; i < linkWebsite.length; i++) {
      if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '2' && linkWebsite[i + 2] == 'C') {
          arr.push(', ')
          i += 2

      } else if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '3' && linkWebsite[i + 2] == 'A') {
          arr.push('.')
          i += 2

      } else if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '5' && linkWebsite[i + 2] == 'B') {
          arr.push('[')
          i += 2

      } else if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '5' && linkWebsite[i + 2] == 'D') {
          arr.push(']')
          i += 2

      } else {
          arr.push(linkWebsite[i])
      }

  }
  return arr.join('')
}


export default transformationLinck;