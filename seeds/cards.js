/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 import { cards } from '../app/settings/cards.js';
 export async function seed (knex) {

  let insertOBJ=[]

  for(let i in cards)
  {
    let card={}
    card.id=i;
    card.weight=cards[i].weight
    card.tiles=JSON.stringify(cards[i].tiles)  

    insertOBJ.push(card)
  }

  // Deletes ALL existing entries
  await knex('cards').del()
  await knex('cards').insert(insertOBJ)

};
