            let com_choice_num;
            let com_choice_str;
            let result;
            //creating a object to store and retrive the win lose tie data
            // stored the value of the object in local storage in the last set . now retrive the value of local storage 
            // note : change the string value to object again using parse , object and JSON are same , but only this is JSON doesn't support method(function inside the object)
            const score = JSON.parse(localStorage.getItem('score')) 
            ||  
            {
                won : 0,
                lose : 0,
                tie : 0
            }
            document.getElementById('score-history').innerHTML = `Won : ${score.won},Lose : ${score.lose},Tie : ${score.tie}`;
            // console.log(score);
            function game(val)
            {
                com_choice_num = Math.random(); // it will retrun the random number from 0 to 1 
                //below i am going to split into 4 part 0 to 1/3 -- ROCK and 1/3 to 2/3 --PAPER and 2/3 to 1 --SCISSORS
                if (com_choice_num >= 0 && com_choice_num < 1/3)
                {
                    com_choice_str = 'SCISSORS';
                }
                else if (com_choice_num >= 1/3 && com_choice_num < 2/3)
                {
                    com_choice_str = 'PAPER';
                }
                else if (com_choice_num >= 2/3 && com_choice_num <= 1)
                {
                    com_choice_str = 'ROCK';
                }
                //Comparing with the user clicked value with computer generated string
                if (val === com_choice_str)
                {
                    result = 'tie';
                }
                else if (val === 'RESET')
                {
                    result = false;
                }
                else 
                {
                    //Defining the rock condition to the computer 
                    if (val === 'ROCK' && com_choice_str === 'PAPER')
                    {
                        result = 'lose';
                    }
                    else if (val === 'ROCK' && com_choice_str === 'SCISSORS')
                    {
                        result = 'won';
                    }
                    //Defining condition for the PAPER
                    else if (val === 'PAPER' && com_choice_str === 'ROCK')
                    {
                        result = 'won';
                    }
                    else if (val === 'PAPER' && com_choice_str === 'SCISSORS')
                    {
                        result = 'lose';
                    }
                    //Defining condition for the SCISSORS
                    else if (val === 'SCISSORS' && com_choice_str === 'ROCK')
                    {
                        result = 'lose';
                    }
                    else if (val === 'SCISSORS' && com_choice_str === 'PAPER')
                    {
                        result = 'won';
                    }
                }
                    if (result === 'lose')
                    {
                        score.lose += 1;
                    }
                    else if (result === 'won')
                    {
                        score.won += 1;
                    }
                    else if (result === 'tie')
                    {
                        score.tie += 1;
                    }

                    //result ? alert(`USER : <img src="Images/${val.toLowerCase()}-emoji.png">  and COMPUTER : <img src="Images/${com_choice_str.toLowerCase()}-emoji.png">, Match : You ${result}`)  : alert('Score cleared');
                    if (result)
                    {
                        document.getElementById('score-board').innerHTML = `USER : <img class="img-scoreboard" src="Images/${val.toLowerCase()}-emoji.png">  and COMPUTER : <img  class="img-scoreboard" src="Images/${com_choice_str.toLowerCase()}-emoji.png">, Match : You ${result}`;
                    }
                    else
                    {
                        let status = confirm('Are you sure want to clear the score');
                        if (status)
                        {
                        localStorage.removeItem('score');
                        document.getElementById('score-board').innerHTML = 'Score cleared';
                        location.reload();
                        }
                        else
                        {
                            result = true;
                        }
                    };
                //storing the value in the local storage , value will be stored in the local storage of the browser , so it will retrive back ,it will not clear , while the page refersh is initiated
                if (result)
                localStorage.setItem('score',JSON.stringify(score)); // it will only allow string to store , changing the object to string using stringify
                // console.log(score);
                document.getElementById('score-history').innerHTML = `Won : ${score.won},Lose : ${score.lose},Tie : ${score.tie}`;
            }
let clear_interval = false;
let automate_interval = '';
const automate_btn= document.getElementById('AUTOMATE');
automate_btn.addEventListener('click',() =>
{
     
    if (!clear_interval)
    {
        automate_interval = 
        setInterval( () =>
        {
            system_choice = Math.random();
            let sys_option = '';
            if (system_choice >= 0 && system_choice < 1/3)
            {
                sys_option = 'PAPER';
            }
            else if (system_choice >= 1/3 && system_choice < 2/3)
            {
                sys_option = 'ROCK';
            }
            else if (system_choice >= 2/3 && system_choice <= 1)
            {
                sys_option = 'SCISSORS';
            };
            game(sys_option);
        },
        1000
        );
        clear_interval = true;
    }
    else if (clear_interval)
        {
            clearInterval(automate_interval);
            clear_interval = false;
        };

});

document.body.addEventListener('keydown',event => 
{
    if (event.key === 'r')
    {
        game('ROCK');
    }
    else if (event.key === 'p')
    {
        game('PAPER');
    }
    else if (event.key === 's')
    {
        game('SCISSORS');
    }
    else if (event.key === 'a')
    {
        if (!clear_interval)
    {
        automate_interval = 
        setInterval( () =>
        {
            system_choice = Math.random();
            let sys_option = '';
            if (system_choice >= 0 && system_choice < 1/3)
            {
                sys_option = 'PAPER';
            }
            else if (system_choice >= 1/3 && system_choice < 2/3)
            {
                sys_option = 'ROCK';
            }
            else if (system_choice >= 2/3 && system_choice <= 1)
            {
                sys_option = 'SCISSORS';
            };
            game(sys_option);
        },
        1000
        );
        clear_interval = true;
    }
    else if (clear_interval)
        {
            clearInterval(automate_interval);
            clear_interval = false;
        };
    }
    else if(event.key === 'Backspace')
    {
        game('RESET');
    };
}
);