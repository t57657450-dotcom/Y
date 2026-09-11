// ==========================================
// 🏆 MATCH SIMULATOR
// لیگ مجازی مربیان
// ==========================================

const FORMATIONS = {
    "4-3-3": {
        attack: 1.06,
        midfield: 1.04,
        defense: 1.00,
        possession: 1.05
    },

    "4-2-3-1": {
        attack: 1.02,
        midfield: 1.08,
        defense: 1.05,
        possession: 1.08
    },

    "4-4-2": {
        attack: 1.05,
        midfield: 1.00,
        defense: 1.04,
        possession: 1.00
    },

    "3-5-2": {
        attack: 1.08,
        midfield: 1.10,
        defense: 0.94,
        possession: 1.10
    },

    "5-3-2": {
        attack: 0.94,
        midfield: 0.98,
        defense: 1.12,
        possession: 0.94
    },

    "4-3-1-2": {
        attack: 1.06,
        midfield: 1.08,
        defense: 1.00,
        possession: 1.06
    }
};


// ==========================================
// 🧠 تاکتیک‌ها
// ==========================================

const TACTICS = {

    attacking: {
        attack: 1.10,
        midfield: 1.03,
        defense: 0.94,
        possession: 1.00
    },

    balanced: {
        attack: 1.00,
        midfield: 1.00,
        defense: 1.00,
        possession: 1.00
    },

    defensive: {
        attack: 0.92,
        midfield: 0.98,
        defense: 1.10,
        possession: 0.94
    },

    possession: {
        attack: 1.02,
        midfield: 1.10,
        defense: 1.00,
        possession: 1.12
    },

    counter: {
        attack: 1.08,
        midfield: 0.96,
        defense: 1.05,
        possession: 0.90
    },

    pressing: {
        attack: 1.07,
        midfield: 1.08,
        defense: 0.98,
        possession: 1.06
    }
};


// ==========================================
// ابزارها
// ==========================================

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}


// ==========================================
// ⭐ Overall بازیکنان
// ==========================================

function playerOverall(player) {

    if (!player) return 70;

    return Number(
        player.overall ||
        player.OVR ||
        player.rating ||
        70
    );
}


// ==========================================
// 📊 میانگین Overall
// ==========================================

function averageOverall(players) {

    if (!players || players.length === 0) {
        return 70;
    }

    let total = 0;

    players.forEach(player => {
        total += playerOverall(player);
    });

    return total / players.length;
}


// ==========================================
// ⚽ تشخیص پست
// ==========================================

function getPosition(player) {

    return String(
        player.position ||
        player.pos ||
        ""
    ).toUpperCase();
}


// ==========================================
// قدرت خطوط
// ==========================================

function calculateLines(players) {

    if (!players || !players.length) {

        return {
            attack: 70,
            midfield: 70,
            defense: 70,
            goalkeeper: 70,
            overall: 70
        };
    }

    let attack = [];
    let midfield = [];
    let defense = [];
    let goalkeeper = [];

    players.forEach(player => {

        const pos = getPosition(player);
        const ovr = playerOverall(player);

        if (
            pos.includes("GK") ||
            pos.includes("دروازه")
        ) {
            goalkeeper.push(ovr);
        }

        else if (
            pos.includes("ST") ||
            pos.includes("CF") ||
            pos.includes("LW") ||
            pos.includes("RW") ||
            pos.includes("SS") ||
            pos.includes("ATT")
        ) {
            attack.push(ovr);
        }

        else if (
            pos.includes("CM") ||
            pos.includes("CAM") ||
            pos.includes("CDM") ||
            pos.includes("LM") ||
            pos.includes("RM")
        ) {
            midfield.push(ovr);
        }

        else {
            defense.push(ovr);
        }
    });

    function avg(arr) {

        if (!arr.length) return 70;

        return arr.reduce(
            (a, b) => a + b,
            0
        ) / arr.length;
    }

    return {

        attack: avg(attack),

        midfield: avg(midfield),

        defense: avg(defense),

        goalkeeper: avg(goalkeeper),

        overall: averageOverall(players)
    };
}


