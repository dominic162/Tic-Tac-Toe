var a={
    'item1':'0',
    'item2':'0',
    'item3':'0',
    'item4':'0',
    'item5':'0',
    'item6':'0',
    'item7':'0',
    'item8':'0',
    'item9':'0'
}
function checker(id1,id2,id3,r){
    if(a[id1]===r && a[id2]===r &&a[id3]===r){
        let e1=document.getElementById(id1)
        let e2=document.getElementById(id2)
        let e3=document.getElementById(id3)
        e1.style.backgroundColor='rgb(165, 245, 86)'
        e2.style.backgroundColor='rgb(165, 245, 86)'
        e3.style.backgroundColor='rgb(165, 245, 86)'
        return true
    }
    else{
        return false
    }
}
function winner(symbol){
    if(checker('item1','item2','item3',symbol)){
        return true
    }
    if(checker('item4','item5','item6',symbol)){
        return true
    }
    if(checker('item7','item8','item9',symbol)){
        return true
    }
    if(checker('item1','item4','item7',symbol)){
        return true
    }
    if(checker('item2','item5','item8',symbol)){
        return true
    }
    if(checker('item3','item6','item9',symbol)){
        return true
    }
    if(checker('item1','item5','item9',symbol)){
        return true
    }
    if(checker('item3','item5','item9',symbol)){
        return true
    }
    return false
}
console.log(a['item1'])
count=1;
var p1=document.getElementById('player1')
var p1name=''
p1.addEventListener('input',function(e){
    p1name=e.target.value
})
var p2=document.getElementById('player2')
var p2name=''
p2.addEventListener('input',function(e){
    p2name=e.target.value
})
var p1s=document.getElementById('player1s')
var p1symbol=''
p1s.addEventListener('input',function(e){
    p1symbol=e.target.value
})
var p2s=document.getElementById('player2s')
var p2symbol=''
p2s.addEventListener('input',function(e){
    p2symbol=e.target.value
})
document.getElementById('main-content').addEventListener('click',function(e){
    if(p1name!='' && p1s!='' && p2name!='' && p2s!=''){
        let idr=e.target.id
        let element=document.getElementById(idr)
        if (a[idr]=='0') {
            if(count%2==1){
                a[idr]=p1symbol
                element.innerHTML=p1symbol;
            }
            else{
                a[idr]=p2symbol
                element.innerHTML=p2symbol
            }
            count++;
            let win
            if(winner(p1symbol)){
                win=p1name+' wins the game'
                alert(win)
            }
            if(winner(p2symbol)){
                win=p1name+' wins the game'
                alert(win)
            }
        }
    }
    else{
        alert('Please fill all input fields\nThank you :-)')
    }
})
