document.getElementById('btn-deposit').addEventListener('click',function(){
    //get the deposit amount from deposit input field
    const depfield = document.getElementById('btn-submitter');
    const depvalue = depfield.value;
    const depvalueamount = parseFloat(depvalue);
    //step3 get the deposit total amount
    const deposittotal = document.getElementById('deposit-total');
    const deptotal =deposittotal.innerText;
    const deptotalvalue = parseFloat(deptotal);

    const currentdeposittotal = deptotalvalue+depvalueamount;
    deposittotal.innerText=currentdeposittotal;

    //step5 total value update

    const balance = document.getElementById('balance-total');
    const previousBalancetotal = balance.innerText;
    const balancevalue = parseFloat(previousBalancetotal);

    const currentTotal = balancevalue+depvalueamount;
    balance.innerText=currentTotal;

    //clear deposit field
    depfield.value='';

})