var className = ["green-class","red-class"]
function submitForm(){
    const color=$('#color').val();

       if (color == className[0] || color == className[1]) {
        let output=`<div class="${color}"></div>`
        $('#show').html(output);
       } else{
        alert('class not found');
       }
       
}
