document.write(
  `
    <nav class="navbar navbar-expand-lg navbar-light py-3" id="navTop">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="./assets/img/logo.svg" width="60" height="60" class="logo logo-front"lt="Easy profit">
                    <img src="./assets/img/logoflip.svg" height="60" class="logo logo-back"lt="Easy profit">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav d-lg-none">
                        <li class="nav-item${page == "home" ? " active" : ""}">
                            <a class="nav-link" href="./index.html">Home</a>
                        </li>
                        <li class="nav-item dropdown${
                          page == "instructions" ? " active" : ""
                        }">
                            <!-- <a class="nav-link" href="#">Instructions</a> -->
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Instructions
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="./how-to-play.html">How to Play</a>
                                <a class="dropdown-item" href="./gameboard-legends.html">Gameboard Legends</a>
                                <a class="dropdown-item" href="./region.html">Region</a>
                                <a class="dropdown-item" href="./game-cards.html">Game Cards</a>
                                <a class="dropdown-item" href="./glossary.html">Glossary</a>
                            </div>
                        </li>
                        <li class="nav-item${
                          page == "whereToBuy" ? " active" : ""
                        }">
                            <a class="nav-link" href="./where-to-buy.html">Where to buy?</a>
                        </li>
                        
                        <li class="nav-item${
                          page == "contact" ? " active" : ""
                        }">
                            <a class="nav-link" href="./contact.html">Contact</a>
                        </li>
                        <li class="nav-item${page == "mission" ? " active" : ""}">
                            <a class="nav-link" href="./mission.html">Mission</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#" data-toggle="modal" data-target=".game-suplies-modal">Buy Game Supplies for the Event</a>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-toggle="modal" data-target=".host-event-modal">Host A Event</a>
                        </li>

                        <li class="nav-item">
                            <a href="./how-to-play.html" class="btn btn-outline-primary mr-4">Play Now</a>
                        </li>


                        <li class="nav-item">
                            <a class="btn btn-buy shadow" href="./buy.html">Buy now</a>
                        </li>
                    </ul>
                </div>
            </div>
        
        </nav>      
  `
);