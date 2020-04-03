const skills = [
    {skill: 'HTML', done: true},
    {skill: 'CSS', done: true},
    {skill: 'JavaScript', done: false}
  ];
  
  const getAll = () => {
    return skills;
}

const getOne = (id) => {
    return skills[id];
}

const create = (skill) => {
    skills.push(skill);
}

const deleteOne = (id) => {
    skills.splice(id, 1);
}

const update = (id, skill) => {
    skills.splice(id, 1, skill);
}

module.exports = {
    getAll,
    create,
    getOne,
    deleteOne,
    update
};
