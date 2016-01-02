Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    // Index page route
    this.route('/',{
        path: '/',
        template: 'home'
    });
    
    
    
    // Routes for Admin pages
    this.route('admin',{
        path: '/admin',
        template: 'admin_dashboard'
    });
    

});