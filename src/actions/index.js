const voteBatman = () => {
  console.log("Voted Batman");
  return {
    type: "VOTE_BATMAN"
  };
};

const voteAquaMan = () => {
  console.log("Voted AquaMan");
  return {
    type: "VOTE_AQUAMAN"
  };
};

const voteWonderwoman = () => {
  console.log("Voted WonderWoman");
  return {
    type: "VOTE_WONDERWOMAN"
  };
};

const voteFlash = () => {
  console.log("Voted Flash");
  return {
    type: "VOTE_FLASH"
  };
};

module.exports = {
  voteBatman,
  voteFlash,
  voteWonderwoman,
  voteAquaMan
};
