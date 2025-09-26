import Level from "./../classes/Level";

export default function LevelOne() {
    const level = new Level("1");

    level.requiredScore = 500;
    level.sourceIndexesLeft = [2];
    level.sourceIndexesRight = [];
    level.destIndexesRight = [2];
    level.destIndexesLeft = [];

    return level;
}
