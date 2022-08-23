document.getElementById('btn-withdrawer').addEventListener('click',function(){
    const withdrawfield=document.getElementById('btn-withdraw');
    const withdrawstring = withdrawfield.value;
    const newamount = parseFloat(withdrawstring);

    const previous = document.getElementById('withdraw-total');
    const previousvalue = previous.innerText;
    const prevvalue = parseFloat(previousvalue);
    
    const total = prevvalue+newamount;
    previous.innerText=total;

    const balance = document.getElementById('balance-total');
    const previousBalancetotal = balance.innerText;
    const balancevalue = parseFloat(previousBalancetotal);

    const currentTotal = balancevalue-newamount;
    balance.innerText=currentTotal;


})