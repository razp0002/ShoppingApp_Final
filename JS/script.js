var listItem = JSON.parse(localStorage.getItem('itemArray')) || [];
var sendItem;
var i = listItem.length;

$(document).ready(function(){
    if (i > 0){
        for (var n = 1; n <= i;n++){
            $('.list').append(
                '<li>' + listItem[(n-1)] + '<input type="button" value="Delete" class="btnDel"></li>'
            );
        }
    }
    
    $('#btnAdd').click(function(){
        sendItem = document.getElementById('item').value;
        listItem.push(sendItem);
        console.log(sendItem);
        console.log(listItem);
        console.log(i);
        document.getElementById('item').value = ('');
        localStorage.setItem('itemArray', JSON.stringify(listItem));
        if (i <= 0){
            $('.list').append(
                '<li>' + listItem[0] + '<input type="button" value="Delete" class="btnDel"></li>'
            );
        }
        else {
            $('.list').append(
                '<li>' + listItem[i] + '<input type="button" value="Delete" class="btnDel"></li>'
            );
        }
        i++;
    });
    
    $('.btnDel').click(function(){
        $(this).closest('li').remove();
    });
});
