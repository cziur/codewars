// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// "www.codewars.com#about" --> "www.codewars.com"

function removeUrlAnchor(url){
  let split = url.split('#')
  return split[0]
}