class studentHogwarts {
    constructor() {
        let privateScore = 0;
        let name = null;
        function changeScoreBy(points) {
            privateScore += points;
        }
        this.setName = function (newName) {
            name = newName;
        };
        this.rewardStudent = function () {
            changeScoreBy(1);
        };
        this.penalizeStudent = function () {
            changeScoreBy(-1);
        };
        this.getScore = function () {
            return `${name}: ${privateScore}`;
        };
    }
}
const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());
const draco = new studentHogwarts();
draco.setName("Draco");
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());