function slugify(title) {

    let titleLowerCase = title.toLowerCase();
    let words = titleLowerCase.split(' '); 
    let slug = words.join('-')
    return slug;
}
