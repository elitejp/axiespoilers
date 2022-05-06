chamarAPI().then(data => {
      console.log(data);
      abilitiesObjCreate(data.abilities);
      cardsObjCreate(data.cards);
      charmsObjCreate(data.charms);
      cursesObjCreate(data.curseCards);
      runesObjCreate(data.runes);
      toolsObjCreate(data.toolCards);
})

const abilitiesObjCreate = (data) => {
      const abilitiesObj = data;
      console.log(abilitiesObj);
}

let cardsObj;
const cardsObjCreate = (data) => {
      cardsObj = data;

      cardsObj.forEach(card => {
            switch (card.partType) {
                  case 'back' :
                        card.cardImage = `assets/img/back/${card.cardName.replace(/ /g, '')}.PNG`
                        break;
                  case 'ears' :
                        card.cardImage = `assets/img/ears/${card.cardName.replace(/ /g, '')}.PNG`
                        break;
                  case 'eyes' :
                        card.cardImage = `assets/img/eye/${card.cardName.replace(/ /g, '')}.PNG`
                        break;
                  case 'horn' :
                        card.cardImage = `assets/img/horn/${card.cardName.replace(/ /g, '')}.PNG`
                        break;
                  case 'mouth' :
                        card.cardImage = `assets/img/mouth/${card.cardName.replace(/ /g, '')}.PNG`
                        break;
                  case 'tail' :
                        card.cardImage = `assets/img/tail/${card.cardName.replace(/ /g, '')}.PNG`
                        break;
            }
      });
      traduzirCards(cardsObj);
      console.log(cardsObj);
      createCards(cardsObj);
}

const charmsObjCreate = (data) => {
      const charmsObj = data;
      console.log(charmsObj);
}

const cursesObjCreate = (data) => {
      const cursesObj = data;
      console.log(cursesObj);
}

const runesObjCreate = (data) => {
      const runesObj = data;
      console.log(runesObj);
}

const toolsObjCreate = (data) => {
      const toolsObj = data;
      console.log(toolsObj);
}

