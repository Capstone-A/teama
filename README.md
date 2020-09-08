# DJ Party

## MVP
1. Rooms
  - All public

2. Creating a Playlist
  - "POST	/v1/users/{user_id}/playlists" -> grab playlistId
    - All private collaborative (Not public)

3. (Join a room) [https://developer.spotify.com/documentation/web-api/reference/playlists/]
  - Click a roomCard on /home page to..
    - move into /room/id
    - see all messages
    - "GET	/v1/playlists/{playlist_id}	Get a Playlist"

4. Searching for a song
  - "GET https://api.spotify.com/v1/search" -> grab track uri
  - "POST	/v1/playlists/{playlist_id}/tracks"
    - Adding songs to the collaborative playlist
    - clcikHandler (click a track from the search result)-> using playlistID + a track uri

5. Playing a song
  - Web Player SDK

6. Leaving a room

Creating a Playlist: PlaylistId
Searching a song : track uri
add a song to the playlist using track uri and playlistId


Queue Model
-Fields:
 URI
 TrackName
 Artist
 roomId

Steps:
-"SuggestToQueue" Mutation:
  Make an instance in the queue model that takes in uri, trackname, artist, and roomID from trackSearch 
  -Can return boolean or instance
  (findOrCreate)
-"GetQueue" Query:
  Finds all the songs in the queue for the room 
    -To always render the updated, there will need a subscribeToMore function in the frontend
  (findAll {where: {roomId: id}})
-"suggestedToQueue" Subscription:
  Returns the newly added song, we will not render this by itself, but will be pushed to the getQueue query in subscribeToMore like what was done in Messages
-"DeQueue" mutation
  -Delete instance in database based on uri and roomId
  -Return either boolean or updated queue after deleted
-"deQueued" Subscription
  -Triggers the addToPlaylist mutation by passing in the uri
  -Returns the updated queue




 

