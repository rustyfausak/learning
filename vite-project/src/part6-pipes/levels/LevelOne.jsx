import Level from "./../classes/Level";

export default function LevelOne() {
    const level = new Level("1");

    level.allowedRotations = 5;
    level.allowedSwaps = 5;
    level.sourceIndexesLeft = [2];
    level.sourceIndexesRight = [];
    level.destIndexesRight = [2];
    level.destIndexesLeft = [];

    return level;
}
