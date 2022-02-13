// import Redis from 'ioredis'
import knex from "./knex/index.js";

// const redis = new Redis(process.env.REDIS_URL)

export default {
  getUser(userId) {
    return knex("users")
      .select("id", "score", "availableCardsIds", "cards_titles_list")
      .where({ id: userId })
      .first();
  },
  updateUser(userId,body) {
    return knex("users").update(body).where({ id: userId });
  },
  getCard(cardId) {
    return knex("cards")
      .select("id", "weight", "tiles")
      .where({ id: cardId })
      .first();
  },

  getCards(cardsIds) {
    return knex("cards")
      .select("id", "weight", "tiles")
      .whereIn("id", cardsIds);
  },
};
