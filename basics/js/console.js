function processSingleOrder(orderId){
    return new Promise(resolve=>{
        const processTime=500+Math.random()*100+2000;
        setTimeout(()=>{
            resolve({
                orderId,
                status:'processed',
                processTime:Math.round(processTime)
            });
        },processTime);
    });

}
const orderBatch=['order101','order102','order103','order104'];
Promise.allSettled(orderBatch.map(processSingleOrder))
.then(results=>{
    console.log('All prders processed:');
    console.table('results');
    console.totaltime=results.reduce((sum,order)=>sum+order.value.processTime,0);
    cconsole.log(`Total processing time:${totalTime} ms`);

})
.catch(error=>{
    console.error('Batch processing failed:',error);
});