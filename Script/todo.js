let text;
let date;
let make_obj = {};
let final_arr= JSON.parse(localStorage.getItem('to_do_list')) || []; /* note : here used a OR condition , which help to set expected value if the local storage item is null */
let obj={};
let get_html = '';

/* function to get the data from the user and store it in local storage by convert JSON to STRING */
function get_todo_list()
{
    text = document.getElementById('get_task_name').value;
    date = document.getElementById('get_task_completion_date').value;
    make_obj = {text,date};
    final_arr.push(make_obj);
    final_arr.forEach((value,index) => {
        obj = value;
        get_html += `<p>${obj.text}</p><p>${obj.date}</p><p><button class="btn-delete-to-do">Delete</button></p>`;
    });
    document.querySelector('.to-do-list').innerHTML = get_html;
    console.log(get_html);
    get_html = '';
    localStorage.setItem('to_do_list',JSON.stringify(final_arr));
    delete_fun();
}

/* Using for render the stored data in the local storage and it can use any were if needed */
function render_to_list()
{
    final_arr.forEach((value,index) => {
        obj = value;
        get_html += `<p>${obj.text}</p><p>${obj.date}</p><p><button class="btn-delete-to-do">Delete</button></p>`;
    });
    document.querySelector('.to-do-list').innerHTML = get_html;
    console.log(get_html);
    get_html = '';
    localStorage.setItem('to_do_list',JSON.stringify(final_arr));
    delete_fun();
}
const add_btn = document.getElementById('add_btn');
add_btn.addEventListener('click',get_todo_list);

/* instead of onclick use event listenere by using the below function , it will add the eventlistener to all the delete button using for each*/
function delete_fun()
{
let set_del_fun = document.querySelectorAll('.btn-delete-to-do');
set_del_fun.forEach((delete_btn,index)=>
{
 delete_btn.addEventListener('click',() =>
{
    final_arr.splice(index,1);
    render_to_list();
})
});
};

render_to_list();
