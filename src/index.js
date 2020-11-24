import "core-js/stable";
import "regenerator-runtime/runtime";
const axios = require('axios');

const TORN_URL = `https://api.torn.com/`;
var _key;


const key = (key) => {
    _key = key;
}

const url = {
    user: () => { return `${TORN_URL}user/?key=${_key}&selections=` },
    property: () => { return `${TORN_URL}property/?key=${_key}&selections=` },
    faction: () => { return `${TORN_URL}faction/?key=${_key}&selections=` },
    company: () => { return `${TORN_URL}company/?key=${_key}&selections=` },
    market: (arg = null) => { return `${TORN_URL}market/${arg}?key=${_key}&selections=` },
    torn: () => { return `${TORN_URL}torn/?key=${_key}&selections=` },
}

/**
 * Collection of functions under the user endpoint
 */
const user = {
    /**
     * List all your current ammo
     */
    ammo: async () => { return await axios.get(`${url.user()}ammo`).then((res) => res.data); },
    /**
     * List all your recent attacks
     */
    attacks: async () => { return await axios.get(`${url.user()}attacks`).then((res) => res.data); },
    attacksfull: async () => { return await axios.get(`${url.user()}attacksfull`).then((res) => res.data); },
    bars: async () => { return await axios.get(`${url.user()}bars`).then((res) => res.data); },
    basic: async () => { return await axios.get(`${url.user()}basic`).then((res) => res.data); },
    battlestats: async () => { return await axios.get(`${url.user()}battlestats`).then((res) => res.data); },
    bazaar: async () => { return await axios.get(`${url.user()}bazaar`).then((res) => res.data); },
    cooldowns: async () => { return await axios.get(`${url.user()}cooldowns`).then((res) => res.data); },
    crimes: async () => { return await axios.get(`${url.user()}crimes`).then((res) => res.data); },
    discord: async () => { return await axios.get(`${url.user()}discord`).then((res) => res.data); },
    display: async () => { return await axios.get(`${url.user()}display`).then((res) => res.data); },
    education: async () => { return await axios.get(`${url.user()}education`).then((res) => res.data); },
    events: async () => { return await axios.get(`${url.user()}events`).then((res) => res.data); },
    gym: async () => { return await axios.get(`${url.user()}gym`).then((res) => res.data); },
    hof: async () => { return await axios.get(`${url.user()}hof`).then((res) => res.data); },
    honors: async () => { return await axios.get(`${url.user()}honors`).then((res) => res.data); },
    icons: async () => { return await axios.get(`${url.user()}icons`).then((res) => res.data); },
    inventory: async () => { return await axios.get(`${url.user()}inventory`).then((res) => res.data); },
    jobpoints: async () => { return await axios.get(`${url.user()}jobpoints`).then((res) => res.data); },
    medals: async () => { return await axios.get(`${url.user()}medals`).then((res) => res.data); },
    merits: async () => { return await axios.get(`${url.user()}merits`).then((res) => res.data); },
    messages: async () => { return await axios.get(`${url.user()}messages`).then((res) => res.data); },
    money: async () => { return await axios.get(`${url.user()}money`).then((res) => res.data); },
    networth: async () => { return await axios.get(`${url.user()}networth`).then((res) => res.data); },
    notifications: async () => { return await axios.get(`${url.user()}notifications`).then((res) => res.data); },
    perks: async () => { return await axios.get(`${url.user()}perks`).then((res) => res.data); },
    personalstats: async () => { return await axios.get(`${url.user()}personalstats`).then((res) => res.data); },
    profile: async () => { return await axios.get(`${url.user()}profile`).then((res) => res.data); },
    properties: async () => { return await axios.get(`${url.user()}properties`).then((res) => res.data); },
    receivedevents: async () => { return await axios.get(`${url.user()}receivedevents`).then((res) => res.data); },
    refills: async () => { return await axios.get(`${url.user()}refills`).then((res) => res.data); },
    revives: async () => { return await axios.get(`${url.user()}revives`).then((res) => res.data); },
    revivesfull: async () => { return await axios.get(`${url.user()}revivesfull`).then((res) => res.data); },
    stocks: async () => { return await axios.get(`${url.user()}stocks`).then((res) => res.data); },
    travel: async () => { return await axios.get(`${url.user()}travel`).then((res) => res.data); },
    weaponexp: async () => { return await axios.get(`${url.user()}weaponexp`).then((res) => res.data); },
    workstats: async () => { return await axios.get(`${url.user()}workstats`).then((res) => res.data); },
}

