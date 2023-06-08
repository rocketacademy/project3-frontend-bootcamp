const generateGroupings = (confirmedParticipants, numGroups) => {
  const sortByAge = (participants) => {
    return participants.sort((obj1, obj2) => {
      return obj2.year - obj1.year;
    });
  };

  const splitGender = (participants) => {
    const male = [];
    const female = [];

    for (const participant of participants) {
      if (participant.isMale === true) {
        male.push(participant);
      } else {
        female.push(participant);
      }
    }

    return { male, female };
  };

  const { male, female } = splitGender(sortByAge(confirmedParticipants));

  let majority, minority;

  if (male.length > female.length) {
    majority = male;
    minority = female;
  } else if (male.length <= female.length) {
    majority = female;
    minority = male;
  }

  let remainderMinority = minority.length % numGroups;
  let remainderPeople = confirmedParticipants.length % numGroups;
  const groupSize = Math.floor(confirmedParticipants.length / numGroups);

  console.log("Number of people: ", confirmedParticipants.length);
  console.log("Number of groups: ", numGroups);
  console.log("Number of minority: ", minority.length);
  console.log("Remaining minority after equal division: ", remainderMinority);
  console.log("Number of majority: ", majority.length);
  console.log("Remaining people after equal division: ", remainderPeople);

  let minorityIndex = 0;
  let majorityIndex = 0;

  let totalPeople = 0;
  let totalMales = 0;
  let totalFemales = 0;

  for (let groupId = 1; groupId <= numGroups; groupId++) {
    let currentGroupSize = 0;

    if (remainderMinority > 0 && minority.length > numGroups) {
      minority[minorityIndex].groupId = groupId;
      currentGroupSize += 1;
      minorityIndex += 1;
      remainderMinority -= 1;
    }

    // if there are still minorities to distribute
    if (minorityIndex < minority.length) {
      minority[minorityIndex].groupId = groupId;
      currentGroupSize += 1;
      minorityIndex += 1;
    }

    while (currentGroupSize < groupSize && majority[majorityIndex]) {
      majority[majorityIndex].groupId = groupId;
      currentGroupSize += 1;
      majorityIndex += 1;
    }
    if (remainderPeople > 0) {
      majority[majorityIndex].groupId = groupId;
      currentGroupSize += 1;
      majorityIndex += 1;
      remainderPeople -= 1;
    }
    /*
    for (participant of currentGroup.participants) {
      console.log(`Age: ${participant.age}, Sex: ${participant.sex}`);
      if (participant.sex === true) {
        totalMales += 1;
      } else {
        totalFemales += 1;
      }
      totalPeople += 1;
    }
    console.log(`M: ${totalMales}, F: ${totalFemales}, All: ${totalPeople}`);
    console.log(`\n`);
  }*/
  }
  return minority.concat(majority);
};

export default generateGroupings;
