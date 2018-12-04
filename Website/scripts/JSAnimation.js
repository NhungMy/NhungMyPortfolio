  
  /*------------- Animation Home -----------------*/
  
  /*------------- Animation About Me -----------------*/

  var animation = bodymovin.loadAnimation({
  container: document.getElementById('about-me-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'aboutme.json'
})

  // bodymovin.loadAnimation({
  //   container: document.getElementById('about-me-animation'),
  //   path: 'aboutme.json',
  //   renderer: 'svg',
  //   loop: true,
  //   autoplay: true
  // })

  /*------------- Animation Take A Rest -----------------*/
