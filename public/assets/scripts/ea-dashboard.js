/**
 * EA Dashboard
 * @author  Yifan Wu
 */
$(document).ready(function() {
    $.getJSON("https://testnet.blockexplorer.com/api/addr/"+$(".bitcoin-address").val() + "/balance",function(result){
        console.log(`data is ${JSON.stringify(result)}`);
        if(result){
            $(".number-btc").html(result/100000000);
            $(".number-network").html('BTCTEST');

        }else{
            $(".number-btc").html("Unconfigured");
            $(".number-network").html("Unconfigured");

        }
    });
});
