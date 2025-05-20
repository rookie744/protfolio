let text;
let date;
let make_obj = {};
let final_arr= JSON.parse(localStorage.getItem('to_do_list')) || [];
let obj={};
let get_html = '';
final_arr.forEach((value,index) => {
    obj = value;
    get_html += `<p>${obj.text}</p><p>${obj.date}</p><p><button onclick="final_arr.splice(${index},1);Delete()">Delete</button></p>`;
});
document.querySelector('.to-do-list').innerHTML = get_html;
get_html = '';
function get_todo_list()
{
    text = document.getElementById('get_task_name').value;
    date = document.getElementById('get_task_completion_date').value;
    make_obj = {text,date};
    final_arr.push(make_obj);
    final_arr.forEach((value,index) => {
        obj = value;
        get_html += `<p>${obj.text}</p><p>${obj.date}</p><p><button onclick="final_arr.splice(${index},1);Delete()">Delete</button></p>`;
    });
    document.querySelector('.to-do-list').innerHTML = get_html;
    console.log(get_html);
    get_html = '';
    localStorage.setItem('to_do_list',JSON.stringify(final_arr));
}
function Delete()
{
    final_arr.forEach((value,index) => {
        obj = value;
        get_html += `<p>${obj.text}</p><p>${obj.date}</p><p><button onclick="final_arr.splice(${index},1);Delete()">Delete</button></p>`;
    });
    document.querySelector('.to-do-list').innerHTML = get_html;
    console.log(get_html);
    get_html = '';
    localStorage.setItem('to_do_list',JSON.stringify(final_arr));
}
const add_btn = document.getElementById('add_btn');
add_btn.addEventListener('click',get_todo_list);
