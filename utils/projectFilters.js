export function getLinkByName (links, nameRegex) {
  const regex = new RegExp(nameRegex, 'i')
  return links.filter(link => regex.test(link?.name))
}
