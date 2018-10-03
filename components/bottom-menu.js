document.write(
  `
    <nav class="navbar navbar-light navbar-expand-lg py-4 d-none d-lg-block" id="bottomNav">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavBollom">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item has-submenu${page == 'instructions' ? ' active' : ''}">
                        <a class="nav-link" href="#">Instructions</a>
                        <ul class="sub-menu">
                            <li><a href="./how-to-play.html">How to Play</a></li>
                            <li><a href="./gameboard-legends.html">Gameboard Legends</a></li>
                            <li><a href="./region.html">Region</a></li>
                            <li><a href="./game-cards.html">Game Cards</a></li>
                            <li><a href="./glossary.html">Glossary</a></li>
                        </ul>
                    </li>
                    <li class="nav-item${page == "whereToBuy" ? " active" : ""}">
                        <a class="nav-link" href="./where-to-buy.html">Where to buy?</a>
                    </li>
                    <li class="nav-item${page == "home" ? " active" : ""}">
                        <a class="nav-link" href="./index.html">Home</a>
                    </li>
                    <li class="nav-item${page == "contact" ? " active" : ""}">
                        <a class="nav-link" href="./contact.html">Contact</a>
                    </li>
                    <li class="nav-item${page == "mission" ? " active" : ""}">
                        <a class="nav-link" href="./mission.html">Mission</a>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>

    `
);