// ==========================================
// 🏆 قدرت نهایی تیم
// ==========================================

function calculateMatchPower(
    players,
    formation,
    tactic
) {

    const lines = calculateLines(players);

    const formationData =
        FORMATIONS[formation] ||
        FORMATIONS["4-3-3"];

    const tacticData =
        TACTICS[tactic] ||
        TACTICS.balanced;


    // Overall بازیکنان = عامل اصلی
    const overallPower =
        lines.overall * 0.50;


    // قدرت خطوط
    const linePower =
        (
            lines.attack * 0.20 +
            lines.midfield * 0.15 +
            lines.defense * 0.10 +
            lines.goalkeeper * 0.05
        );


    const formationPower =
        (
            formationData.attack +
            formationData.midfield +
            formationData.defense
        ) / 3 * 5;


    const tacticPower =
        (
            tacticData.attack +
            tacticData.midfield +
            tacticData.defense
        ) / 3 * 5;


    return {

        overall:
            overallPower,

        lines:
            linePower,

        formation:
            formationPower,

        tactic:
            tacticPower,

        total:
            overallPower +
            linePower +
            formationPower +
            tacticPower
    };
}


// ==========================================
// ⚽ انتخاب گلزن
// ==========================================

function selectScorer(players) {

    if (!players || !players.length) {
        return {
            name: "بازیکن",
            overall: 70
        };
    }

    const attackers = players.filter(player => {

        const pos = getPosition(player);

        return (
            pos.includes("ST") ||
            pos.includes("CF") ||
            pos.includes("LW") ||
            pos.includes("RW") ||
            pos.includes("SS") ||
            pos.includes("CAM")
        );

    });

    const list =
        attackers.length ?
        attackers :
        players;

    // بازیکن با Overall بالاتر شانس بیشتری دارد
    let totalWeight = 0;

    list.forEach(player => {

        totalWeight +=
            Math.max(
                1,
                playerOverall(player) - 50
            );

    });

    let randomValue =
        Math.random() * totalWeight;

    for (const player of list) {

        randomValue -=
            Math.max(
                1,
                playerOverall(player) - 50
            );

        if (randomValue <= 0) {
            return player;
        }
    }

    return list[list.length - 1];
}


// ==========================================
// 🟨 کارت
// ==========================================

function selectCardPlayer(players) {

    if (!players || !players.length) {
        return {
            name: "بازیکن"
        };
    }

    return players[
        random(0, players.length - 1)
    ];
}


// ==========================================
// ⚽ ساخت گل‌ها
// ==========================================

function generateGoals(
    players,
    amount
) {

    const goals = [];

    for (let i = 0; i < amount; i++) {

        const player =
            selectScorer(players);

        goals.push({

            minute: random(3, 90),

            player: player.name,

            playerId: player.id || null,

            overall:
                playerOverall(player),

            type: "goal"
        });
    }

    return goals.sort(
        (a, b) =>
            a.minute - b.minute
    );
}


// ==========================================
// 🟨 کارت زرد
// ==========================================

function generateYellowCards(
    players,
    amount
) {

    const cards = [];

    for (let i = 0; i < amount; i++) {

        const player =
            selectCardPlayer(players);

        cards.push({

            minute: random(10, 90),

            player: player.name,

            playerId: player.id || null,

            type: "yellow"
        });
    }

    return cards.sort(
        (a, b) =>
            a.minute - b.minute
    );
}


// ==========================================
// 🟥 کارت قرمز
// ==========================================

function generateRedCards(
    players,
    amount
) {

    const cards = [];

    for (let i = 0; i < amount; i++) {

        const player =
            selectCardPlayer(players);

        cards.push({

            minute: random(20, 90),

            player: player.name,

            playerId: player.id || null,

            type: "red"
        });
    }

    return cards;
}


// ==========================================
// 🔄 تعویض
// ==========================================

