// replace <hr> with ornament

const new_hr_element = document.createElement('div');
new_hr_element.className = 'hr';

var hr_elements = document.getElementsByTagName("hr");
for (var element of hr_elements) {
    element.parentNode.insertBefore(new_hr_element.cloneNode(true), element);
}

// in titles,
// replace <ruby> in title with parentheses
// delete other tags
const ruby_rt_re = /<ruby>(.*?)<rt>(.*?)<\/rt><\/ruby>/g;
const tag_re = /<(?:.|\s)*?>/g;
var title_elements = document.getElementsByTagName("title");
for (var element of title_elements) {
    element.textContent = element.textContent.replace(ruby_rt_re, '$1($2)');
    element.textContent = element.textContent.replace(tag_re, '');
}
