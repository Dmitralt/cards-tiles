export function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.specificType('score', 'smallint').unsigned().notNullable().defaultTo(0)
    table.json('availableCardsIds').notNullable([])
    table.json('cards_titles_list').notNullable([])
    
  })
}

export function down(knex) {
  return knex.schema.dropTable('users')
}