function generateSubstitutions(
    players
) {

    if (!players || players.length < 2) {
        return [];
    }

    const substitutions = [];

    if (Math.random() < 0.65) {

        const playerOut =
            players[
                random(
                    0,
                    players.length - 1
                )
            ];

        const playerIn =
            players[
                random(
                    0,
                    players.length - 1
                )
            ];

        substitutions.push({

            minute: random(55, 85),

            playerOut:
                playerOut.name,

            playerIn:
                playerIn.name,

            type: "substitution"
        });
    }

    return substitutions;
}


// ==========================================
// ⭐ بهترین بازیکن
// ==========================================

function calculateBestPlayer(
    homePlayers,
    awayPlayers,
    homeGoals,
    awayGoals
) {

    const players = [
        ...(homePlayers || []),
        ...(awayPlayers || [])
    ];

    if (!players.length) {
        return null;
    }

    let best = null;
    let bestScore = -Infinity;

    players.forEach(player => {

        const ovr =
            playerOverall(player);

        let score =
            ovr +
            random(-4, 4);

        if (
            homeGoals > 0 &&
            homePlayers.includes(player)
        ) {
            score += 3;
        }

        if (
            awayGoals > 0 &&
            awayPlayers.includes(player)
        ) {
            score += 3;
        }

        if (score > bestScore) {

            bestScore = score;

            best = {

                name: player.name,

                overall: ovr,

                rating:
                    clamp(
                        (score / 10) + 1,
                        6.5,
                        9.9
                    ).toFixed(1)
            };
        }
    });

    return best;
}


// ==========================================
// 🏟️ شبیه‌سازی کامل
// ==========================================

