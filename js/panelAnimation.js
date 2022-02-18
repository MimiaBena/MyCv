const panels = document.querySelectorAll('.description_part');
const butt = document.querySelectorAll('.btnSource');

function setStyle() {

    this.style.filter = "none";
    this.classList.add('primary-panel');
    /* butt.forEach(function(btn){
      btn.style.marginTop = "70px";
  });*/

    panels.forEach(panel => backStyle(panel));
}

function backStyle(e) {
    if (!e.classList.contains('primary-panel')) {
        e.style.filter = "contrast(70%)";
    }
}

function removeStyle() {
    this.classList.remove('primary-panel');
}

panels.forEach(panel => panel.addEventListener('mouseover', setStyle));
panels.forEach(panel => panel.addEventListener('mouseout', removeStyle));

