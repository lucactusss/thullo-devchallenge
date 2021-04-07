db.createUser({
  user: 'thullo',
  pwd: '*thullo',
  roles: [
    {
      role: 'dbOwner',
      db: 'thullo'
    }
  ]
});

db = db.getSiblingDB('thullo');

db.createCollection('User');