function simulateFullMatch(
    homeTeam,
    awayTeam,
    options = {}
) {

    const homePlayers =
        options.homePlayers ||
        homeTeam.players ||
        [];

    const awayPlayers =
        options.awayPlayers ||
        awayTeam.players ||
        [];


    const homeFormation =
        options.homeFormation ||
        "4-3-3";

    const awayFormation =
        options.awayFormation ||
        "4-3-3";


    const homeTactic =
        options.homeTactic ||
        "balanced";

    const awayTactic =
        options.awayTactic ||
        "balanced";


    // قدرت واقعی بر اساس بازیکنان
    const homePower =
        calculateMatchPower(
            homePlayers,
            homeFormation,
            homeTactic
        );

    const awayPower =
        calculateMatchPower(
            awayPlayers,
            awayFormation,
            awayTactic
        );


    // اختلاف قدرت
    const powerDifference =
        homePower.total -
        awayPower.total;


    // ======================================
    // 📊 مالکیت
    // ======================================

    let homePossession =
        50 +
        (
            powerDifference * 0.35
        ) +
        random(-5, 5);

    homePossession =
        clamp(
            Math.round(homePossession),
            30,
            70
        );

    const awayPossession =
        100 - homePossession;


    // ======================================
    // شوت
    // ======================================

    let homeShots =
        9 +
        Math.round(
            (homePower.total - 80) / 4
        ) +
        random(-2, 5);

    let awayShots =
        9 +
        Math.round(
            (awayPower.total - 80) / 4
        ) +
        random(-2, 5);


    homeShots =
        clamp(homeShots, 3, 25);

    awayShots =
        clamp(awayShots, 3, 25);


    const homeShotsOnTarget =
        clamp(
            Math.round(
                homeShots *
                (
                    0.30 +
                    homePower.lines.attack /
                    500
                )
            ),
            1,
            homeShots
        );


    const awayShotsOnTarget =
        clamp(
            Math.round(
                awayShots *
                (
                    0.30 +
                    awayPower.lines.attack /
                    500
                )
            ),
            1,
            awayShots
        );


    // ======================================
    // ⚽ گل
    // ======================================

    let homeGoals =
        Math.round(
            homeShotsOnTarget *
            (
                0.12 +
                homePower.lines.attack /
                1000
            )
        );


    let awayGoals =
        Math.round(
            awayShotsOnTarget *
            (
                0.12 +
                awayPower.lines.attack /
                1000
            )
        );


    // شانس جزئی برای شگفتی
    if (Math.random() < 0.15) {
        homeGoals++;
    }

    if (Math.random() < 0.15) {
        awayGoals++;
    }


    homeGoals =
        clamp(homeGoals, 0, 6);

    awayGoals =
        clamp(awayGoals, 0, 6);


    // ======================================
    // ⚽ گلزنان
    // ======================================

    const homeGoalEvents =
        generateGoals(
            homePlayers,
            homeGoals
        );

    const awayGoalEvents =
        generateGoals(
            awayPlayers,
            awayGoals
        );


    // ======================================
    // 🟨 کارت زرد
    // ======================================

    const homeYellow =
        generateYellowCards(
            homePlayers,
            random(0, 4)
        );

    const awayYellow =
        generateYellowCards(
            awayPlayers,
            random(0, 4)
        );


    // ======================================
    // 🟥 کارت قرمز
    // ======================================

    const homeRed =
        Math.random() < 0.07
            ? generateRedCards(
                homePlayers,
                1
            )
            : [];

    const awayRed =
        Math.random() < 0.07
            ? generateRedCards(
                awayPlayers,
                1
            )
            : [];


    // ======================================
    // 🔄 تعویض
    // ======================================

    const homeSubs =
        generateSubstitutions(
            homePlayers
        );

    const awaySubs =
        generateSubstitutions(
            awayPlayers
        );


    // ======================================
    // 📊 آمار
    // ======================================

    const result = {

        home: {

            name:
                homeTeam.name,

            goals:
                homeGoals,

            formation:
                homeFormation,

            tactic:
                homeTactic,

            averageOverall:
                Number(
                    averageOverall(
                        homePlayers
                    ).toFixed(1)
                ),

            possession:
                homePossession,

            shots:
                homeShots,

            shotsOnTarget:
                homeShotsOnTarget,

            corners:
                random(2, 10),

            fouls:
                random(5, 17),

            offsides:
                random(0, 5),

            passes:
                random(350, 650),

            passAccuracy:
                random(78, 95),

            goalsEvents:
                homeGoalEvents,

            yellowCards:
                homeYellow,

            redCards:
                homeRed,

            substitutions:
                homeSubs
        },


        away: {

            name:
                awayTeam.name,

            goals:
                awayGoals,

            formation:
                awayFormation,

            tactic:
                awayTactic,

            averageOverall:
                Number(
                    averageOverall(
                        awayPlayers
                    ).toFixed(1)
                ),

            possession:
                awayPossession,

            shots:
                awayShots,

            shotsOnTarget:
                awayShotsOnTarget,

            corners:
                random(2, 10),

            fouls:
                random(5, 17),

            offsides:
                random(0, 5),

            passes:
                random(350, 650),

            passAccuracy:
                random(78, 95),

            goalsEvents:
                awayGoalEvents,

            yellowCards:
                awayYellow,

            redCards:
                awayRed,

            substitutions:
                awaySubs
        }
    };


    // ======================================
    // ⭐ بهترین بازیکن
    // ======================================

    result.bestPlayer =
        calculateBestPlayer(
            homePlayers,
            awayPlayers,
            homeGoals,
            awayGoals
        );


    // ======================================
    // 🏆 برنده
    // ======================================

    if (homeGoals > awayGoals) {

        result.winner =
            homeTeam.name;

    } else if (awayGoals > homeGoals) {

        result.winner =
            awayTeam.name;

    } else {

        result.winner =
            "مساوی";
    }


    // ======================================
    // 🧠 اطلاعات قدرت
    // ======================================

    result.power = {

        home:
            Number(
                homePower.total.toFixed(2)
            ),

        away:
            Number(
                awayPower.total.toFixed(2)
            )
    };


    result.duration = "90:00";


    return result;
}


// ==========================================
// خروجی
// ==========================================

if (typeof module !== "undefined") {

    module.exports = {

        FORMATIONS,

        TACTICS,

        calculateLines,

        calculateMatchPower,

        averageOverall,

        simulateFullMatch,

        generateGoals,

        generateYellowCards,

        generateRedCards,

        generateSubstitutions
    };
}
