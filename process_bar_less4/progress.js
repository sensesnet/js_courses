function myProgressBar(){

    let methods;
    var elem = document.querySelector('#myBar');

        function go(a){
            var width = 2;
            var id = setInterval(frame,1000/a);
            console.log(id);
            function frame(){
                if(width<500-3){
                        elem.style.width=width+'px';
                        width++;
                    }
                else clearInterval(id);
            }
        }

        function clear(b){
            elem.style.width=b+'px';
        }

        methods = {
            clear,
            go
        }
    return methods;   
};


const pr = new myProgressBar();

(() => {
    //action
    const clearAction = document.querySelector('#cle');
    const start = document.querySelector('#start');
    const input = document.querySelector('#val');
    var elem = document.querySelector('#progress_bar');

    start.addEventListener('click',() => {
        console.log(input.value);
        pr.go(input.value);
    });

    clearAction.addEventListener('click',() => {
        console.log(0);
        pr.clear(0);
    });
})()