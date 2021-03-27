db.createUser({
  user: 'myShop',
  pwd: '*myShop2021',
  roles: [
    {
      role: 'dbOwner',
      db: 'myShop'
    }
  ]
});

db = db.getSiblingDB('myShop');

db.createCollection('users');