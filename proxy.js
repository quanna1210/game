addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  // Parse request URL to get access to query string
  let url = new URL(request.url)
  const imageURL = url.searchParams.get("url")
  const referer = url.searchParams.get("referer")
  let link = decodeURIComponent(imageURL)
  let refer = decodeURIComponent(referer)
  let headers = new Headers({
    "Accept"       : "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Content-Type" : "application/html",
    "User-Agent"   : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36",
    "Referer" : refer
  });
  // Returning fetch() with resizing options will pass through response with the resized image.
  return fetch(link,{
    method  : 'GET', 
    headers : headers
})
}
