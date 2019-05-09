const mongoose=require('mongoose');

var public_post = mongoose.model('public_posts',{
    blog_title:{type:String,},
    blog_content:{type:String, },
});
module.exports = {
    public_post
};