let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#18596b">Desarrollo sitios web y me gustan los gatos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
