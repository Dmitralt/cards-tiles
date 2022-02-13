export function up(knex) {
  return knex.schema.createTable('cards', table => {
    // todo: cards table schema
    table.increments('id')
    table.specificType('weight', 'double precision').unsigned().notNullable().defaultTo(0)
    table.json('tiles').notNullable()
   

  })
 
 // knex('cards').insert({'weight':'3','tiles':'[{"weight": 0.792,"score":0}]'})
}

export function down(knex) {
  return knex.schema.dropTable('cards')
}


