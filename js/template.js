// insert navbar and footer

let nav = document.createElement('div');
nav.innerHTML = `<ul class="nav nav-tabs">
    <li role="presentation"><a href="../index.html">Home</a></li>
    <li role="presentation" id="robotGrid-nav">
    <a href="../robotGrid/index.html">Robot Navigation</a>
    </li>
    <li role="presentation" id="GOL-nav">
    <a href="../GOL/index.html">Game of Life</a>
    </li>
    <li role="presentation" id="spaceInvaders-nav">
    <a href="../spaceInvaders/index.html">Space Invaders</a>
    </li>
    <li role="presentation" id="wordplay-nav">
    <a href="../wordplay/index.html">Wordplay</a>
    </li>
    </ul>`;

let footer = document.createElement('div');
footer.innerHTML = `<footer class="footer">
    <div class="container col-xs-12">
    <span class="text-muted">Gabrielle Singh Cadieux, 2017.</span>
    </div>
    </footer>`;

document.body.insertBefore(footer, document.body.firstChild);
document.body.insertBefore(nav, footer);