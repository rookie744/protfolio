let cal_string = localStorage.getItem('cal_history') || '';
document.querySelector('.calculator-result').innerHTML = cal_string;
function calculator(val)
{
    if (val === '=')
    { 
        cal_string = eval(cal_string);
    }
    else if(val === 'AC')
    {
        cal_string = '';
    }
    else 
    {
        cal_string += val;
    }
    document.querySelector('.calculator-result').innerHTML = cal_string;
    localStorage.setItem('cal_history',cal_string);
};