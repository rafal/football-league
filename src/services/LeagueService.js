/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 * 
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM, 
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.  
 * 
 *       ADDITIONALLY, MAKE SURE THAT ALL LIBRARIES USED IN THIS FILE FILE ARE COMPATIBLE WITH PURE JAVASCRIPT
 * 
 */
class LeagueService {    
    #matches = []; // Private variable to store matches
    
    /**
     * Sets the match schedule.
     * Match schedule will be given in the following form:
     * [
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      },
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      }    
     * ]
     * 
     * @param {Array} matches List of matches.
     */    
    setMatches(matches) {
        this.#matches = matches;
    }

    /**
     * Returns the full list of matches.
     * 
     * @returns {Array} List of matches.
     */
    getMatches() {
        return this.#matches;
    }

    /**
     * Returns the leaderboard in a form of a list of JSON objecs.
     * 
     * [     
     *      {
     *          teamName: [STRING]',
     *          matchesPlayed: [INTEGER],
     *          goalsFor: [INTEGER],
     *          goalsAgainst: [INTEGER],
     *          points: [INTEGER]     
     *      },      
     * ]       
     * 
     * @returns {Array} List of teams representing the leaderboard.
     */
    getLeaderboard() {
        const leaderboard = this.#generateLeaderboard();
        return leaderboard;
    }
    
    /**
     * Asynchronic function to fetch the data from the server.
     */
    async fetchData() {
        const accessToken = await this.#fetchAccessToken();
        await this.#fetchAllMatches(accessToken);
    }
    
    #generateLeaderboard() {
        const leaderboard = {};

        this.#matches.forEach(match => {
            if (!leaderboard[match.homeTeam]) {
                leaderboard[match.homeTeam] = { teamName: match.homeTeam, matchesPlayed: 0, goalsFor: 0, goalsAgainst: 0, points: 0 };
            }
            if (!leaderboard[match.awayTeam]) {
                leaderboard[match.awayTeam] = { teamName: match.awayTeam, matchesPlayed: 0, goalsFor: 0, goalsAgainst: 0, points: 0 };
            }

            // Update matches played
            leaderboard[match.homeTeam].matchesPlayed++;
            leaderboard[match.awayTeam].matchesPlayed++;

            // Update goals
            leaderboard[match.homeTeam].goalsFor += match.homeTeamScore;
            leaderboard[match.awayTeam].goalsFor += match.awayTeamScore;
            leaderboard[match.homeTeam].goalsAgainst += match.awayTeamScore;
            leaderboard[match.awayTeam].goalsAgainst += match.homeTeamScore;

            // Update points based on match result
            if (match.matchPlayed) {
                if (match.homeTeamScore > match.awayTeamScore) {
                    // Home team wins
                    leaderboard[match.homeTeam].points += 3;
                } else if (match.homeTeamScore < match.awayTeamScore) {
                    // Away team wins
                    leaderboard[match.awayTeam].points += 3;
                } else {
                    // Draw
                    leaderboard[match.homeTeam].points += 1;
                    leaderboard[match.awayTeam].points += 1;
                }
            }
        });

        // Convert to array and sort
        return Object.values(leaderboard).sort(this.#compareTeams);
    }

    #compareTeams(teamA, teamB) {
        // Primary sort by points
        if (teamA.points !== teamB.points) {
            return teamB.points - teamA.points;
        }

        // Secondary sort by goal difference
        const goalDiffA = teamA.goalsFor - teamA.goalsAgainst;
        const goalDiffB = teamB.goalsFor - teamB.goalsAgainst;
        if (goalDiffA !== goalDiffB) {
            return goalDiffB - goalDiffA;
        }

        // Tertiary sort by goals for
        if (teamA.goalsFor !== teamB.goalsFor) {
            return teamB.goalsFor - teamA.goalsFor;
        }

        // Final sort by team name
        return teamA.teamName.localeCompare(teamB.teamName);
    }

    async #fetchAccessToken() {
        const response = await fetch('http://localhost:3001/api/v1/getAccessToken');
        const data = await response.json();
        return data.access_token;
    }

    async #fetchAllMatches(accessToken) {
        const response = await fetch('http://localhost:3001/api/v1/getAllMatches', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        const data = await response.json();
        this.setMatches(data.matches);
    }
}

export default LeagueService;