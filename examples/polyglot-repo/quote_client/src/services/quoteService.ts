export const getQuote = async (server: string) => {
  const resp = await fetch(server)
  const text = await resp.text()
  return text
}
