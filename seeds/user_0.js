/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {'id': 1, 'score': 0,'availableCardsIds':'[1,2]','cards_titles_list':'{}'}
   
  ]);
};
