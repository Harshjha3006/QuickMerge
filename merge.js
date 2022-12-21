const pdfMergerModule = require('pdf-merger-js');
const mergerObj =  new pdfMergerModule();
const merger = async (p1,p2)=>{
    await mergerObj.add(p1);
    await mergerObj.add(p2);
    let d = new Date().getTime();
    await mergerObj.save(`public/${d}.pdf`);
    return d;
}
module.exports = merger;