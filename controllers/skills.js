const SkillModel = require('../models/skill')

module.exports = {
    index,
    create,
    new: newSkill,
    show,
    delete: deleteOne,
    edit,
    update,

}

function edit(req, res){
    res.render('skills/edit', {
        skill: SkillModel.getOne(req.params.id),
        idx: req.params.id
    });
}

function update(req, res){
    req.body.done = req.body.done === 'on';
    SkillModel.update(req.params.id, req.body);
    res.redirect('/skills');
}

function deleteOne(req, res){
    console.log(req.location)
    SkillModel.deleteSkill(req.params.id)
    res.redirect('/skills');
    console.log(req.params.id)
};

function show(req, res){
    res.render('skills/show', {
        skill: SkillModel.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });

}

function newSkill(req, res) {
res.render('skills/new', {
    
});
}

function create(req, res) {
    req.body.learned = false;
    SkillModel.createOne(req.body);
    res.redirect('skills')
}

function index(req, res){
res.render('skills/index', {
    skills: SkillModel.getAll(),
});

}