const properties = {
    property: async () => { return await axios.get(`${url.property()}property`).then((res) => res.data); },
}

const faction = {
    applications: async () => { return await axios.get(`${url.faction()}applications`).then((res) => res.data); },
    armor: async () => { return await axios.get(`${url.faction()}armor`).then((res) => res.data); },
    armorynews: async () => { return await axios.get(`${url.faction()}armorynews`).then((res) => res.data); },
    armorynewsfull: async () => { return await axios.get(`${url.faction()}armorynewsfull`).then((res) => res.data); },
    attacknews: async () => { return await axios.get(`${url.faction()}attacknews`).then((res) => res.data); },
    attacknewsfull: async () => { return await axios.get(`${url.faction()}attacknewsfull`).then((res) => res.data); },
    attacks: async () => { return await axios.get(`${url.faction()}attacks`).then((res) => res.data); },
    attacksfull: async () => { return await axios.get(`${url.faction()}attacksfull`).then((res) => res.data); },
    basic: async () => { return await axios.get(`${url.faction()}basic`).then((res) => res.data); },
    boosters: async () => { return await axios.get(`${url.faction()}boosters`).then((res) => res.data); },
    cesium: async () => { return await axios.get(`${url.faction()}cesium`).then((res) => res.data); },
    chain: async () => { return await axios.get(`${url.faction()}chain`).then((res) => res.data); },
    chains: async () => { return await axios.get(`${url.faction()}chains`).then((res) => res.data); },
    contributors: async () => { return await axios.get(`${url.faction()}contributors`).then((res) => res.data); },
    crimenews: async () => { return await axios.get(`${url.faction()}crimenews`).then((res) => res.data); },
    crimenewsfull: async () => { return await axios.get(`${url.faction()}crimenewsfull`).then((res) => res.data); },
    crimes: async () => { return await axios.get(`${url.faction()}crimes`).then((res) => res.data); },
    currency: async () => { return await axios.get(`${url.faction()}currency`).then((res) => res.data); },
    donations: async () => { return await axios.get(`${url.faction()}donations`).then((res) => res.data); },
    drugs: async () => { return await axios.get(`${url.faction()}drugs`).then((res) => res.data); },
    fundsnews: async () => { return await axios.get(`${url.faction()}fundsnews`).then((res) => res.data); },
    fundsnewsfull: async () => { return await axios.get(`${url.faction()}fundsnewsfull`).then((res) => res.data); },
    mainnews: async () => { return await axios.get(`${url.faction()}mainnews`).then((res) => res.data); },
    mainnewsfull: async () => { return await axios.get(`${url.faction()}mainnewsfull`).then((res) => res.data); },
    medical: async () => { return await axios.get(`${url.faction()}medical`).then((res) => res.data); },
    membershipnews: async () => { return await axios.get(`${url.faction()}membershipnews`).then((res) => res.data); },
    membershipnewsfull: async () => { return await axios.get(`${url.faction()}membershipnewsfull`).then((res) => res.data); },
    revives: async () => { return await axios.get(`${url.faction()}revives`).then((res) => res.data); },
    revivesfull: async () => { return await axios.get(`${url.faction()}revivesfull`).then((res) => res.data); },
    stats: async () => { return await axios.get(`${url.faction()}stats`).then((res) => res.data); },
    temporary: async () => { return await axios.get(`${url.faction()}temporary`).then((res) => res.data); },
    territory: async () => { return await axios.get(`${url.faction()}territory`).then((res) => res.data); },
    timestamp: async () => { return await axios.get(`${url.faction()}timestamp`).then((res) => res.data); },
    upgrades: async () => { return await axios.get(`${url.faction()}upgrades`).then((res) => res.data); },
    weapons: async () => { return await axios.get(`${url.faction()}weapons`).then((res) => res.data); },
}
const company = {
    applications: async () => { return await axios.get(`${url.company()}applications`).then((res) => res.data); },
    detailed: async () => { return await axios.get(`${url.company()}detailed`).then((res) => res.data); },
    employees: async () => { return await axios.get(`${url.company()}employees`).then((res) => res.data); },
    news: async () => { return await axios.get(`${url.company()}news`).then((res) => res.data); },
    newsfull: async () => { return await axios.get(`${url.company()}newsfull`).then((res) => res.data); },
    profile: async () => { return await axios.get(`${url.company()}profile`).then((res) => res.data); },
    stock: async () => { return await axios.get(`${url.company()}stock`).then((res) => res.data); },
}
const market = {
    /**
     * List all/selected item users bazaar
     * @param {number} itemId The ID of desiered item
     * @returns {Dict} List of itemId currently for sale in users bazaar
     */
    bazaar: async (itemId = null) => { return await axios.get(`${url.market(itemId)}bazaar`).then((res) => res.data); },
    /**
     * List all/selected item in the item market
     * @param {number} itemId The ID of desiered item
     * @returns {Dict} List of itemId currently for sale on the item market
     */
    itemmarket: async (itemId = null) => { return await axios.get(`${url.market(itemId)}itemmarket`).then((res) => res.data); },
    /**
     * List all the currently listing on the points market
     */
    pointsmarket: async () => { return await axios.get(`${url.market()}pointsmarket`).then((res) => res.data); },
}
const torn = {
    ammo: async () => { return await axios.get(`${url.torn()}ammo`).then((res) => res.data); },

bank: async () => { return await axios.get(`${url.torn()}bank`).then((res) => res.data); },
companies: async () => { return await axios.get(`${url.torn()}companies`).then((res) => res.data); },
competition: async () => { return await axios.get(`${url.torn()}competition`).then((res) => res.data); },
education: async () => { return await axios.get(`${url.torn()}education`).then((res) => res.data); },
factiontree: async () => { return await axios.get(`${url.torn()}factiontree`).then((res) => res.data); },
gyms: async () => { return await axios.get(`${url.torn()}gyms`).then((res) => res.data); },
honors: async () => { return await axios.get(`${url.torn()}honors`).then((res) => res.data); },
items: async () => { return await axios.get(`${url.torn()}items`).then((res) => res.data); },
medals: async () => { return await axios.get(`${url.torn()}medals`).then((res) => res.data); },
organisedcrimes: async () => { return await axios.get(`${url.torn()}organisedcrimes`).then((res) => res.data); },
pawnshop: async () => { return await axios.get(`${url.torn()}pawnshop`).then((res) => res.data); },
properties: async () => { return await axios.get(`${url.torn()}properties`).then((res) => res.data); },
rackets: async () => { return await axios.get(`${url.torn()}rackets`).then((res) => res.data); },
raids: async () => { return await axios.get(`${url.torn()}raids`).then((res) => res.data); },
stats: async () => { return await axios.get(`${url.torn()}stats`).then((res) => res.data); },
stocks: async () => { return await axios.get(`${url.torn()}stocks`).then((res) => res.data); },
territory: async () => { return await axios.get(`${url.torn()}territory`).then((res) => res.data); },
territorywars: async () => { return await axios.get(`${url.torn()}territorywars`).then((res) => res.data); },
}

module.exports = {
    key,
    user,
    properties,
    faction,
    company,
    market,
    torn,
}