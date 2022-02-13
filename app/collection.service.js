import dataService from "./data.service.js";
import _ from "lodash";




export default {
  async generateCardsTiles(userId, tilesNumber) {    
    
      let user;
      
      user= await dataService.getUser(userId);
     
      const availableCardsIds = user.availableCardsIds;
      const cardsTiles = await generateCardsTiles(
        tilesNumber,
        availableCardsIds
      );
      console.log("cardsTiles=", cardsTiles);
      let cards_titles_list = user.cards_titles_list;
      let userscore = user.score;
      
      for (let element of cardsTiles) {
        if (cards_titles_list[element.id] == undefined) {
          cards_titles_list[element.id] = [element.index];
          userscore += element.score;
        } else {
          if (!cards_titles_list[element.id].includes(element.index)) {
            cards_titles_list[element.id].push(element.index);
            userscore += element.score;
          } else {
          }
        }
      } 
      console.log("******", JSON.stringify(cards_titles_list), userscore);
      await dataService.updateUser(userId, {
        cards_titles_list: `${JSON.stringify(cards_titles_list)}`,
        score: userscore,
      });
     
      return cardsTiles;
      
    
  },
};

let DB_IS_FREE=true;

async function generateCardsTiles(tilesNumber, cardsIds) {
  const cardsTiles = [];

  let cards = await dataService.getCards(cardsIds);

  for (let i = 0; i < tilesNumber; i++) {
    let random_card = GetRandomCard_number(cards);
    let selectcard = cards.filter((card) => card.id == random_card)[0];
    let tilenumber = GetRandomTiles_number(selectcard.tiles);

    cardsTiles.push({
      id: random_card,
      index: tilenumber,
      score: selectcard.tiles[tilenumber].score,
    });
  }

  return cardsTiles;
}

function GetRandomCard_number(cards) {
  let answer = 0;

  let x = 0;
  cards.map((i) => (x += i.weight));
  x = x * 1000;
  let rand = getRandomIntInclusive(0, x) / 1000;

  let help_weight = 0;
  for (let i in cards) {
    if (rand < help_weight + cards[i].weight) {
      answer = cards[i].id;
      break;
    }

    help_weight += cards[i].weight;
  }

  return answer;
}
function GetRandomTiles_number(tiles) {
  let answer = 0;

  let x = 0;
  tiles.map((i) => (x += i.weight));
  x = x * 1000;
  let rand = getRandomIntInclusive(0, x) / 1000;
  let help_weight = 0;
  for (let i in tiles) {
    if (rand < help_weight + tiles[i].weight) {
      answer = i;
      break;
    }

    help_weight += tiles[i].weight;
  }

  return answer;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***************************************** */

