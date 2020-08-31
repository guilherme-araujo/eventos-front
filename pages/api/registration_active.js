

export default (req, res) => {
    res.statusCode = 200
    var today = new Date();
    var limit = new Date('2020-09-15');
    if(today > limit){
        res.json({ open: 'false' })
    } else{
        res.json({ open: 'true' })
    }
    
}
