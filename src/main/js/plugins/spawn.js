/*************************************************************************
## Spawn Plugin

Allows in-game operators to easily spawn creatures at current location.

### Usage

    /jsp spawn cow
    /jsp spawn sheep
    /jsp spawn wolf

This command supports TAB completion so to see a list of possible
entitities, type `/jsp spawn ' at the in-game command prompt, then
press TAB. Visit
<http://jd.bukkit.org/beta/apidocs/org/bukkit/entity/EntityType.html>
for a list of possible entities (creatures) which can be spawned.

***/
var entities = [],
  EntityType = org.bukkit.entity.EntityType;

for ( var t in EntityType ) {
  if ( EntityType[t] && EntityType[t].ordinal ) {
    entities.push(t);
  }
}
command( 'spawn', function( parameters, sender ) {
  if ( !sender.op ) {
    sender.sendMessage( 'Only operators can perform this command' );
    return;
  }
  var location = sender.location;
  var world = location.world;
  var type = ('' + parameters[0]).toUpperCase();
  world.spawnEntity( location, EntityType[type] );
}, entities );