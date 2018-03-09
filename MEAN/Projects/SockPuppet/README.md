Welcome to SockPuppet! This is a project completed at CodingDojo durring the MEAN stack

MVP:
1) Working Group Chat
    -Node.js render views
    -on Landing have js recieve and store user data
        -- user {
                "name" : str,
                "socketId" : str, 
            } 
    -emit to server new_user event
        -- pass user.name, user.socket_id
    -server listsen for new_user event
        -- Broadcast new_user_joining event
    SERVER_EVENTS
        - new_user_joining
        - user_disconnect
    CLIENT_EVENTS
        - new_user
        - message
    
2)Basic Werewolf Logic
    [NOTE: Until **Feature: multiple game lobbies** are in effect chat will prevent other users from joining]
    -Game Logic:
        -- Minimum number of players : 5
        -- Win conditions (This will be checked at the start of every Night)
            --- {"role" : "werewolf"} 
                ---- total number of activePlayers <= 2
            --- {"role" : "villager"} 
                ---- total number of werewolves < 1
        -- gameState {
                "activeGame" : bool,
                "phase" : str,
                "activePlayers" : int,
                "werewolves" : int
                }
        -- All active players will be assigned a role
            --- 1::4 ratio of werewolves to villagers
    -Timer : count down timer for (tbd) seconds
    -Phases : game state will change when countdown hits 0
        -- gameState {"phase": "Day" || "Night" || "Vote"}
            --- "phase" : "Day"
                ---- all active players will have access to chat
            --- "phase" : "Night"
                ---- chat will be disabled for villager players
                ---- werewolf player(s) will select another player [NOTE: same vote system can be used]
                    ----- selected player will be disconnected from chat [**Feature: spectate mode**]
            --- "phase" : "Vote"
                ---- all active players will have access to chat
                ---- players will vote for anoter player to be "killed"
                     [NOTE: ties will result in no action taking place **Feature: tie breakers**]
                    ----- selected player will be disconnected from chat [**Feature: spectate mode**]
    -Permissions: users will be assigned one of two roles 
        -- user = {"role" : "villager" || "werewolf"}

Features:
--Additonal Roles for players
--Spectate mode
--Multiple game lobbies
--Ability to join an active game as a New Villager
--Special rules for tie breakers