function traduzirCards(data) {
      data.forEach(card => {
            switch(card.cardName) {
                  case "Anemone":
                        card.cardText = "Quando essa carta é comprada, cure 20 HP.";
                        break;
                  case "Baby":
                        card.cardText = "Ataques tem 33 bonus de dano se o HP estiver acima de 66%."
                        break;
                  case "Babylonia":
                        card.cardText = "Aplique {Fraqueza} por 4 turnos."
                        break;
                  case "Blue Moon":
                        card.cardText = "Compre 1 carta."
                        break;
                  case "Bubblemaker":
                        card.cardText = "Mire em um aliado. O alvo ganha 2 {Bolhas}."
                        break;
                  case "Catfish":
                        card.cardText = "Cure o HP igual a 50% do dano não bloqueado."
                        break;
                  case "Clamshell":
                        card.cardText = "Ganha 4 {Aumento de dano} se esse ataque causar perda de HP no alvo.";
                        break;
                  case "Clear":
                        card.cardText = "Discarte até 2 cartas e depois compre essa mesma quantidade. <Banir>";
                        break;
                  case "Gero":
                        card.cardText = "Aplica {Frágil} por 4 turnos.";
                        break;
                  case "Gill":
                        card.cardText = "Seu time ganha 1 {Bolha}.";
                        break;
                  case "Goldfish":
                        card.cardText = "Se <Inicial>, compre uma carta.";
                        break;
                  case "Hermit":
                        card.cardText = "Mire em um aliado. Nega 1 proximo ataque no aliado alvo.";
                        break;
                  case "Inkling":
                        card.cardText = "Embaralhe 1 [Azar] na pilha de descarte do seu oponente.";
                        break;
                  case "Jellytacle":
                        card.cardText = "Se <Inicial>, recupere 15 de HP.";
                        break;
                  case "Koi":
                        card.cardText = "Cause 15 de dano bonus por aliado Aquatico.";
                        break;
                  case "Lam":
                        card.cardText = "Cause 20 de dano bonus se o HP desse Axie estiver acima de 75%.";
                        break;
                  case "Little Crab":
                        card.cardText = "<Etereo>.";
                        break;
                  case "Navaga":
                        card.cardText = "Se <Inicial>, cause 15 de dano bonus.";
                        break;
                  case "Nimo":
                        if (card.partType === "tail") {
                              card.cardText = "Ganhe 1 energia. <Banir>";
                              break;
                        }
                  case "Nimo":
                        if (card.partType === "ears") {
                              card.cardText = "Ganhe 1 energia se o HP desse Axie estiver cheio";
                              break;
                        }
                  case "Oranda":
                        card.cardText = "<Dissipar> até 2 buffs no alvo.";
                        break;
                  case "Perch":
                        card.cardText = "Cause 4 golpes. Prioriza o alvo com o menor HP";
                        break;
                  case "Piranha":
                        card.cardText = "Aplica {Sangrar} por 4 turnos.";
                        break;
                  case "Puff":
                        if (card.class === "Aquatic") {
                              card.cardText = "<Reter>. Cause X ataques aleatoriamente.";
                              break;
                        }
                  case "Ranchu":
                        card.cardText = "Ataque todos os inimigos. Aplique {Fraqueza} por 2 turnos.";
                        break;
                  case "Risky Fish":
                        card.cardText = "Aplique {Fraqueza} para esse Axie por 2 turnos.";
                        break;
                  case "Seaslug":
                        card.cardText = "<Limpar> 2 debuffs. Ganhe 2 {Limpador}";
                        break;
                  case "Shoal Star":
                        card.cardText = "Se o alvo tiver menos de 120 de HP, mate ele instantaneamente.";
                        break;
                  case "Shrimp":
                        card.cardText = "Se <Inicial>, esse ataque ataca o alvo mais longe.";
                        break;
                  case "Sleepless":
                        card.cardText = "Embaralhe 1 [Atordoar] na pilha de descarte do seu oponente.";
                        break;
                  case "Sponge":
                        card.cardText = "Mire em um aliado. No proximo turno, aplique 5 {Aumento de dano} contra alvos com escudo, se o escudo for quebrado";
                        break;
                  case "Tadpole":
                        card.cardText = "Embaralhe 1 [Azar] na pilha de discarte do seu oponente.";
                        break;
                  case "Teal Shell":
                        card.cardText = "O aliado alvo ganha 20 de escudo para cada carta jogada nesse turno.";
                        break;
                  case "Telescope":
                        card.cardText = "Coloque 1 carta Aquatica da sua pilha de compra na sua mão. <Banir>";
                        break;
                  case "Tiny Fan":
                        card.cardText = "Compre 1 carta. Ganhe 3 {Aumento de dano}.";
                        break;
                  case "Arco":
                        card.cardText = "Esse ataque não ativa segredos.";
                        break;
                  case "Axie Kiss":
                        card.cardText = "Mire em um inimigo. Aplique {Marca de morte} por 4 turnos, se o HP desse Axie estiver abaixo de 50%.";
                        break;
                  case "Belieber":
                        card.cardText = "Aleatoriamente cause 3 golpes. Ganhe 1 de {Raiva} por golpe do inimigo.";
                        break;
                  case "Buba Brush":
                        card.cardText = "Ganhe 2 de {Raiva}.";
                        break;
                  case "Chubby":
                        card.cardText = "Ataque todos os inimigos.";
                        break;
                  case "Confident":
                        card.cardText = "Mire em um aliado. <Limpar> 1 debuff e conceda 2 de {Raiva}.";
                        break;
                  case "Cottontail":
                        card.cardText = "Cure um aliado. Ganhe 1 de energia. <Banir>";
                        break;
                  case "Cub":
                        card.cardText = "Se <Inicial>, compre 1 carta de Skill/Secret.";
                        break;
                  case "Dual Blade":
                        card.cardText = "Aplique {Frágil} por 4 turnos.";
                        break;
                  case "Foxy":
                        if (card.partType === "ears") {
                              card.cardText = "Mira no inimigo mais longe.";
                              break;
                        }
                  case "Foxy":
                        if (card.partType === "mouth") {
                              card.cardText = "<Reter>. Ganha 1 de {Raiva}. Se reteve, +1 de {Raiva} quando jogada. (Max: 3 rodadas).";
                              break;
                        }
                  case "Furball":
                        card.cardText = "Cause 2 golpes.";
                        break;
                  case "Gerbil":
                        card.cardText = "Se <Inicial>, esse ataque mira no segundo inimigo mais perto.";
                        break;
                  case "Goda":
                        card.cardText = "Embaralhe 1 [Vazio] na pilha de descarte do seu oponente. <Banir>";
                        break;
                  case "Hare":
                        card.cardText = "Se <Inicial>, compre 1 carta.";
                        break;
                  case "Hero":
                        card.cardText = "Compre 1 carta.";
                        break;
                  case "Imp":
                        card.cardText = "Custa 0 de energia na forma de {Furia}.";
                        break;
                  case "Innocent Lamb":
                        card.cardText = "<Inato>. Selecione e adicione 1 copia de uma carta Skill desse Axie em sua mão. <Banir>";
                        break;
                  case "Jaguar":
                        card.cardText = "Aplique {Sangrar} por 4 turnos.";
                        break;
                  case "Little Branch":
                        card.cardText = "Ganhe 1 de {Raiva} por aliado vivo. (Incluindo invocados).";
                        break;
                  case "Little Peas":
                        card.cardText = "Aplica {Vulneravel} por 4 turnos.";
                        break;
                  case "Merry":
                        card.cardText = "Mire em um aliado.";
                        break;
                  case "Nut Cracker":
                        card.cardText = "Todas cartas de Nut Cracker desse Axie ganha 6 de dano nessa batalha.";
                        break;
                  case "Nyan":
                        card.cardText = "Cause 15 de dano bonus contra inimigos sangrando.";
                        break;
                  case "Pocky":
                        card.cardText = "Ataque um inimigo aleatorio. Aplique {Provocar} por 2 turnos.";
                        break;
                  case "Puff":
                        if (card.class === "Beast") {
                              card.cardText = "Cure o HP igual a 50% do dano não bloqueado.";
                              break;
                        }
                  case "Puppy":
                        if (card.partType === "ears") {
                              card.cardText = "Cure seu time. Se <Inicial>, remove 1 carta de maldição do seu deck.";
                              break;
                        }
                  case "Puppy":
                        if (card.partType === "eyes") {
                              card.cardText = "Coloque 1 carta de Besta da sua pilha de discarte na sua mão. <Banir>";
                              break;
                        }
                  case "Rice":
                        card.cardText = "{Roube} 40 de HP. Ganha 1 de energia se esse Axies estiver com o HP cheio. <Banir>";
                        break;
                  case "Risky Beast":
                        card.cardText = "Aplique {Fraqueza} nesse Axie por 2 turnos.";
                        break;
                  case "Ronin":
                        card.cardText = "Cause 50% mais dano por energia gasta nesse turno.";
                        break;
                  case "Shiba":
                        card.cardText = "Seu time ganha 3 de {Raiva} se o HP desse Axie estiver abaixo de 50%.";
                        break;
                  case "Sparky":
                        card.cardText = "Ganhe 4 de {Raiva}.";
                        break;
                  case "Timber":
                        card.cardText = "Mire em um aliado. No proximo turno, depois de um aliado ser atacado, adicione 1 [Lumber Shield] na sua mão.";
                        break;
                  case "Zeal":
                        card.cardText = "Coloque 1 carta de Besta da sua pilha de descarte na sua mão. <Banir>";
                        break;
                  case "Zen":
                        card.cardText = "Se <Inicial>, esse Axie {Medita}.";
                        break;
                  case "Balloon":
                        card.cardText = "Aplique {Medo} por 4 turnos.";
                        break;
                  case "Cloud":
                        card.cardText = "Esse ataque mira o inimigo mais perto que não seja uma invocação.";
                        break;
                  case "Cuckoo":
                        card.cardText = "Mire em um aliado. Remova {Dormir}. O proximo ataque do alvo causa 50 mais dano esse turno.";
                        break;
                  case "Cupid":
                        card.cardText = "Aplique {Sangrar} por 4 turnos.";
                        break;
                  case "Curly":
                        card.cardText = "Cause 25% mais dano ao escudo.";
                        break;
                  case "Doubletalk":
                        card.cardText = "Se <Inicial>, aplique {Dormir} por 4 turnos.";
                        break;
                  case "Early Bird":
                        card.cardText = "Se <Inicial>, compre 1 carta.";
                        break;
                  case "Eggshell":
                        card.cardText = "Aplique {Provocar} nesse Axie por 2 turnos.";
                        break;
                  case "Feather Fan":
                        card.cardText = "Cause 4 golpes aleatoriamente. Seu time ganha 1 {Pena} por inimigo golpeado.";
                        break;
                  case "Feather Spear":
                        card.cardText = "Cause 20 mais dano por carta de Spear usada nesse turno.";
                        break;
                  case "Granma's Fan":
                        card.cardText = "<Inato>. Ataque todos inimigos. Aplique {Vulneravel} por 4 turnos.";
                        break;
                  case "Hungry Bird":
                        card.cardText = "Se <Inicial>, cure 15 de HP.";
                        break;
                  case "Kestrel":
                        card.cardText = "Aplique {Desarme} por 2 turnos.";
                        break;
                  case "Kingfisher":
                        card.cardText = "Mire em um aliado. O proximo ataque contra o alvo é refletido, causando 85 de dano.";
                        break;
                  case "Little Owl":
                        card.cardText = "Todas as cartas Little Owl ganha 6 de dano nessa batalha.";
                        break;
                  case "Lucas":
                        card.cardText = "Coloque 1 carta de Passaro da sua pilha de compra na sua mão. <Banir>";
                        break;
                  case "Mavis":
                        card.cardText = "Invoca 1 <Mavis>.";
                        break;
                  case "Peace Maker":
                        card.cardText = "Aplique {Fraqueza} por 2 turnos. Se o alvo ja tiver {Fraqueza}, cause 15 de dano extra.";
                        break;
                  case "Pigeon Post":
                        card.cardText = "Adicione 1 [Blackmail] na mão do oponente.";
                        break;
                  case "Pink Cheek":
                        card.cardText = "Discarte até 2 cartas, depois compre essa mesma quantidade. <Banir>";
                        break;
                  case "Post Fight":
                        card.cardText = "Esse Axie perde 35 de HP.";
                        break;
                  case "Raven":
                        card.cardText = "Embaralhe 1 [Azar] na pilha de descarte do seu oponente.";
                        break;
                  case "Risky Bird":
                        card.cardText = "Aplique {Fraqueza} nesse Axie por 2 turnos.";
                        break;
                  case "Robin":
                        card.cardText = "Invoque um <Little Robin>.";
                        break;
                  case "Swallow":
                        card.cardText = "Se <Inicial>, cause 15 de dano extra.";
                        break;
                  case "The Last One":
                        card.cardText = "Cause 20 de dano extra se essa for a unica carta em sua mão.";
                        break;
                  case "Tri Feather":
                        card.cardText = "Ataque todos os inimigos.";
                        break;
                  case "Trump":
                        card.cardText = "Cause 20 de dano extra para cada carta de Trump usada nesse turno.";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  case "":
                        card.cardText = "";
                        break;
                  
            }
      });
}