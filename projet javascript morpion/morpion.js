
        (function() {

            // Récupération des cases à clicker
            const items = document.getElementsByClassName('grid-item');
            console.log(items);

            function choiseCase(id) {

            }

            // Vide le contenu de toute les cases
            function rest() {
                for (var i = 0; i < items.length; i++) {
                    console.log(items[i]);
                    items[i].textContent = ''
                }
            }
        })();
