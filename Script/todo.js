let text;
let date;
let make_obj = {};
let final_arr=[];
function get_todo_list()
{
    text = document.getElementById('get_task_name').value;
    date = document.getElementById('get_task_completion_date').value;
    make_obj = {text,date};
    final_arr.push(make_obj);
    let get_html = '';
    for(let i=0;i < final_arr.length;i++)
    {
        let obj = {};
        obj = final_arr[i];
        // {text,date} = {obj};
        console.log(obj);
    }
}