
module.exports.home = (req, res) => {

    res.render('index', {
        title: 'Home',
      
    });
}

module.exports.about = (req, res) => {
    res.render('about', {
        title: "About",
  
    });
}

module.exports.projects = (req, res) => {
    res.render('projects', {
        title: "Projects",

    });
}

module.exports.services = (req, res) => {
    res.render('services', {
        title: "Services",
     
    });
}

module.exports.contact = (req, res) => {
    res.render('contact', {
        title: "Contact",
   
    });
}
